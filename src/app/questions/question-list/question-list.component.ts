import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/_services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  dbQuestions: any [];
  answerCount=0;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.dbQuestions =  this.questionService.getQuestions();
  }
  updateAnswerCount(event:any)
  {
    this.answerCount++;
  }
}
