
const HEADER_LOGO_VIEW_NAME = 'GDC_header';

$(document).ready(function() {
    console.log('ready fired');
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
}
