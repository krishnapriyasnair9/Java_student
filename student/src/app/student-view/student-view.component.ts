// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-student-view',
//   imports: [],
//   templateUrl: './student-view.component.html',
//   styleUrl: './student-view.component.scss'
// })
// export class StudentViewComponent {

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { StudentService, Student } from '../student.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {

  student!: Student;

  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.studentService.getStudentById(id).subscribe(data => {
        this.student = data;
      });
    }
  }
}
