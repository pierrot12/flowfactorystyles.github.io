/*
 * Custom style profile 
 * Powered By Flow Factory
 * Custom Javascript
 */


const HEADER_LOGO_VIEW_NAME = 'AppHeader';

$(document).ready(function() {
    console.log('ready fired - Renault SP theme used - V1.0');
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
}

renderHeader = () => {    
	$('div[name="' + HEADER_LOGO_VIEW_NAME + '"]').closest('.row').addClass('header');
	$('.header').insertBefore($('.runtime-content'));
}