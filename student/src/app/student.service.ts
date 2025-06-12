// // // import { Injectable } from '@angular/core';

// // // @Injectable({
// // //   providedIn: 'root'
// // // })
// // // export class StudentService {

// // //   constructor() { }
// // // }
// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class StudentService {

// //   private baseUrl = 'http://localhost:8080/api/students';

// //   constructor(private http: HttpClient) { }

// //   getAllStudents(): Observable<any[]> {
// //     return this.http.get<any[]>(this.baseUrl);
// //   }

// //   getStudentById(id: number): Observable<any> {
// //     return this.http.get<any>(`${this.baseUrl}/${id}`);
// //   }

// //   createStudent(student: any): Observable<any> {
// //     return this.http.post(this.baseUrl, student);
// //   }

// //   updateStudent(id: number, student: any): Observable<any> {
// //     return this.http.put(`${this.baseUrl}/${id}`, student);
// //   }

// //   deleteStudent(id: number): Observable<any> {
// //     return this.http.delete(`${this.baseUrl}/${id}`);
// //   }
// // }
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class StudentService {

//   private baseUrl = 'http://localhost:8080/api/students';

//   constructor(private http: HttpClient) { }

//   getAllStudents(): Observable<any[]> {
//     return this.http.get<any[]>(this.baseUrl);
//   }

//   getStudentById(id: number): Observable<any> {
//     return this.http.get<any>(`${this.baseUrl}/${id}`);
//   }

//   createStudent(student: any): Observable<any> {
//     return this.http.post<any>(this.baseUrl, student);
//   }

//   updateStudent(id: number, student: any): Observable<any> {
//     return this.http.put<any>(`${this.baseUrl}/${id}`, student);
//   }

//   deleteStudent(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.baseUrl}/${id}`);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  id?: number;
  name: string;
  email: string;
  course: string;
  dateOfBirth: string; // ISO format (yyyy-MM-dd)
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/api/students'; // Change if different port

  constructor(private http: HttpClient) {}

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}`, student);
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}`);
  }

  // getStudentById(id: number): Observable<Student> {
  //   return this.http.get<Student>(`${this.baseUrl}/${id}`);
  // }
  getStudentById(id: number) {
    return this.http.get<Student>(`http://localhost:8080/api/students/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/${id}`, student);
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
