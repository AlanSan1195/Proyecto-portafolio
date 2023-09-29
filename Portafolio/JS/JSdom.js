
(function() {
    let navbar = document.querySelector ('#navbar');
    let hamburguesa = document.querySelector('#Hamburguesa')
    //escuchar eventos del boton
    hamburguesa.addEventListener('click', () =>{
        // tomar la vav, la propiedad claslist, y el metodo toggle que simpre mente añade y remueve una clase 
        navbar.classList.toggle('open');
        
    });
    
})()
