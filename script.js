        
$(document).ready(function () {
    
    
    $("#search-button").click(function() { 
        
        // First, reset search results so we're not stacking them over each other
        $(".target").html('');
        
        // Create string for get request using user inputted value
        var beginStr = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search="; 
        var queryStr = document.querySelector('#textinput').value;
        var endStr = beginStr + queryStr + "&generator=allpages&gaplimit=10&prop=info&format=json&formatversion=2"; 
       
        $.get(endStr, function(myObj) {
            
            // Add border to the search results
            $(".target").addClass("add-border");
            
            // Loop from 0 to 9 to show a total of 10 results
            for (i = 0; i < 10; i++) {
                
                // Show title of article
                $(".target").append(myObj[1][i]);
                $(".target").append("<br>");
                
                // Show description of article
                $(".target").append(myObj[2][i]);
                $(".target").append("<br>");
                
                // Show link to wikipedia page
                $(".target").append("<a href='" + myObj[3][i] + "'>Click for Full Article</a>");
                $(".target").append("<br>");
                $(".target").append("<br>");
                
            };
            

        }); //close .get
      
        
    }); //close button clicker
  
    
}); //doc.ready end
    

    
    
    
