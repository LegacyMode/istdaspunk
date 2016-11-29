$(function() {
    $("#button").on("click", function() {
        var punk = $("#text").val()
        $('.adjektiv').text('');
        $('h2').show();
        $('.antwort').text(punk);
        //console.log(punk.charCodeAt(0)); 
        var summe = 0;
        var letterValue;
        for (var i = 0; i < punk.length; i++) {
            summe += punk.charCodeAt(i);        
        }
        console.log(summe);
        letterValue = summe / punk.length;
        if (letterValue > 107) {
            $('.adjektiv').text('nicht');
        }
        console.log(letterValue);
        $('antwort').append(Number(punk));
    });
});