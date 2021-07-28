let botonMenu = document.getElementsByClassName("encabezado__icono")[0];
let barraLateral = document.getElementsByClassName("barra-lateral")[0];
let contenido = document.getElementsByClassName("contenido")[0];
let piePagina = document.getElementsByClassName("pie-pagina")[0];
let encabezado = document.getElementsByClassName("encabezado")[0];
let contador = 0;


botonMenu.addEventListener('click', () => {
	console.log('prueba');
	// barraLateral[0].classList.add('barra-lateral__invisible');
	if (contador === 1) {
		botonMenu.firstElementChild.setAttribute("name","menu-outline");
		contenido.classList.add('contenido__full');
		piePagina.classList.add('pie-pagina__full');
		encabezado.classList.add('encabezado__full');
	  barraLateral.classList.add('barra-lateral__invisible');
		contador = 0;
	} else {
		contenido.classList.remove('contenido__full');
		piePagina.classList.remove('pie-pagina__full');
		encabezado.classList.remove('encabezado__full');
	  barraLateral.classList.remove('barra-lateral__invisible');
		botonMenu.firstElementChild.setAttribute("name","close-outline");
		contador = 1;
	}
}, true);
