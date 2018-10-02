import { CoursesService } from './courses.service';
import {Component} from '@angular/core';
@Component({
    selector:'courses',
    templateUrl: './courses.component.html'
})
export class CoursesComponent{
    courses;
    email = "rahul.saha@globalds.com";
    isPrimary = true;
    constructor(service:CoursesService){
        this.courses = service.getCourses();
    }
    onSave($event){
        console.log("Save button is clicked");
    }
    onKeyUp(){
        console.log(this.email);
    }

    onRemove(course){
        let index = this.courses.indexOf(course);
        this.courses.splice(index,1);
    }

}