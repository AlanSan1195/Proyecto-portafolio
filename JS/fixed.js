// flotar menu de navegacion escuchar el scrool de 

(function(){
    let navbar = document.querySelector('#navbar');
    let cuerpo = document.querySelector('main')
    let alturaBarraNav = navbar.getBoundingClientRect().height //obteniendola la altura de la barra de navegacion del menu
    // "getBoundingClientRect()" 
    //metodo que es para obtener infomacion es un metodo para hacerlo
    let breakpoint = cuerpo.offsetTop - alturaBarraNav;

    //cuando hagamos "Scroll" OBTENDREMOS EL DATO DE LA POSCION DE LA BARRA relativo al documento
    let posicionVent; 

    // esta funcion va a actualizar esta posicion
    function actualizarVentPosicion(){
        posicionVent = window.scrollY;   
    
    } 

    // funcion qu ese activa cada ves que yo me mueba por la pagina haciendo scrool 
    //y cada ves que me mueva actualizare la otra funcion de posicion de ventana 
    function onScroll(){
        
        actualizarVentPosicion();

        console.log(posicionVent, breakpoint);

        //logica y condiciones
        if(posicionVent >=breakpoint) {
            navbar.classList.remove('open');

            navbar.classList.add('navbar-fixed');
            cuerpo.style.cssText = "margin-top" + alturaBarraNav + 'px;' ;
                
            } 
    }

    document.addEventListener('scroll', onScroll)


})()