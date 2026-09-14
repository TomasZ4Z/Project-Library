
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



const myLibrary = [];

function Book(name) {
this.name = name,

this.library = function(){
myLibrary.push(this.name) 
}
};

const libro1 = new Book("Romeo y Julieta")
const libro2 = new Book("Don Quijote de la mancha")
const libro3 = new Book("Cien años de soledad")

libro1.library()
libro2.library()
libro3.library()
console.log(Object.getPrototypeOf(Book))
console.log(Object.getPrototypeOf(Book) === myLibrary)
console.log(myLibrary)

 
 let biblioteca = []
 const crypto = require("crypto")

function agregarUnLibro(name, autor,libro0){
 /*this.joder = function(){
 biblioteca.push(this.name)   
 }*/
let almacen = {}
let bookNumber = libro0

almacen[bookNumber]= {
id : crypto.randomUUID(),   
name : name,    
autor : autor 
}
console.log(almacen)
function mover(){
return biblioteca.push(almacen[bookNumber])   
}
return mover()
 }
agregarUnLibro("la culpa y el olvido", "Tomás","libro 1")
agregarUnLibro("Cien años de soledad", "Gabriel Garcia","libro 2")
agregarUnLibro("La odisea de Homero", "Homero","libro 3")


console.log(biblioteca[0])

console.log()


console.log()

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

