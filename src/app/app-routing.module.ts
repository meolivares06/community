import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from "./components/not-found/not-found.component";
import {QuestionFormComponent} from "./components/question-form/question-form.component";
import {QuestionListComponent} from "./components/question-list/question-list.component";

const routes: Routes = [
  {
    path: 'newquestion',
    component: QuestionFormComponent
  },
  {
    path: 'popular-questions',
    component: QuestionListComponent,
    data: {
      filter: 'popular'
    }
  },
  {
    path: 'recent-questions',
    component: QuestionListComponent,
    data: {
      filter: 'recent'
    }
  },{
    path: 'pinned-questions',
    component: QuestionListComponent,
    data: {
      filter: 'pinned'
    }
  },
  { path: '', redirectTo: '/popular-questions', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
