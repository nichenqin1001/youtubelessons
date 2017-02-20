import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
  title = 'The title of Courses';
  courses: ['course1', 'course2', 'course 3'];
}
