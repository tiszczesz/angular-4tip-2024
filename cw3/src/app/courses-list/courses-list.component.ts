import { Component, signal } from '@angular/core';
import { Course,courses } from '../../models/courses';


@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  myCourses = signal<Course[]>(courses)
}
