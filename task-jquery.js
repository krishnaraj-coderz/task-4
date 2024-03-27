console.log("checking js")
jQuery(function(){
    console.log("checking ready")
   
    $("#hideButton").on("click",function(){
        $("#box").hide();
    });

    $("#showButton").on("click",function(){
        $("#box").show();
    });

   
   
    $("#increaseButton").on("click",function(){
        $("#value").text(function(i,orgVal){
            console.log(orgVal);
            return parseInt(orgVal)+1;
        })
    })

    $("#decreaseButton").on("click",function(){
        $("#value").text(function(i,orgVal){
            return parseInt(orgVal)-1;
        })
    })
   
    $("#resetButton").on("click",function(){
        $("#value").text(function(i,orgVal){
            return parseInt(0);
        })
    })



    $("#avatar-button").css("background-color", "#6a82fb");
    $("#allTabs").tabs({ 
        activate:function(event,ui){
            $(this).find("ul li a").css("background-color", "");
            $(ui.newTab).find("a").css("background-color", "#6a82fb");
        }
    });

    

    $("#sectionOne").css("background-color", "rgb(45, 126, 202)");
    $("#accordion").accordion({
        icons: {
            activeHeader: "active" 
          },    
        beforeActivate:function(event,ui){
            $(this).find("div").css("background-color", "");
            $(ui.newHeader).css("background-color", "rgb(45, 126, 202)");
        }
    })

    //https://www.jqueryscript.net/lightbox/Responsive-Touch-enabled-jQuery-Image-Lightbox-Plugin.html
    $('.gallery a').simpleLightbox({
        "showCounter":false,
    });

    
});