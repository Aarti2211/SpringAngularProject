import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'model/student';
import { StudentService } from 'service/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: Student ;
 
  id:any;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private studentService: StudentService) {
    this.student = new Student();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  updateStudent(student:Student){
    let id = parseInt(student.id);
    this.studentService.update(this.student,id).subscribe(result => {
      console.log("Update student"+result);
      this.gotoStudent()});
  }

  gotoStudent() {
    this.router.navigate(['../']);
  }

}
