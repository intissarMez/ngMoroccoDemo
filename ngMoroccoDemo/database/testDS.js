var author = new ds.Author({name:'Ernest Himingway'});
author.save();
new ds.Book({title:'The old man and the sea',upvote:0,downvote:0,author:author}).save();