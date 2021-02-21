import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {NgForm} from "@angular/forms";
import {Question} from "../../shared/Question";
import {QuestionManagerService} from "../../shared/question-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  constructor(private questionManagerService: QuestionManagerService, private location: Location, private router: Router) { }

  ngOnInit(): void {
  }

  onAddQuestion(form: NgForm) {
    const value = form.value;
    let question: Question;

    question = {
      title: value.question__title,
      description: value.question__text,
      vote_up: 0,
      vote_down: 0,
      pinned: false,
      comments_qt: 0,
      // Information relative to the student
      grade:'6',
      category: 'Matemática',
      username: 'guest'
    }

    this.questionManagerService.createQuestion(question).subscribe(
      (response) => {

        this.router.navigate(['/popular-questions'])
        console.log(response)
      },
      (error) => console.log(error)
    )
  }

  onCancel() {
    this.location.back()
  }
}
