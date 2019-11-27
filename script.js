let noscroll;
button.onclick = function() {
    if(noscroll) { 
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = "0";
        noscroll = false
    } else {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = "17px";
        noscroll = true
    }
}