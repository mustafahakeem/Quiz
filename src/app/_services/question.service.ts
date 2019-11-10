import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService {

  constructor() { }

  getQuestions() {
     const questions = [
         {name: 'My first question', quesType: 1} ,
         {name: 'My Second question', quesType: 1},
         {name: 'Third question', quesType: 2 , options:  this.getOptions(1)},
         {name: 'Fourth question', quesType: 2 , options:  this.getOptions(2)}
     ];
     return questions;
  }
  getOptions(optionVal:number){
    const options = [
       {option: 'option' + optionVal+ 1 , value: optionVal+ 1} ,
       {option: 'option' +optionVal+ 2, value: optionVal+ 2},
       {option: 'option' +optionVal+ 3, value: optionVal+ 3}
      ]
     return options
  }
}
