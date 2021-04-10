
//Delete books 
const ul = document.querySelector('#book-list ul');
ul.addEventListener('click', function(e){
     if(e.target.className == 'delete'){
          const li = e.target.parentElement;
          ul.removeChild(li);
     }
});

//Add books 
const addForm = document.forms['add-book'];
addForm.addEventListener('submit',function(e){
   e.preventDefault();

   //Select the elements from the user
   const value = addForm.querySelector('input[type="text"]').value;
   const url = addForm.querySelector('input[type = "url"]').value;



   //Create elements 
   const li = document.createElement('li');
   const bookName = document.createElement('span');
   const link = document.createElement('a');
   const deleteBtn = document.createElement('span');
   

   //Add context
   bookName.textContent = value;
   deleteBtn.textContent = 'delete';

   
    //Add classses..
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
  

   //set the href tag of the link
   link.href = url;
   
   //append to document
   link.appendChild(bookName);
   li.appendChild(link);
   li.appendChild(deleteBtn);
   ul.appendChild(li);

   
});

//Hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change',function(){
   if(hideBox.checked){
    ul.style.display = "none";
   }
   else{
        
    ul.style.display = "initial";
   }
});


//Search functionality
const searchBar = document.forms["search-books"].querySelector('input');
searchBar.addEventListener('keyup',function(e){
   const query = e.target.value.toLowerCase();
   const books = document.getElementsByTagName('li');
   Array.from(books).forEach(function(book){
      const title = book.firstElementChild.textContent;
     
      if(title.toLowerCase().indexOf(query) != -1){
           book.style.display = 'block';
      }  
      else{
           book.style.display = 'none';
      }
   });
});

//