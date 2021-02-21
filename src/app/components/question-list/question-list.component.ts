import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {QuestionManagerService} from "../../shared/question-manager.service";
import {Observable, Subject, Subscription} from "rxjs";
import {Question} from "../../shared/Question";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionListComponent implements OnInit, OnDestroy {

  question_list$: Observable<Question[]>;
  _showCreateWindow = false;
  filter = ''
  private subscriptionRoute: Subscription;

  loading: Subject<boolean> = new Subject()
  loading$ = this.loading.asObservable()

  constructor(
    private questionManagerService: QuestionManagerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.question_list$ = this.questionManagerService.getListPopular()
    this.subscriptionRoute = this.route.data.pipe(
      tap(params => {
        this.filter = params.filter
      }),
      switchMap(value => {
        this.loading.next(true)
        this.question_list$ = this.questionManagerService.getList(this.filter)
        return this.question_list$
      })
    ).subscribe(
      (response) => {
        console.log(response)
        this.question_list$ = this.questionManagerService.getList(this.filter)
        this.loading.next(false)
      },
      (error) => console.log(error)
    )


  }

  ngOnDestroy(): void{
    this.subscriptionRoute.unsubscribe()
  }

  onNewQuestion(event: MouseEvent) {
    event.preventDefault()
    this.router.navigate(['/newquestion'])
  }


  onVoteUp(question: Question) {
    this.questionManagerService.voteUp(question).subscribe(
      (response) => {
        console.log(response)
        this.question_list$ = this.questionManagerService.getList(this.filter)
        this.loading.next(false)
      },
      (error) => console.log(error)
    )
  }

  onVoteDown(question: Question) {
    this.questionManagerService.voteDown(question).subscribe(
      (response) => {
        console.log(response)
        this.question_list$ = this.questionManagerService.getList(this.filter)
        this.loading.next(false)
      },
      (error) => console.log(error)
    )
  }

  onChangePin(question: Question) {
    this.loading.next(true)
    this.questionManagerService.pin(question).subscribe(
      (response) => {
        console.log(response)
        this.question_list$ = this.questionManagerService.getList(this.filter)
        this.loading.next(false)
      },
      (error) => console.log(error)
    )
  }
}
