import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'questions', component: QuestionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
