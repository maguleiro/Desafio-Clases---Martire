class Usuarios{
	constructor(nombre, apellido,libro,autor,mascotas)
	{
		this.nombre=nombre;
		this.apellido=apellido;	
		this.libro=libro;
		this.autor=autor;	
		this.mascotas=mascotas;		
	}	
	getFullName(){
		return `${this.nombre} ${this.apellido}`;
	}
	countMascotas(){
		return (mascotas.length)+" mascotas";
	}
	getBooks(){
		return (libros.reduce(libro => libro.libro))
	}
};

let mascotas = ['gato','perro'];
let libros = [

{
	libro:'Bestiario',
	autor:'Julio Cortazar',
},
{
	libro:'Martin Fierro',
	autor:'José Hernández',
},
];

function addMascota(){
		let nuevaMascota = prompt("Ingrese nueva mascota:");
		mascotas.push(nuevaMascota);
	}

function addBook(){
		let nombreLibro = prompt("Ingrese nombre del libro:");
		let nombreAutor = prompt("Ingrese nombre del autor:");
		let nuevoLibro = new Usuarios(nombreLibro, nombreAutor);

		libros.push(nuevoLibro);
	}	

function menu(){

let opciones = ["Añadir Mascota", "Añadir Libro"];

opciones.forEach((opcion)=>{
	const boton = document.createElement("button");

	if(opcion === "Añadir Mascota")
	{
		boton.addEventListener("click", ()=>{
			addMascota();
			console.log(mascotas);
		})
	}
	else if(opcion === "Añadir Libro")
	{
		boton.addEventListener("click", ()=>{
			addBook();
			console.log(libros);
		})
	}
	boton.innerHTML=opcion;
	document.body.appendChild(boton);
});

}

menu();

const usuario = new Usuarios('Lucas','Martire',libros,mascotas); 

console.log(libros);
console.log(usuario);
console.log(usuario.getFullName());
console.log(usuario.countMascotas());
console.log(usuario.getBooks());


