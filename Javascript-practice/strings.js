/* startsWithX function to determine if the first character of the string argument is the lower-case x.
If the first character is x return true. If not, return false*/
function startsWithX(string) {
    if(string[0]==="x"){
        return true;
    }
    else{
        return false;
    }
    
}

//update our startsWithX function to return true for an upper-case X as well as a lower-case x.Using .toLoweCase() function.

function startsWithX(string) {
    if(string[0].toLowerCase()==="x"){
        return true;
    }
    else{
        return false;
    }
    
} 
