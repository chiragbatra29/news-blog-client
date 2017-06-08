import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  flag:boolean = false;
  postflag:boolean = false;
  Ctype= [];
  activeCategory;
  categories= [];
  posts = [];
  constructor(private blogservice: BlogService, private router: Router) {
 }

  ngOnInit() {
    this.blogservice.getCategoriesType().subscribe(res => {
    this.Ctype = res.Categories;
    })
  }


  selectedCategory(item){
    this.flag = true;
    this.blogservice.categoryByCategoryType(item).subscribe(res => {
    this.categories = res.categories;
    })
  }

  getPosts(item){
    this.activeCategory = item;
    this.postflag = true;
    this.blogservice.getPosts(item).subscribe(res =>{
      this.posts = res.posts;
      // console.log(this.posts);
    })
  }

  postComment(comment,post){
      var comment1 = {
        "comment":comment,
        "username" : "batra",
		    "email" : "chiragbatra1994@gmail.com",
		    "post_name": post,
      }
    this.blogservice.postComment(comment1).subscribe(res => {
      this.blogservice.getPosts(this.activeCategory).subscribe(res =>{
          this.posts = res.posts;
      })
    });


  }
}
