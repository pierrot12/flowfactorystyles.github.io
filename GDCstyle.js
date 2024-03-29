
const HEADER_LOGO_VIEW_NAME = 'GDC_header';

$(document).ready(function() {
    console.log('ready fired - v2.0');
    enableTheme();
    render();
    SCPSAPI$OverridePopupShow(); 
    SCPSAPI$OverridePopupClose(); 
    $.widget("ui.popupwindow", SourceCode.Forms.Widget.PopupWindow); 
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

    $('a[name="btn_menu_Home"]').addClass('ff-menuactive');
}





/*Animated Panel Intro*/ 

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
            var _this = this; 
            function transitionEnd() { 
                console.log("transitionend"); 
                _this.controls.main.off("transitionend", transitionEnd); 
                window.setTimeout(function () { 
                    _oldclose.call(_this, options); 
                    _this.controls.main.removeClass("animatedexit animatedintro"); 
                }, 300
                ); 
                /*annoyingly, this is a magic number, the same as the transition length in our custom css*/ } 
                
                this.controls.main.on("transitionend", transitionEnd); 
                this.controls.main.addClass("animatedexit"); 
        } else { 
            result = _oldclose.call(this, options);
        } 
    }; 
} 

function SCPSAPI$ShouldAnimatePanel(jqPopup) { 
    console.log("check object should be animated"),
    console.log(jqPopup);
    console.log(jqPopup.controls.main);
    return jqPopup.controls.main.hasClass("sub-form") || jqPopup.controls.main.hasClass("sub-view") 
}