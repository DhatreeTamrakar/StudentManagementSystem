using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using StudentManagementAPI.Data;
using StudentManagementAPI.Models;

namespace StudentManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize] // 🔐 JWT ENABLED
    public class StudentController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly ILogger<StudentController> _logger;

        public StudentController(AppDbContext context, ILogger<StudentController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET ALL
        [HttpGet]
        public IActionResult GetAllStudents()
        {
            _logger.LogInformation("Fetching all students");

            var students = _context.Students.ToList();

            return Ok(students);
        }

        // GET BY ID
        [HttpGet("{id}")]
        public IActionResult GetStudentById(int id)
        {
            _logger.LogInformation($"Fetching student with ID: {id}");

            var student = _context.Students.Find(id);

            if (student == null)
            {
                _logger.LogWarning($"Student not found with ID: {id}");
                return NotFound();
            }

            return Ok(student);
        }

        // POST
        [HttpPost]
        public IActionResult AddStudent(Student student)
        {
            _logger.LogInformation("Adding new student");

            _context.Students.Add(student);
            _context.SaveChanges();

            return Ok(student);
        }

        // PUT
        [HttpPut("{id}")]
        public IActionResult UpdateStudent(int id, Student updatedStudent)
        {
            var student = _context.Students.Find(id);

            if (student == null)
                return NotFound();

            student.Name = updatedStudent.Name;
            student.Email = updatedStudent.Email;
            student.Age = updatedStudent.Age;
            student.Course = updatedStudent.Course;

            _context.SaveChanges();

            return Ok(student);
        }

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int id)
        {
            var student = _context.Students.Find(id);

            if (student == null)
                return NotFound();

            _context.Students.Remove(student);
            _context.SaveChanges();

            return Ok("Deleted");
        }
    }
}