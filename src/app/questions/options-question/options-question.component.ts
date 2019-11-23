import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-options-question',
  templateUrl: './options-question.component.html',
  styleUrls: ['./options-question.component.scss']
})
export class OptionsQuestionComponent implements OnInit {
  @Input() question:any;
  optionQuestion:any;
  @Output() optionAnswer = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
    this.optionQuestion=this.question;
  }
  answerSubmit(){

    this.optionAnswer.emit(1)
  }

}
