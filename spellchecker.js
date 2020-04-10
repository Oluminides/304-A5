/*
    Name: Kalley Lasola
    Assignment: CMPT304 Assignment 5
    Date:
    Description: A JavaScript file for a spellchecker site
*/

function check_word(word){

}

$(document).ready(function(){

    var char_index = 0; // For tracking the typed characters in the input
    var word_index = 0; // For tracking the typed words in the input 

    // Event for textarea input
    $( "#input" ).keyup(function(e) {
        var val = document.getElementById("input").value;
        var current = val.charAt(char_index);

        // Check for word separator characters
        if(current == " " || current == "." || current == "," || current == "!" || current == "?"){
            // Store word
            var word = val.substring(word_index, char_index);
            word = word.trim();
            
            // Query database
            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xh = new XMLHttpRequest();
            }
            xh.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var new_word = document.createElement("span");
                    var content = document.createTextNode(" "+word); 
                    new_word.appendChild(content); 

                    if((this.responseText).length == 1){
                        new_word.setAttribute("class", "misspelled");
                    }

                    document.getElementById("result").append(new_word);

                    console.log((this.responseText).length);
                }
            };
            xh.open("GET","check_word.php?word="+word,true);
            xh.send();

            // Display words
            // $("#result").append(val.substring(word_index, char_index));
            word_index = char_index;
        }

        char_index++;
    });
});

