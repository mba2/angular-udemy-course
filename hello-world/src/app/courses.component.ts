import { AuthorsService } from './authors.service';
import { Component } from '@angular/core';

@Component({
	selector : 'courses',
	template :  `
	<h1>{{ test | summary:10 }}</h1>
	<h2>{{ authorsList.length }} Authors</h2>
	<ul>
		<li *ngFor='let author of authorsList'>{{ author }}</li>
	</ul>
	<button (click)='onSave($event)'>Save</button>
	<!-- FILTERING AN EVENT  -->
	<input type='text' (keyup.enter)='onKeyUp($event)' />
	<!-- TEMPLATE VARIABLE (#myInput)  -->
	<input #myInput type='text' (keyup)='onKeyUp2(myInput.value)' />
	<!-- TWO WAY BINDING -->
	<input type='text' [(ngModel)]="twoWayInput" (keyup.enter)='onKeyUp3()' />
	<course></course>
	`
})

export class CoursesComponent {
	test = "Courses Component asd ds sadasdasdsa asdasdsadasdas dasdasdasdasdasdasdasd";
	courses: number[] = [1,2,3]; 
	authorsList : string[];
	twoWayInput = 'initial value';

	constructor(authors : AuthorsService) {
		this.authorsList = authors.getAuthors();
	};

	onSave($event) {
		console.log($event);
	};
	onKeyUp($event) {
		console.log($event.target.value);
	};
	onKeyUp2(value) {
		console.log(value);
	};
	onKeyUp3() {
		console.log(this.twoWayInput);
	};
}