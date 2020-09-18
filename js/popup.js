

var btnabrirservicios = document.getElementById('btn-abrir-servicios'),
	overlay_servicios = document.getElementById('over-servicios'),
	popup_servicios = document.getElementById('po-servicios'),
	btnCerrarServicios = document.getElementById('btn-cerrar-servicios');

btnabrirservicios.addEventListener('click', function(){
	overlay_servicios.classList.add('active');
	popup_servicios.classList.add('active');
});

btnCerrarServicios.addEventListener('click', function(e){
	e.preventDefault();
	overlay_servicios.classList.remove('active');
	popup_servicios.classList.remove('active');
});
