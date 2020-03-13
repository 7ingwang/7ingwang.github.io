$('.open').click(function(){
    openDialog()
})
$('.close').click(function(){
    closeDialog()
})


// openDialog()
function openDialog(){
    var $dialog = $('#dialog'),
            $mask = $('#mask'),
            l = $(window).width()/2-$dialog.width()/ 2,
            t = $(window).height()/2-$dialog.height()/ 2,
            h=$(document).height();
            
    $dialog.css({'left':l+'px','top':t-100+'px'}).show();
    $mask.height(h).show()
}
function closeDialog(){
                var $dialog = $('#dialog'),
            $mask = $('#mask');
            $dialog.hide()
            $mask.hide()

}
