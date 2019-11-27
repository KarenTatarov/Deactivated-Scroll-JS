$(function() {
    $('#button').click(function() {
        if($('body').css('overflow') == 'auto') {
            $('body').css('overflow', 'hidden');
        }else {
            $('body').css('overflow', 'auto');
        }
    });
});