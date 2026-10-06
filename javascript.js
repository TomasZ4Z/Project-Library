
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



agregarUnLibro("En busca del tiempo perdido", "Marcel Proust","3000")
agregarUnLibro("Cien años de soledad", "Gabriel Garcia","500")
agregarUnLibro("La odisea de Homero", "Homero","300")

console.log(myLibrary[2])

const prueba2 = document.querySelector(".prueba2")  
let fila1 = document.querySelectorAll(".fila1")  
let fila2 = document.querySelectorAll(".fila2")  
let fila3 = document.querySelectorAll(".fila3")  




let prueba = document.querySelector(".prueba")
prueba.textContent = "me duele el pitulin"


let numeros = 0
let i 
function funcionDePrueba(fila){
for (let a = 0; a < myLibrary.length; a++) {

for ( i = numeros; i < numeros+4; i++){  
 
switch (i){  
case numeros:
  fila[i].textContent = myLibrary[a].name
  break;
case numeros+1:
  fila[i].textContent = myLibrary[a].author
  break;
case numeros+2:
  fila[i].textContent = myLibrary[a].pag
  break; 
case numeros+3:
  fila[i].textContent = myLibrary[a].id   
}
} 
numeros = i 
} 
}
funcionDePrueba(fila1)



function melapela(){
  let a = 0
  let joto = 0
for (i = 0; i<joto+3;i++){
 
switch (i){  
case 0:
  a += 1
  break;
case 1:
  a += 2
  break;
case 2:
 a += 3
  break;  
}
}
console.log(joto+3)  
return a
}
console.log(melapela())


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

