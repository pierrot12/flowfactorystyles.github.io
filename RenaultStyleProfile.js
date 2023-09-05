/*
 * Custom style profile 
 * Powered By Flow Factory
 *
 */


const HEADER_LOGO_VIEW_NAME = 'SW_header';
const HEADER_BUTTONS_VIEW_NAME = 'SW_buttons';

$(document).ready(function() {
    console.log('ready fired - v3.1');
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
    renderParafeurHP();
}

renderHeader = () => {    
	/*$('div[name="' + HEADER_LOGO_VIEW_NAME + '"]').closest('.row').addClass('header');
    $('div[name="' + HEADER_BUTTONS_VIEW_NAME + '"]').closest('.row').addClass('header');
	$('.header').insertBefore($('.runtime-content'));
    */

    $('div[name="' + HEADER_LOGO_VIEW_NAME + '"]').insertBefore($('.runtime-content'));
    $('div[name="' + HEADER_BUTTONS_VIEW_NAME + '"]').insertBefore($('.runtime-content'));
   
}

renderParafeurHP = () => {
    $("#00000000-0000-0000-0000-000000000000_353a82f6-f05b-9c37-c869-e99967a5c334_internal .view:first-child").css("width", "25%");
  $ ("#00000000-0000-0000-0000-000000000000_353a82f6-f05b-9c37-c869-e99967a5c334_internal .view:last-child").css("width", "75%");
}

renderMenuItems = () => {
    $('a[name^="btn_menu"]').on('click', function (e) {
        console.log(this.name); 
        $('a[name^="btn_menu"]').removeClass('ff-menuactive');
        $('a[name="' + this.name + '"]').addClass('ff-menuactive');
        
    });

    $('a[name^="btn_menu"]').addClass('ff-menubutton');
    $('a[name="btn_menu_Home"]').addClass('ff-menuactive');

}

renderFFMenu = () => {
    $('span[class^="ffmenu"]').on('click', function(e) {
        var elementid = this.id;

        console.log('CLICK ON MENU ITEM => ' + elementid);
        
        if(elementid == "ffmenu1") {
            $('[name=Pic_NPP]').click(); 
        }

        if(elementid == "ffmenu2") {
            $('[name=Pic_NPP_2]').click(); 
        }

        if(elementid == "ffmenu3") {
            $('[name=Pic_TO]').click(); 
        }

        if(elementid == "ffmenu4") {
            $('[name=Pic_APU]').click(); 
        }

        if(elementid == "ffmenu5") {
            $('[name=Pic_PC]').click();
        }

        if(elementid == "ffmenu6") {
            $('[name=Pic_PO]').click(); 
        }

    });

    console.log("activation des ffmenus RSI - V2 - " + $('span[class^="ffmenu"]').length + " elements found.");
    
}