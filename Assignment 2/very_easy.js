console.log("+++++++++++++++++++++++++")
console.log("Easy Problems")
console.log("+++++++++++++++++++++++++")
//Question 1
function convert(min)
{
    var sec=min*60;
    return sec;
}
console.log(convert(5));
console.log(convert(3));
console.log(convert(2));


//Question 2

function divide(a,b)
{
    if(a%b==0)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(divide(98,7))
console.log(divide(85,4))