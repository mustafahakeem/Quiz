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
  answerCount=0;
  valueChanged: any;
  constructor(private questionService: QuestionService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.dbQuestions =  this.questionService.getQuestions();
    this.localStorageService.set("Questions", this.dbQuestions);
    this.answerCount =  this.localStorageService.get("AnswerCount");
  }
  updateAnswerCount(event:any)
  {
    this.answerCount++;
    this.localStorageService.set("AnswerCount", this.answerCount);
  }
  modifyAnswerCount(event:any){
    this.answerCount++;
  }
  onValueChanged(event:any){
    this.localStorageService.set("textAnswer", this.valueChanged);
  }

}
