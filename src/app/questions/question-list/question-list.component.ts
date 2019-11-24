import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/_services/question.service';
import { LocalStorageService } from 'src/app/_services/local-storage-service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  dbQuestions: any [];
  questionAns: any[];
  valueChanged: any;
  constructor(private questionService: QuestionService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.dbQuestions =  this.questionService.getQuestions();
    this.localStorageService.set("Questions", this.dbQuestions);
   
  }
  updateAnswerCount(event:any)
  {
    this.questionAns= this.localStorageService.get("QuestionAnswer");
    if(this.questionAns) {
      let otherQuestions = this.questionAns.filter(function(question) { 
               return question.questionId != event.questionId;
      });
      otherQuestions.push(event);
      this.questionAns.push(otherQuestions);
      this.localStorageService.set("QuestionAnswer", otherQuestions);
    } else {
      this.questionAns = [];
      this.questionAns.push(event);
      this.localStorageService.set("QuestionAnswer", this.questionAns);
    }
   
  }

  modifyAnswerCount(event:any){
    // this.questionAns= this.localStorageService.get("QuestionAnswer");
    // if(this.questionAns) {
    //   this.questionAns.push(event);
    // } else {
    //   this.questionAns.push(event);
    // }
    // this.localStorageService.set("QuestionAnswer", this.questionAns);
  }

  onValueChanged(event:any) {
    this.localStorageService.set("textAnswer", this.valueChanged);
  }

}
