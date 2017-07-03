        
$(document).ready(function () {
    
    $("#text_value").click(function() { 
        // Reset search results
        $(".target1").html('');
        // Build out ajax request
        var beginStr = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search="; 
        var queryStr = document.querySelector('#textinput').value;
        var endStr = beginStr + queryStr + "&generator=allpages&gaplimit=10&prop=info&format=json&formatversion=2"; 
       
        $.get(endStr, function(myObj) {
            // Add border to the search results
            $(".target1").addClass("add-border");
            // Loop from 0 to 9 to show a total of 10 results
            for (i = 0; i < 10; i++) {

                $(".target1").append(myObj[1][i]);
                $(".target1").append("<br>");
                $(".target1").append(myObj[2][i]);
                $(".target1").append("<br>");
                $(".target1").append("<a href='" + myObj[3][i] + "'>Click for Full Article</a>");
                $(".target1").append("<br>");
                $(".target1").append("<br>");
                
            };

        }); //close .get
      
    }); //close button clicker
  
}); //doc.ready end
    

    
    
    
