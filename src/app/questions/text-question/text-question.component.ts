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



  constructor() { }

  ngOnInit() {
    this.localQues=this.question;
  }
  answerClicked(){
    this.textAnswer.emit(1);
  }

}
