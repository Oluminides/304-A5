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
            $("#result").append(val.substring(word_index, char_index));
            word_index = char_index;
        }

        // Check for backspace case
        if(e.keyCode == 8){
            // Trim result contents
            var temp = document.getElementById("result").innerHTML;
            temp = temp.substring(0, temp.length - 1);
            $("#result").html(temp);

            // Decrement counter
            char_index--;
        }else{
            // Increment counter
            char_index++;
        }
    });
});