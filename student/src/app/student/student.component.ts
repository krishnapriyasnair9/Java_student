// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-student',
// //   imports: [],
// //   templateUrl: './student.component.html',
// //   styleUrl: './student.component.scss'
// // })
// // export class StudentComponent {

// // }
// import { Component, OnInit } from '@angular/core';
// import { Student, StudentService } from '../student.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';  // <<< IMPORT THIS
// import { Router } from '@angular/router';
// import { RouterModule } from '@angular/router';

// @Component({
//   imports:[CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
//   selector: 'app-student',
//   templateUrl: './student.component.html',
//   styleUrls: ['./student.component.scss'],
// })
// export class StudentComponent implements OnInit {

//   students: Student[] = [];
//   studentForm: FormGroup;
//   isEditMode: boolean = false;
//   editStudentId: number | null = null;

//   constructor(private studentService: StudentService, private fb: FormBuilder,private router: Router) {
//     this.studentForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       course: ['', Validators.required],
//       dateOfBirth: ['', Validators.required]
//     });
//   }

//   ngOnInit(): void {
//     this.loadStudents();
//   }

//   loadStudents() {
//     this.studentService.getAllStudents().subscribe(data => {
//       this.students = data;
//     });
//   }

//   submitForm() {
//     if (this.isEditMode && this.editStudentId !== null) {
//       this.studentService.updateStudent(this.editStudentId, this.studentForm.value).subscribe(() => {
//         this.loadStudents();
//         this.isEditMode = false;
//         this.studentForm.reset();
//       });
//     } else {
//       this.studentService.createStudent(this.studentForm.value).subscribe(() => {
//         this.loadStudents();
//         this.studentForm.reset();
//       });
//     }
//   }

//   editStudent(student: Student) {
//     this.isEditMode = true;
//     this.editStudentId = student.id!;
//     this.studentForm.patchValue({
//       name: student.name,
//       email: student.email,
//       course: student.course,
//       dateOfBirth: student.dateOfBirth
//     });
//   }

//   deleteStudent(id: number) {
//     if (confirm('Are you sure you want to delete this student?')) {
//       this.studentService.deleteStudent(id).subscribe(() => {
//         this.loadStudents();
//       });
//     }
//   }

//   cancelEdit() {
//     this.isEditMode = false;
//     this.studentForm.reset();
//   }
//   viewStudent(student: any) {
//     const studentDetailsWindow = window.open('', '_blank', 'width=600,height=400');
  
//     if (studentDetailsWindow) {
//       studentDetailsWindow.document.write(`
//         <html>
//           <head>
//             <title>Student Details</title>
//             <style>
//               body { font-family: Arial, sans-serif; padding: 20px; }
//               h2 { color: #2c3e50; }
//               p { margin-bottom: 10px; }
//             </style>
//           </head>
//           <body>
//             <h2>Student Details</h2>
//             <p><strong>ID:</strong> ${student.id}</p>
//             <p><strong>Name:</strong> ${student.name}</p>
//             <p><strong>Email:</strong> ${student.email}</p>
//             <p><strong>Course:</strong> ${student.course}</p>
//             <p><strong>Date of Birth:</strong> ${student.dateOfBirth}</p>
//           </body>
//         </html>
//       `);
//       studentDetailsWindow.document.close();
//     }
//   }
  
// }
import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from '../student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {

  students: Student[] = [];
  studentForm: FormGroup;
  isEditMode: boolean = false;
  editStudentId: number | null = null;

  constructor(
    private studentService: StudentService, 
    private fb: FormBuilder,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getAllStudents().subscribe(data => {
      this.students = data;
    });
  }

  submitForm() {
    if (this.studentForm.invalid) {
      alert('Please fill all required fields correctly. ❌');
      return;
    }

    if (this.isEditMode && this.editStudentId !== null) {
      this.studentService.updateStudent(this.editStudentId, this.studentForm.value).subscribe(() => {
        this.loadStudents();
        this.isEditMode = false;
        this.studentForm.reset();
        alert('Student updated successfully! ✅');
      });
    } else {
      this.studentService.createStudent(this.studentForm.value).subscribe(() => {
        this.loadStudents();
        this.studentForm.reset();
        alert('Student created successfully! ✅');
      });
    }
  }

  editStudent(student: Student) {
    this.isEditMode = true;
    this.editStudentId = student.id!;
    this.studentForm.patchValue({
      name: student.name,
      email: student.email,
      course: student.course,
      dateOfBirth: student.dateOfBirth
    });
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(() => {
        this.loadStudents();
        alert('Student deleted successfully! 🗑️');
      });
    }
  }

  cancelEdit() {
    this.isEditMode = false;
    this.studentForm.reset();
  }

  viewStudent(student: any) {
    const studentDetailsWindow = window.open('', '_blank', 'width=600,height=400');

    if (studentDetailsWindow) {
      studentDetailsWindow.document.write(`
        <html>
          <head>
            <title>Student Details</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              h2 { color: #2c3e50; }
              p { margin-bottom: 10px; }
            </style>
          </head>
          <body>
            <h2>Student Details</h2>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Email:</strong> ${student.email}</p>
            <p><strong>Course:</strong> ${student.course}</p>
            <p><strong>Date of Birth:</strong> ${student.dateOfBirth}</p>
          </body>
        </html>
      `);
      studentDetailsWindow.document.close();
    }
  }
}
