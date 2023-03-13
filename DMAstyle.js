
const KPI_TABLE_NAME = 'Table_PortalKPIs';
const HEADER_LOGO_VIEW_NAME = 'DMA_header';
const HEADER_TRANSLATOR_VIEW_NAME = 'View_Header_Translator';

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
    renderKPIs();
}

renderHeader = () => {    
	$('div[name="' + HEADER_LOGO_VIEW_NAME + '"]').closest('.row').addClass('header');
	$('.header').insertBefore($('.runtime-content'));
}

renderKPIs = () => {
    //$('div[name="' + KPI_TABLE_NAME + '"]').closest('.formcontrol').addClass('kpis');
}
