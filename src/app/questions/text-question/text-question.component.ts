import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from 'src/app/_services/local-storage-service';

@Component({
  selector: 'app-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.scss']
})
export class TextQuestionComponent implements OnInit {
  @Input() question:any;
  localQues:any;
  @Output() textAnswer=new EventEmitter();
  enteredAnswer: string;
  questionAns: any[];


  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.localQues=this.question;
    this.questionAns =  this.localStorageService.get("QuestionAnswer");
    if(this.questionAns){
        const lastAnswered  =  this.questionAns.find(x=> x.questionId === this.localQues.id);
        if(lastAnswered){
        this.enteredAnswer = lastAnswered.answer;
        }
    }
  }
  answerClicked(){
    this.textAnswer.emit({questionId: this.localQues.id, answer: this.enteredAnswer});
  }

  onValueChanged (event:any)
  {
    this.enteredAnswer = event.target.value;
  }
}
