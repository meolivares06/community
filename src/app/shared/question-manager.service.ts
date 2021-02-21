import { Injectable } from '@angular/core';
import {Question} from "./Question";
import {Observable } from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import {map} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class QuestionManagerService {

  question_list = [];
  serviceURL = environment.url

  popular = '_sort=-vote_up&_order=desc';
  recent = '_sort=-created&_order=desc';
  pinned = 'pinned=true&_order=desc';

  
  constructor(private httpClient: HttpClient) { }

  getList(filter): Observable<Question[]> {
    switch(filter){
      case 'popular':
        return this.getListPopular()
      case 'recent':
        return this.getListRecent()
      case 'pinned':
        return this.getListPinned()
      default:
        return this.getListPopular()
    }

  }
  
  getListRecent(): Observable<Question[]> {
    const url = `${this.serviceURL}/questions?${this.recent}`
    return this.httpClient.get(url, httpOptions).pipe(
      map((response: Question[]) => response)
    )
  }

  getListPopular(): Observable<Question[]> {
    const url = `${this.serviceURL}/questions?${this.popular}`
    return this.httpClient.get(url, httpOptions).pipe(
      map((response: Question[]) => response)
    )
  }

  getListPinned(): Observable<Question[]> {
    const url = `${this.serviceURL}/questions?${this.pinned}`
    return this.httpClient.get(url).pipe(
      map((response: Question[]) => response)
    )
  }


  voteUp(question: Question) {
    const url = `${this.serviceURL}/questions/${question.id}`
    return this.httpClient.put(url, {...question, vote_up: question.vote_up+1 })
  }

  voteDown(question: Question) {
    const url = `${this.serviceURL}/questions/${question.id}`
    return this.httpClient.put(url, {...question, vote_up: question.vote_up-1 })
  }

  pin(question: Question) {
    const url = `${this.serviceURL}/questions/${question.id}`
    return this.httpClient.put(url, {...question, pinned: !question.pinned })
  }

  createQuestion(question: Question){
    const url = `${this.serviceURL}/questions`
    return this.httpClient.post(url, {...question })
  }
}

// Falta validar voute up
