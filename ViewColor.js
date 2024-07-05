<script>
    span = $('span[name="DROPDOWNLISTNAME"]')[0];


function onSpanValueChange(mutationsList, observer) {
    mutationsList.forEach(function(mutation) {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
            $('[name="View1"] .panel-header *').removeClass('red blue yellow');
            $('[name="View2"] .panel-header *').removeClass('red blue yellow');


            $('[name="View1"] .panel-header *').addClass($(span).text());
            $('[name="View2"] .panel-header *').addClass($(span).text());
        }
    });
}

observer = new MutationObserver(onSpanValueChange);
config = {
    childList: true,
    characterData: true,
    subtree: true
};
observer.observe(span, config); 
</script>
