import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  Ctype=[];
  constructor(private blogservice: BlogService, private router: Router) { }

  ngOnInit() {
    this.blogservice.getCategoriesType().subscribe(res => {
    this.Ctype = res.Categories;
    })
  }

  submitForm(form: NgForm) {
    this.blogservice.postvalues(form.value);
    // console.log(form.value)
  }
}
