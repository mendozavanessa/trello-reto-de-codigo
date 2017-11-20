/* Carga primero la pagina*/
window.addEventListener('load', function() {
  /* usando el arbol del DOM hacemos el llamado de las variables que utilizaremos*/
  var añadir = document.getElementById('añadir'),
    añadirLista = document.getElementById('añadir-lista'),
    input = document.getElementById('input'),
    guardar = document.getElementById('guardar'),
    tarjetas = document.getElementById('tarjetas'),
    añadir2 = document.getElementById('añadir2'),
    añadirTexto = document.getElementById('añadirTexto'),
    añadir3 = document.getElementById('añadir3'),
    textarea = document.getElementById('textarea');
  /* Llamamos al evento click con su manejador para añadir una lista cuando que en un inicio no se ve  hacemos clic en el boton nos mostrara una caja de añadir lista  */
  añadir.addEventListener('click', function() {
    añadirLista.classList.remove('disabled');
    añadirLista.classList.add('enabled');
  });
  /* cuando se muestra la caja para añadir lista llamaremos al evento click en el boton guardar*/
  guardar.addEventListener('click', function() {
    /* Creando etiqueta parrafo(p) y guardandolo en una variable*/
    var parrafo = document.createElement('p');
    /* creando etiqueta a*/
    var link = document.createElement('a');
    /* creando texto de la etiqueta a*/
    var textLink = document.createTextNode('Añadir una tarjeta');
    /* creando  atributo id en la etiqueta a*/
    link.setAttribute('id', 'link');
    link.appendChild(textLink);
    parrafo.classList.add('parrafo1');
    link.classList.add('link');
    parrafo.textContent = input.value;
    tarjetas.appendChild(parrafo);
    tarjetas.appendChild(link);
    añadir2.classList.remove('disabled');
    añadir2.classList.remove('enabled');
    añadirLista.classList.remove('enabled');
    añadirLista.classList.add('disabled');
    tarjetas.classList.add('enabledParrafo');
    /* llammamos a link que creamos de añadir una tarea y llamamos al evento click */
    var linkAñadir = document.getElementById('link');
    linkAñadir.addEventListener('click', function() {
      añadirTexto.classList.remove('disabled');
      añadirTexto.classList.add('enabled');
      añadir3.addEventListener('click', function() {
        var parrafo = document.createElement('p');
        parrafo.style.background = '#e2e4e6';
        parrafo.style.position = 'relative';
        parrafo.style.widht = '270px';
        parrafo.style.height = '30px';
        parrafo.style.margin = '5px 5px';
        parrafo.textContent = textarea.value;
        tarjetas.appendChild(parrafo);
        tarjetas.classList.add('enabledParrafo');
        añadirTexto.classList.remove('enabled');
        añadirTexto.classList.add('enabledBajar');
      });
    });
  });
});
