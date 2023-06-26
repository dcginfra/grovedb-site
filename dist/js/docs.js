hljs.highlightAll();


var link = document.createElement('link');
link.rel = 'stylesheet';
document.head.appendChild(link);
function updateHighlightStyle() {
    var isNightMode = $('body').hasClass('night');
    if(isNightMode) {
        link.href = 'https://unpkg.com/@highlightjs/cdn-assets@11.7.0/styles/atom-one-dark.min.css';
    } else {
        link.href = 'https://unpkg.com/@highlightjs/cdn-assets@11.7.0/styles/atom-one-light.min.css';
    }
    hljs.highlightAll();
}
    
$(document).ready(function(){
    $('.toggle-dn').click(function(){
        $('.toggle-dn').toggleClass('active');
        $('body').toggleClass('night');
        updateHighlightStyle();
    })
    // Call updateHighlightStyle on page load as well
    updateHighlightStyle();
})