import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService {

  constructor() { }

  getQuestions() {
     const questions = [
         {id:1, text: 'My first question', quesType: 1} ,
         {id:2, text: 'My Second question', quesType: 1},
         {id:3, text: 'Third question', quesType: 2 , options:  this.getOptions(1)},
         {id:4, text: 'Fourth question', quesType: 2 , options:  this.getOptions(2)}
     ];
     return questions;
  }
  getOptions(optionVal:number){
    const options = [
       {text: 'option' + optionVal+ 1 , value: optionVal+ 1} ,
       {text: 'option' +optionVal+ 2, value: optionVal+ 2},
       {text: 'option' +optionVal+ 3, value: optionVal+ 3}
      ]
     return options
  }
}
