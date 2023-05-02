/*
	AMO CONSULTANCY - Custom Theme - 02/2023
*/

const KPI_TABLE_NAME = 'Table_PortalKPIs';
const HEADER_LOGO_VIEW_NAME = 'View_Header_Logo';
const HEADER_TRANSLATOR_VIEW_NAME = 'View_Header_Translator';

$(document).ready(function() {
    enableTheme();
    render();
    SCPSAPI$OverridePopupShow(); 
    SCPSAPI$OverridePopupClose(); 
    $.widget("ui.popupwindow", SourceCode.Forms.Widget.PopupWindow); 
});

enableTheme = () => {
    $('body').addClass('amo');
    $('form').addClass('amo');
    $('.runtime-content').addClass('amo');
    $('.runtime-form').addClass('amo');
}


function SCPSAPI$ShouldAnimatePanel(jqPopup) { 
    return jqPopup.controls.main.hasClass("sub-form") || jqPopup.controls.main.hasClass("sub-view") 
}

render = () => {
    renderHeader();
    renderKPIs();
}

renderHeader = () => {    
	$('div[name="' + HEADER_LOGO_VIEW_NAME + '"]').closest('.view').addClass('header-left');
	$('div[name="' + HEADER_TRANSLATOR_VIEW_NAME + '"]').closest('.view').addClass('header-right');
	$('div[name="' + HEADER_LOGO_VIEW_NAME + '"]').closest('.row').addClass('header');
	$('.header').insertBefore($('.runtime-content'));
}

renderKPIs = () => {
    $('div[name="' + KPI_TABLE_NAME + '"]').closest('.formcontrol').addClass('kpis');
}



function SCPSAPI$OverridePopupShow() { 
    var _oldshow = SourceCode.Forms.Widget.PopupWindow.show; 
    console.log("Show popup event");
    SourceCode.Forms.Widget.PopupWindow.show = function () { 
        var result = null; 
        if (SCPSAPI$ShouldAnimatePanel(this)) 
        { 
            this.controls.main.addClass("animatedintro scpsapi-slidepanel"); 
            var css = { top: "0px", right: "0px", left: "auto", bottom: "0px", height: "auto!important", position: "fixed" }; 
            this.controls.main.css(css); 
            result = _oldshow.call(this); 
            this.controls.main.css("height", "auto"); 
            var _this = this; 
            
            window.setTimeout(
                function () { 
                    _this.controls.main.removeClass("animatedintro"); 
                }, 10
            ); 
        } else { 
            result = _oldshow.call(this); 
        } return result; 
    }; 
} 

/*Animated Panel Exit*/ 

function SCPSAPI$OverridePopupClose() { 
    var _oldclose = SourceCode.Forms.Widget.PopupWindow.close; 
    console.log("close view fired");
    SourceCode.Forms.Widget.PopupWindow.close = function (options) { 
        if (SCPSAPI$ShouldAnimatePanel(this)) { 
            console.log("test");
            var _this = this; 
            function transitionEnd() { 
                console.log("transitionend"); 
                _this.controls.main.off("transitionend", transitionEnd); 
                window.setTimeout(function () { 
                    _oldclose.call(_this, options); 
                    _this.controls.main.removeClass("animatedexit animatedintro"); 
                }, 300
                ); 
                /*annoyingly, this is a magic number, the same as the transition length in our custom css*/ 
            } 
                
                this.controls.main.on("transitionend", transitionEnd); 
                this.controls.main.addClass("animatedexit"); 
        } else { 
            result = _oldclose.call(this, options);
        } 
    };
    console.log("End close view fired"); 
} 
