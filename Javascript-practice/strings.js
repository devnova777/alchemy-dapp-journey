/* startsWithX function to determine if the first character of the string argument is the lower-case x.
If the first character is x return true. If not, return false*/
function startsWithX(string) {
    if(string.toLower){
        return true;
    }
    else{
        return false;
    }
    
}
