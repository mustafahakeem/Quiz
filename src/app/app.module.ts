import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { TextQuestionComponent } from './questions/text-question/text-question.component';
import { OptionsQuestionComponent } from './questions/options-question/options-question.component';
import { QuestionService } from './_services/question.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    QuestionListComponent,
    TextQuestionComponent,
    OptionsQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
