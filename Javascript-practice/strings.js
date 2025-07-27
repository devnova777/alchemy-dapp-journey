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

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

//update our startsWithX function to return true for an upper-case X as well as a lower-case x.Using .toLoweCase() function.

function startsWithX(string) {
    if(string[0].toLowerCase()==="x"){
        return true;
    }
    else{
        return false;
    }
    
} 

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

/*the endsWithX function by detecting if the last character in the string is a lower-case x or an upper-case X. Return true if the last
character is either lower-case x or upper-case X, false otherwise.*/

function endsWithX(string) {
    if(string[string.length - 1].toLowerCase() === "x") {
        return true;
    }
    return false;
}
console.log(endsWithX("Hellx"))

module.exports = endsWithX;

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

/* The function isAllX to determine if the entire string is made of lower-case x, upper-case X, or a mix of both.
Return true if they are, false if not.*/


function isAllX(string) {
    for(let i = 0; i<string.length; i++){
        if(string[i].toUpperCase()!== "X"){
            return false;
        }
       
    }
    return true;
 
    

}

module.exports = isAllX;

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

