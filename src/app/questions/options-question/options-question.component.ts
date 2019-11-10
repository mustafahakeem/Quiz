import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-options-question',
  templateUrl: './options-question.component.html',
  styleUrls: ['./options-question.component.scss']
})
export class OptionsQuestionComponent implements OnInit {
  @Input() question:any;
  

  constructor() { }

  ngOnInit() {
  }

}
