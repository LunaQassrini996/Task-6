const Card = document.querySelector('.card1')
const Book = document.querySelector('.best-book')
const cardBooks = document.querySelector('.card-books')
const cardBooks2 = document.querySelector('.card-books-2')
fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
.then(resp => resp.json())
.then(json => getData(json))
function getData(json){
    for(let index=42 ; index< json.length ; index++){ 

    Card.innerHTML+=
    `<div class="feature">
        <img class="  pb-0 p-4 ms-1 w-100" style= "background-color: #edebe4"  src=${json[index].simple_thumb} />
        <button class=" p-3 w-100 text-white bg-dark ">ADD TO CART</button>
       <div class="text-center mt-4">
         <h3 class="text-warning-emphasis fs-4">${json[index].title}</h3>
        <p>${json[index].author}</p>
       </div>
     </div>
     `
    
  }
}
fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
.then(res => res.json())
.then(res => oneBookData(res))
function oneBookData(res){
  Book.innerHTML=
   `<div>
      <img class=" w-75 p-3 bg-white" src= ${ res.cover} />
  </div>
   <div class="w-25 mt-4">
   <h2 class=" best-books mt-4"> Best Selling Book </h2>
   <p class="fs-5 text-body-tertiary mt-5"> By ${res.authors[0].name}</p>
   <p class="fs-3" style = "font=family:Times New Roman', Times, serif;"> ${res.title}</p>
   <p class=" fs-3 text-body-tertiary"> ${res.fragment_data.html}</p>
   <span class="fw-bold"> Shop Now <i class="fa-solid fa-arrow-right-long" style="color: #000000;"></i> </span>
   </div>
  `
} 
fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
.then(responce => responce.json())
.then(responce => popularBooks(responce))
function popularBooks(responce){
  for(let index=0 ; index< 8 ; index++){
    console.log(responce[index])
    if(index== 0 || index==1 || index==2 || index==3){
    cardBooks.innerHTML+=
    `<div>
        <img class=" p-4 ms-1 w-100" style= "background-color: #edebe4"  src=${responce[index].simple_thumb} />
       <div class="text-center mt-4">
         <h3 class="text-warning-emphasis fs-4">${responce[index].title}</h3>
        <p>${responce[index].author}</p>
       </div>
     </div>
    `
    }else{
      cardBooks2.innerHTML+=
      `<div>
          <img class=" p-4 ms-1 w-100" style= "background-color: #edebe4"  src=${responce[index].simple_thumb} />
         <div class="text-center mt-4">
           <h3 class="text-warning-emphasis fs-5">${responce[index].title}</h3>
          <p>${responce[index].author}</p>
         </div>
       </div>
      `
    }

  }
}