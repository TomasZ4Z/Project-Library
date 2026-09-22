
/*const habitación = {
 library:[],

 book(mybook){
this.library = [mybook]
}
}

const libro1 =  habitación.book("joder")
const libro2 =  habitación.book("cholo")

console.log(libro1)
console.log(libro2)

function addBookToLibrary(){

}*/

let biblioteca = []
 let armario 
 
const myLibrary = [];

function Book(name,author,pag) {
this.name = name,
this.author = author,
this.pag = pag,
this.id = crypto.randomUUID()
};

 
function agregarUnLibro(name,author,pag){
armario = new Book(name,author,pag)    
  myLibrary.push(armario)
  }

  agregarUnLibro("la culpa y el olvido", "Tomás","90")
agregarUnLibro("Cien años de soledad", "Gabriel Garcia","500")
agregarUnLibro("La odisea de Homero", "Homero","300")


console.log(myLibrary[2])

let prueba = document.querySelector(".prueba")
console.log(prueba.textContent = "me fasicina el nepe")
/*
let almacen = {}
let bookNumber = libro0

almacen[bookNumber]= {
id : crypto.randomUUID(),   

}
console.log(almacen[bookNumber].id)


function mover(){
return biblioteca.push(almacen[bookNumber])   
}
mover()

function obtenerID(){
armario = biblioteca.find(libro => libro.id === almacen[bookNumber])
}
obtenerID()
 */
 



/*

function CreateBook(name,autor){
this.name = name
this.autor = autor

this.addBookToLibrary = function(){
 libro = {
name : this.name, 
autor : this.autor,
}
}
}
console.log(CreateBook.addBookToLibrary())

function addBookToLibrary(name,libro,autor) {
this.name = name,
this.libro = libro,
this.autor = autor  
}
*/

