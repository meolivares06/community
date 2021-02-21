import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../shared/Question";

/**
 * Represents a single Question
 */
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Output() vote_up: EventEmitter<Question> = new EventEmitter<Question>()
  @Output() vote_down: EventEmitter<Question> = new EventEmitter<Question>()
  @Output() pin: EventEmitter<Question> = new EventEmitter<Question>()
  color = 1;

  currentClasses: {};

  constructor() { }

  ngOnInit(): void {
    this.color = Math.round(Math.random() * 4);
    if (this.color > 3) this.color = 0
    this.setCurrentClasses()
  }


  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      'question__user-avatar--blue':this.color === 0,
      'question__user-avatar--yellow':this.color === 1,
      'question__user-avatar--orange':this.color === 2,
      'question__user-avatar--pink':this.color === 3,
    };
  }

  onVoteUp(event: Event): void {
    event.preventDefault()
    this.vote_up.next(this.question)
  }

  onVoteDown(event): void {
    event.preventDefault()
    this.vote_down.next(this.question)
  }

  onComment(event): void {
    event.preventDefault()
   alert('onComment')
  }

  onChangePinned(event, b: boolean): void {
    event.preventDefault()
    this.pin.next(this.question)
  }

  onShare(event: MouseEvent) {
    event.preventDefault();
    alert('on Share')
// Math.round(Math.random() * 4)
  }
}
