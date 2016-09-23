import { Component, OnInit } from '@angular/core';
import {Wakanda} from '../wakanda.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  providers : [Wakanda]
})
export class HomeComponent implements OnInit {

  books : any;	
  constructor(public wakanda:Wakanda) {
    // Do stuff
  }
  
  public listBooks(){
  	this.wakanda.catalog.then(ds=>{
  		ds.Book.query({select:'author'}).then(list => {
  			this.books = list.entities;
  		});
  	});
  }

 public onVote(book,vote){
 	/*Optimization since we are manupilating a book object*/
 	
 	if(vote == 'up'){
 		book.upvote++;
 		book.save().then(()=>{
 			console.log('up vote')
 		}).catch(e=>{
   			console.log(e)
  		});
 	}else{
 		book.downvote++;
 		book.save().then(()=>{
 			console.log('down vote')
 		}).catch(e=>{
 			console.log(e)
 		});
 	}
 	
 	//Get to know 'find' method
 	
 	/*
 	this.wakanda.catalog.then(ds=>{
 		ds.Book.find(book.ID).then(()=>{
 			if(vote == 'up'){
 				book.upvote++;
 			}else{
 				book.downvote++;
 			}
 			
 			book.save();
 		})
 	})*/
 	
 }
  ngOnInit() {
    this.listBooks();
  }

}
