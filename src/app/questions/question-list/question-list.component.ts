import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/_services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  dbQuestions: any [];
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.dbQuestions =  this.questionService.getQuestions();
  }
}
