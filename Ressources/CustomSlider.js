function appendViewToSlider(viewInstance) {
    var htmlElement = $("[name='{0}']".format(viewInstance));
    var view = htmlElement.closest(".view");
    var showClass = view.is(":visible") && !htmlElement.hasClass("hidden") ? " show" : "";
    $('.runtime-form').append('<div class="slideout' + showClass + '" data-viewname="' + viewInstance + '" data-index="' + ($(".slideout").length + 1) + '"><div class="slideout__form"><div class="slideout__placeholder"/></div></div>');
    htmlElement.appendTo('[data-viewname="' + viewInstance + '"] .slideout__form');
    if (!view.is(":visible")) {
        htmlElement.addClass("hidden");
        view.removeClass("hidden");
        view.css("display", "block");
    }
    normaliseHiddenSlideoutWidths();
}

function adjustTop() {
    var top = $(".view.header").length > 0 ? $(".view.header").height() + ($(".view.header").hasClass("fixed") ? 0 : 1) + "px" : "0";
    var popupTop = $(".view.header").length > 0 && $(".view.header").hasClass("fixed") ? top : "0";
    document.documentElement.style.setProperty('--SliderTop', top);
    document.documentElement.style.setProperty('--PopupTop', popupTop);
}

function normaliseHiddenSlideoutWidths() {
    var width = "Width";
    var backColour = "Background Colour";
    width = checkExistsNotEmpty(width) ? width : "50rem";
    var transform = "-" + width;
    var hiddenSlides = $(".slideout:not(.show)");
    hiddenSlides.css({
        "width": width,
        "right": transform,
        "background-color": backColour,
        "padding-right": "0px",
        "transform": "unset"
    });
}

function getCumulativePadding(index, slideouts) {
    var padding = 0;
    if (checkExists(slideouts[index - 1])) {
        padding = slideouts[index - 1].offsetWidth;
    }
    return padding + "px";
}

function normaliseSlideout(i) {
    var shownSlideouts = $(".slideout.show").get().reverse();
    var slideout = $(shownSlideouts[i]);
    var maxWidth = slideout.attr("data-width");
    var padding = getCumulativePadding(i, shownSlideouts);
    var width = "calc({0})".format(maxWidth, padding);
    var transform = "translate(-{0}, 0)".format(maxWidth);
    var right = "-" + maxWidth;
    slideout.css({
        "width": width,
        "padding-right": padding,
        "transform": transform,
        "right": right
    });
}

function normaliseSlideoutWidths() {
    var shownSlideouts = $(".slideout.show").get().reverse();
    $.each(shownSlideouts, function(i) {
        setInterval(function() {
            normaliseSlideout(i);
        }, 0);
    });
}

function resizeSlideouts() {
    normaliseHiddenSlideoutWidths();
    normaliseSlideoutWidths();
}
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        var target = $(mutation.target);
        var isCorrectMutation = ((target.hasClass("panel") || target.hasClass("grid")) && ((mutation.attributeName == "class") || (mutation.attributeName == "style")));
        var slideout = target.closest(".slideout");
        if (isCorrectMutation && (target.is(".visible"))) {
            adjustTop();
            var maxWidth = "Width";
            maxWidth = checkExistsNotEmpty(maxWidth) ? maxWidth : "50rem";
            slideout.attr("data-width", maxWidth);
            slideout.removeClass("show");
            normaliseHiddenSlideoutWidths();
            setTimeout(function() {
                target.closest(".view").show();
                slideout.addClass("show");
                resizeSlideouts();
                $('[name="Current Instance Data Label"]').SFCLabel("option", "text", $(target).attr("name"));
                $("[name='PostAttachActions']")[0].click();
            }, 500);
        } else if (isCorrectMutation) {
            slideout.removeClass("show");
            resizeSlideouts();
        }
    });
});
var config = {
    attributes: true
};
var views = "Views".split(";");
$.each(views, function(i) {
    appendViewToSlider(views[i]);
    $("[name='{0}']".format(views[i])).closest(".row").remove();
    observer.observe($("[name='" + views[i] + "']")[0], config);
});
$(document).scroll(adjustTop);