import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'model/student';
import { StudentService } from 'service/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
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

  onSubmit() {
    this.studentService.save(this.student).subscribe((result: any) => this.gotoStudent());
  }
  gotoStudent() {
    this.router.navigate(['../']);
  }

 

}
