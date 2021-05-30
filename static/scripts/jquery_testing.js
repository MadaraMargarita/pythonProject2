$(document).ready(function() {
    console.log("ready!");


    //$("#box").click(function(){
        //$("#tekstins").hide()
        //$("#tekstins").toggle(); /* uzspiež pazūd, uzspiež parādās */
        // $("h1").hide(2000).delay(1000).show(2000);
    //});



    $("#box").mouseenter(function(){
        $(this).css('background', 'red');
    });

    $("#box").mouseleave(function(){
        $(this).css('background', 'yellow');
    });

    $("#box").dblclick(function(){
        $(this).css('background', 'green');
    });



    //$("#box").hover(function(){
        //$("#tekstins").toggle(); /* uzspiež pazūd, uzspiež parādās */

        //var width = $(this).width();

        //$(this).css("width", width + 100);
        //console.log(width);
    //});


    //callback funkc.
    //$(document).keypress(function(event) {
        //console.log(event.charCode);

        //var key = String.fromCharCode(event.charCode);
        //console.log(key);

        //var width = $("#box").width();
        //if(key == 'a'){
            //$("#box").css("width", width + 5);
        //}

        //if(key == 'd'){
            //$("#box").css("width", width - 5);

        //}
    //});



    //$("h1").hide(2000).delay(1000).show(2000);
    $("h2").hide(100).show(1000);
    $("h1").hide(100).show(2000);



   //Ajax
   //setInterval(function(){
        //$.get("https://random-data-api.com/api/stripe/random_stripe", function(data){
        //console.log(data);
        //var uid = data['uid'];
        //console.log(uid);

        //$("#uid").html(`<p>${uid}</p>`)
   //});
   //}, 1000)

});