import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService {

  constructor() { }

  getQuestions() {
     const questions = [
         {name: 'My first question', quesType: 1} ,
         {name: 'My Second question', quesType: 1},
         {name: 'Third question', quesType: 2}
     ];
     return questions;
  }
}
