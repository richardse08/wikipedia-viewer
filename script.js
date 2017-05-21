        
$(document).ready(function () {
    
    $("#text_value").click(function() { 
        
        

        
        var beginStr = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search="; 
        var queryStr = document.querySelector('#textinput').value;
        var endStr = beginStr + queryStr + "&generator=allpages&gaplimit=10&prop=info&format=json&formatversion=2"; 
        
        

        $.get(endStr, function(myObj) {
            
// ***all below code is absolutely terrible, will redo at later date***
// ***all below code is absolutely terrible, will redo at later date***
// ***all below code is absolutely terrible, will redo at later date***
            
            
            
            var objvar1 = myObj[3][0];
            var objvar2 = myObj[3][1];
            var objvar3 = myObj[3][2];
            var objvar4 = myObj[3][3];
            var objvar5 = myObj[3][4];
            var objvar6 = myObj[3][5];
            var objvar7 = myObj[3][6];
            var objvar8 = myObj[3][7];
            var objvar9 = myObj[3][8];
            var objvar10 = myObj[3][9];            
            
            $(".practice-class1A").html(myObj[1][0]);
            $(".practice-class1B").html(myObj[2][0]);
            $(".practice-class1C").html("<a href='" + objvar1 + "'>Click for Full Article</a>");
            
            
            $(".practice-class2A").html(myObj[1][1]);
            $(".practice-class2B").html(myObj[2][1]);
            $(".practice-class2C").html("<a href='" + objvar2 + "'>Click for Full Article</a>");
            
            $(".practice-class3A").html(myObj[1][2]);
            $(".practice-class3B").html(myObj[2][2]);
            $(".practice-class3C").html("<a href='" + objvar3 + "'>Click for Full Article</a>");
            
            $(".practice-class4A").html(myObj[1][3]);
            $(".practice-class4B").html(myObj[2][3]);
            $(".practice-class4C").html("<a href='" + objvar4 + "'>Click for Full Article</a>");
            
            $(".practice-class5A").html(myObj[1][4]);
            $(".practice-class5B").html(myObj[2][4]);
            $(".practice-class5C").html("<a href='" + objvar5 + "'>Click for Full Article</a>");
            
            $(".practice-class6A").html(myObj[1][5]);
            $(".practice-class6B").html(myObj[2][5]);
            $(".practice-class6C").html("<a href='" + objvar6 + "'>Click for Full Article</a>");
            
            $(".practice-class7A").html(myObj[1][6]);
            $(".practice-class7B").html(myObj[2][6]);
            $(".practice-class7C").html("<a href='" + objvar7 + "'>Click for Full Article</a>");
            
            $(".practice-class8A").html(myObj[1][7]);
            $(".practice-class8B").html(myObj[2][7]);
            $(".practice-class8C").html("<a href='" + objvar8 + "'>Click for Full Article</a>");
            
            $(".practice-class9A").html(myObj[1][8]);
            $(".practice-class9B").html(myObj[2][8]);
            $(".practice-class9C").html("<a href='" + objvar9 + "'>Click for Full Article</a>");
            
            $(".practice-class10A").html(myObj[1][9]);
            $(".practice-class10B").html(myObj[2][9]);
            $(".practice-class10C").html("<a href='" + objvar10 + "'>Click for Full Article</a>");
            

        }); //close .get
    }); //close button clicker
}); //doc.ready end
    

    
    
    
