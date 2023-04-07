/*
 * Custom style profile 
 * Powered By Flow Factory
 *
 */


const HEADER_LOGO_VIEW_NAME = 'SW_header';

$(document).ready(function() {
    console.log('ready fired - v2.0');
    enableTheme();
    render();
});

enableTheme = () => {
    console.log('LOG - enable theme log');
    $('body').addClass('ff');
    $('form').addClass('ff');
    $('.runtime-content').addClass('ff');
    $('.runtime-form').addClass('ff');
}

render = () => {
    renderHeader();
    renderMenuItems();
}

renderHeader = () => {    
	$('div[name="' + HEADER_LOGO_VIEW_NAME + '"]').closest('.row').addClass('header');
	$('.header').insertBefore($('.runtime-content'));
}

renderMenuItems = () => {
    $('a[name^="btn_menu"]').on('click', function (e) {
        console.log(this.name); 
        $('a[name^="btn_menu"]').removeClass('ff-menuactive');
        $('a[name="' + this.name + '"]').addClass('ff-menuactive');
        
    });

    $('a[name^="btn_menu"]').addClass('ff-menubutton');
    $('a[name="btn_menu_Home"]').addClass('ff-menuactive');

    console.log("activation des menus RSI");
    $('.menu1').click(function(){
        $('[name=Pic_NPP]').click(); 
    });

    $('.menu2').click(function(){
        $('[name=Pic_NPP_2]').click(); 
    });

    $('.menu3').click(function(){
        $('[name=Pic_TO]').click(); 
    });

    $('.menu4').click(function(){
        $('[name=Pic_APU]').click(); 
    });

    $('.menu5').click(function(){
        $('[name=Pic_PC]').click(); 
    });

    $('.menu6').click(function(){
        $('[name=Pic_PO]').click(); 
    });
}
