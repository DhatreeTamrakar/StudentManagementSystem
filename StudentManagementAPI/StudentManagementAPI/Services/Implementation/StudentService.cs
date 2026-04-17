using StudentManagementAPI.Models;
using StudentManagementAPI.Repositories.Interfaces;
using StudentManagementAPI.Services.Interfaces;

namespace StudentManagementAPI.Services.Implementations
{
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository _repo;

        public StudentService(IStudentRepository repo)
        {
            _repo = repo;
        }

        public async Task<List<Student>> GetAllStudents()
        {
            return await _repo.GetAll();
        }

        public async Task<Student?> GetStudentById(int id)
        {
            return await _repo.GetById(id);
        }

        public async Task<Student> AddStudent(Student student)
        {
            return await _repo.Add(student);
        }

        public async Task<Student?> UpdateStudent(int id, Student student)
        {
            return await _repo.Update(id, student);
        }

        public async Task<bool> DeleteStudent(int id)
        {
            return await _repo.Delete(id);
        }
    }
}