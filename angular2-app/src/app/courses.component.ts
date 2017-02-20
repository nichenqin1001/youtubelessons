import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})

export class CoursesComponent {
  title = 'The title of Courses';
  courses;
  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }
}
