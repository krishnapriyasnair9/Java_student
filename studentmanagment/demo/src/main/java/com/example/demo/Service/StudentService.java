// package com.example.demo.Service;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import com.example.demo.Entity.Student;
// import com.example.demo.Repository.StudentRepository;
// import java.util.List;

// @Service
// public class StudentService {
//     @Autowired //object is creating automatically
//     private StudentRepository repo; //repo is an object of
// // productrepository (inside respository)

//     public List<Student> getAllProducts() {
//         return repo.findAll();
//     }
//     public List<Long> getAllId()
//     {
//         return repo.findAll()
//         .stream().map(Student::getId)
//         .toList();
//     }

//     // public void deleteProduct(Long id) {
//     //     repo.deleteById(id);
//     // }


//     public Student createProduct(Student product) {
//         return repo.save(product);
//     }

//     public Student getProductById(Long id) {
//         return repo.findById(id).orElse(null);
//     }

//     public Optional<Student> getProductByIdOptional(Long id) {
//         return repo.findById(id);
//     }

//     public Student saveProduct(Student product) {
//         return repo.save(product);
//     }
//     public void deleteProduct(Long id) {
//         repo.deleteById(id);
//     }
// }


package com.example.demo.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Student;
import com.example.demo.Repository.StudentRepository;
import java.util.List;
@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    public Optional<Student> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    public Student updateStudent(Long id, Student updatedStudent) {
        Student student = studentRepository.findById(id).orElseThrow(() -> new RuntimeException("Student not found"));
        student.setName(updatedStudent.getName());
        student.setEmail(updatedStudent.getEmail());
        student.setCourse(updatedStudent.getCourse());
        student.setDateOfBirth(updatedStudent.getDateOfBirth());
        return studentRepository.save(student);
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    
}



