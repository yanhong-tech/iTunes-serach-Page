/*Yanhong Wang
yanhongwang@my.smccd.edu
CIS 114 OL
itunes.js
Final Exam
May 19, 2019
*/

"use strict";
$(document).ready(function(){
    var params;
    $("#ituneSearch").click(function(){
        params = "";
        if($("#search").val() == ""){
            alert("You must enter one artist");
        }else{
            params = encodeURIComponent($("#search").val());
            params = "term=" + params + "&country=US" + "&media=music" + "&entity=musicTrack" + "&limit=20";
            var url = 'http://itunes.apple.com/search?' + params + '&callback=?';
            
            //get information  
            $.getJSON(url, function(data){
                
                var html = "";
                $.each(data.results, function(i, results){
                    html += "<p>"; //this is for css format
                    
                    html += "<img src=" + results.artworkUrl100 + " style = 'float: right' >";
                    html += "<h2>Track:&nbsp;&nbsp;" +results.trackCensoredName + "<a href=" + results.previewUrl+">" + "Preview</a></h2>";
                    html += "<h2>Track Price:&nbsp;&nbsp;" + results.trackPrice + " "+results.currency + "</h2>";
                    html += "<h2>Artist:&nbsp;&nbsp;<a href=" + results.artistViewUrl + ">" + results.artistName+"</a></h2>";
                    html += "<h2>Collection:&nbsp;&nbsp;<a href=" + results.artworkUrl100+">" + results.collectionCensoredName + "</a></h2>";
                    html += "<h2>Collection Price:&nbsp;&nbsp;" + results.collectionPrice + " " + results.currency + "</h2>";
                    html += "<h2>Primary Genre:&nbsp;&nbsp;" + results.primaryGenreName + "</h2>";
                    
                    html += "</p>"; //end with <p>:put all contentes to the p to format

                });
                
                $("#photos").html(html);
            });
        }
    });
});

