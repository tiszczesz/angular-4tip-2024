import { Component, signal } from '@angular/core';
import { Course, courses } from '../../models/courses';


@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  removeCourse(id: number) {
    this.myCourses.update(courses => courses.filter((value, i) => i !== id));
  }
  cities = ['Warszawa', 'Kraków', 'Wrocław', 'Gdańsk', 'Katowice', 'Poznań'];
  addCourse(courseName: HTMLInputElement, couseDate: HTMLInputElement, courseCity: HTMLSelectElement) {
    if(courseName.value === '' || couseDate.value === '' || courseCity.value === '') {
      return;
    }
    this.myCourses.update(
      courses => [...courses, {
        name: courseName.value,
        date: new Date(couseDate.value),
        city: courseCity.value
      }]);
    courseName.value = '';
    couseDate.value = '';
    
  }
  myCourses = signal<Course[]>(courses)
}
