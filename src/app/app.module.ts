import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddCategoryComponent } from './add-category/add-category.component';

import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'addPost',
    component: AddPostComponent
  },
  {
    path:'addCategory',
    component:AddCategoryComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddPostComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
