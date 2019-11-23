import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
    this.localQues=this.question;
  }
  answerClicked(){
    this.textAnswer.emit({questionId: this.localQues.id, answer: this.enteredAnswer});
  }

  OnValueChanged (event:any)
  {
    this.enteredAnswer = event.target.Value;
  }

}
