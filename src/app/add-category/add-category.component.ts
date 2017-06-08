import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  Ctype=[];
  constructor(private blogservice: BlogService, private router: Router) { }

  ngOnInit() {
    this.blogservice.getCategoriesType().subscribe(res => {
    this.Ctype = res.Categories;
    })
  }

  submitForm(form: NgForm) {
    this.blogservice.postCategory(form.value)
    // console.log(form.value)
  }

}
