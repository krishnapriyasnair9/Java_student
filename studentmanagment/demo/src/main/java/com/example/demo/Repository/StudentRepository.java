// package com.example.demo.Repository;
// import com.example.demo.Entity.Student;
// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;
// //Product=product.java
// // Long -wrapper class
// @Repository
// public interface StudentRepository extends JpaRepository<Student, Long> {
// }
package com.example.demo.Repository;

import com.example.demo.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}


