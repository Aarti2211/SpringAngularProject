import { Injectable } from '@angular/core';
import { Student } from 'model/student';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentUrl: string;
  constructor(private http:HttpClient) {
    this.studentUrl = 'http://localhost:10000/student';
   }
   public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl);
  }

  public save(student: Student) {
    return this.http.post<Student>(this.studentUrl, student);
  }
  public delete(id:number):Observable<Object>{
    return this.http.delete(`${this.studentUrl}/${id}`);
  }
  public update(student: Student,id:number):Observable<Object>{
    // return this.http.put<Patient>(this.usersUrl/{pid}, patient);
     return this.http.put(`${this.studentUrl}/${id}`,student);
   }
}
