import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, URLSearchParams,RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BlogService {
  constructor(private _http:Http) { }

  private url:string = "http://localhost:2000/api/app/getCategory";
  private getCtype:string = "http://localhost:2000/api/get/all/categories";
  private getCategories:string = "http://localhost:2000/api/get/category/byCategoryType";
  private getposts:string = "http://localhost:2000/api/get/post/byCategory";


  getCategoriesType() {
        return this._http.get(this.getCtype)
          .map((res:Response)=> res.json())
          .catch(this.errHandler);
  }

  categoryByCategoryType(category_type){
    return this._http.get(this.getCategories + "/" + category_type)
      .map((res:Response)=> res.json())
      .catch(this.errHandler);

  }

  postvalues(formValues){
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions({ headers: headers});
    this._http.post('http://localhost:2000/api/add/post',formValues, options)
    .subscribe(res => {
        console.log(res);
    });
  }

  postCategory(formValues){
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions({ headers: headers});
    return this._http.post('http://localhost:2000/api/add/category',formValues, options);

  }

  getPosts(selectedCategory){
    return this._http.get(this.getposts + "/" + selectedCategory)
      .map((res:Response)=> res.json())
      .catch(this.errHandler);
  }

  postComment(comment){
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions({ headers: headers});
    return this._http.post('http://localhost:2000/api/post/comment',comment, options);

  }

  errHandler(error: Response){
    console.error(error);
    return Observable.throw(error || "Server Error");
  }

}
