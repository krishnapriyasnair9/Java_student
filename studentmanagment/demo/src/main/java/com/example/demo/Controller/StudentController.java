// package com.example.demo.Controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PatchMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;
// import java.util.Optional;
// import com.example.demo.Entity.Product;
// import com.example.demo.Service.ProductService;

// import java.util.List;
// @RestController
// @RequestMapping("/products")
// public class ProductController {
//     @Autowired
//     private ProductService service;


//     @GetMapping("")
//     public List<Product> getAllProducts() {
//         return service.getAllProducts();
//     }
//     @GetMapping("/id")
//         public List<Long>getAllId(){
//             return service.getAllId();
//     }

//      @PostMapping("/create")
//     public ResponseEntity<Product> createProduct(@RequestBody Product product) {
//         Product savedProduct = service.createProduct(product);
//         return ResponseEntity.ok(savedProduct);
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<Product> getProductById(@PathVariable Long id) {
//     Product product = service.getProductById(id);
//     if (product != null) {
//         return ResponseEntity.ok(product);
//     } else {
//         return ResponseEntity.notFound().build();
//     }
// }

// @PatchMapping("/{id}")
// public ResponseEntity<Product> updateProduct(@PathVariable Long id,
// @RequestBody Product updatedProduct) {
//     return service.getProductByIdOptional(id).map(product -> {
//         if (updatedProduct.getName() != null)
// product.setName(updatedProduct.getName());
//         if (updatedProduct.getPrice() != null)
// product.setPrice(updatedProduct.getPrice());
//         Product saved = service.saveProduct(product);
//         return new ResponseEntity<>(saved, HttpStatus.OK);
//     }).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
// }

// @DeleteMapping("/{id}")
// public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
//     Optional<Product> productOpt = service.getProductByIdOptional(id);
//     if (productOpt.isPresent()) {
//         service.deleteProduct(id);
//         return ResponseEntity.ok("Product deleted successfully");
//     } else {
//         return ResponseEntity.notFound().build();
//     }
// }
// }
package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Student;
import com.example.demo.Service.StudentService;

@CrossOrigin(origins = "http://localhost:4200") // Allow Angular to call backend
@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        return studentService.createStudent(student);
    }

    @GetMapping("/{id}")
    public Optional<Student> getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id, @RequestBody Student student) {
        return studentService.updateStudent(id, student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }
    @GetMapping
    public List<Student> getAllStudents() {
    return studentService.getAllStudents();
}

}



