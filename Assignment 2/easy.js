
console.log("+++++++++++++++++++++++++")
console.log("Easy Problems")
console.log("+++++++++++++++++++++++++")


//Question 1
function charCount(a,b)
{
    var count=0;

    for(var i=0;i<b.length;i++)
    {
        if(b.charAt(i)==a)
        {
            count += 1;
        }
    } 
    return count;
}

console.log(charCount("a","edabit"));
console.log(charCount("c","Chamber of secrets"));
console.log(charCount("b","big fat bubble"));

//Question 2


function count(x)
{
    var c=0;
    for(var i=1;i<=x;i++)
    {
        c = c+i;
    }
    return c;
}
console.log(count(4))
console.log(count(13))
console.log(count(600))

//Question 3


function replaceVowel(x)
{
    for(var i=0;i<x.length;i++)
    {
        if(x.charAt(i)=="a")
        {
            x=x.substring(0,i)+"1"+x.substring(i+1)
        }
        if(x.charAt(i)=="e")
        {
            x=x.substring(0,i)+"2"+x.substring(i+1)
        }
        if(x.charAt(i)=="i")
        {
            x=x.substring(0,i)+"3"+x.substring(i+1)
        }
        if(x.charAt(i)=="o")
        {
            x=x.substring(0,i)+"4"+x.substring(i+1)
        }
        if(x.charAt(i)=="u")
        {
            x=x.substring(0,i)+"5"+x.substring(i+1)
        }

    }
    return x;
}

console.log(replaceVowel("karachi"));
console.log(replaceVowel("chembur"));
console.log(replaceVowel("kandbari"));