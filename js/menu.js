$(function(){
    var cont_nav = document.getElementById('content-nav')
    var headroom = new Headroom(cont_nav)

    headroom.init()

    // Calculos
    var ancho = $(window).width(),
        enlaces = $('#links'),
        btnmenu = $('#btn-menu'),
        icono = $('#btn-menu .icon');

    if(ancho <= 580){
        enlaces.hide()
    }    

    btnmenu.on('click', function(e){
        
        icono.toggleClass('fa-bars')
        icono.toggleClass('fa-times')
        enlaces.slideToggle()
    })  

    $(window).on('resize', function(){
        if($(this).width() >= 580){
            enlaces.show()
            icono.addClass('fa-times')
            icono.removeClass('fa-bars')
        }else{
            enlaces.hide()
            icono.addClass('fa-bars')
            icono.removeClass('fa-times')
        }
    })
})