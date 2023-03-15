import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'model/student';
import { StudentService } from 'service/student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  student: Student ;
  

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private studentService: StudentService) {
    this.student = new Student();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  deleteStudent(id1:string){
    let id = parseInt(id1);
    this.studentService.delete(id).subscribe(result => this.gotostudent());
  }
  
    gotostudent() {
      this.router.navigate(['../']);
    }


}
