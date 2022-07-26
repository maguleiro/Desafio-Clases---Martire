class Usuarios{
	constructor(nombre, apellido,libro,mascotas)
	{
		this.nombre=nombre;
		this.apellido=apellido;	
		this.libro=libro;	
		this.mascotas=mascotas;		
	}	
	getFullName(){
		return `${this.nombre} ${this.apellido}`;
	}
	countMascotas(){
		let name = usuario.nombre
		return name + " tiene " + (mascotas.length)+" Mascotas";
	}
	getBooks(){
		let tituloLibro = [];
		let name = usuario.nombre

		for (var i = 0; i <libros.length; i++){
			tituloLibro.push(libros[i].libro);
		}
		return("Libros de " + name + ": " + tituloLibro)
	}
	addMascota(){
		let nuevaMascota = prompt("Ingrese nueva mascota:");
		mascotas.push(nuevaMascota);
	}

	addBook(){
		
		libros.push({libro:  prompt("Ingrese nombre del libro:"), autor: prompt("Ingrese nombre del autor:")});
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
	
function menu(){

let opciones = ["Añadir Mascota", "Añadir Libro"];

opciones.forEach((opcion)=>{
	const boton = document.createElement("button");

	if(opcion === "Añadir Mascota")
	{
		boton.addEventListener("click", ()=>{
			usuario.addMascota();
			console.log(mascotas);
		})
	}
	else if(opcion === "Añadir Libro")
	{
		boton.addEventListener("click", ()=>{
			usuario.addBook();
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
console.log(mascotas);

console.log(usuario);
console.log(usuario.getFullName());
console.log(usuario.countMascotas());
console.log(usuario.getBooks());




