import { Component, OnInit } from '@angular/core';
import {Wakanda} from '../wakanda.service'

@Component({
  selector: 'new',
  templateUrl: './new.component.html',
   providers : [Wakanda]
})
export class NewComponent implements OnInit {
  newBook : {};
  constructor(public wakanda:Wakanda) {
    // Do stuff
  }
  
  public onNewEntry(){
  	this.wakanda.catalog.then(ds=>{
  		ds.Author.create({name:this.newBook.author}).save().then(author => {
  			ds.Book.create({title:this.newBook.title,author:author,upvote:0,downvote:0}).save().then(book =>{
  				let file = document.getElementById('fileInput').files[0];
  				 book.cover.upload(file).then( () => {
    				this.newBook = {title:'',author:'',cover:''}
    				document.getElementById("message").innerHTML = "Book Saved !!!!"
  				});
  			});
  		});
  	});
  }

  ngOnInit() {
    this.newBook = {title:'',author:''}
  }

}
