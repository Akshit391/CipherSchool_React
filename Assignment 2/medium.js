console.log("+++++++++++++++++++++++++")
console.log("Medium Problems")
console.log("+++++++++++++++++++++++++")

//Question 1


function reverse(str,letter){
    var arr = str.split(" ");
    

    arr.forEach(function(element,index) {
        if(element.startsWith(letter)){
            arr[index] = element.split("").reverse().join("");
              
        }                 
    });

    var final = arr.join(" ");
    return final;
    
}
console.log(reverse("first man to walk on the moon","m")); 
console.log(reverse("word searches are super fun", "s"));

console.log(reverse("peter piper picked pickled peppers", "p"));
//Question 2

function testJackpot(arr)
{
    if(arr.every(v => v === arr[0]))
    {
        return true;
    }
    else
    {
        return false;
    }

}

var arr=['@','@','@','@']
console.log(testJackpot(arr))
var arr=['abc','abc','abc','abc']
console.log(testJackpot(arr))
var arr=['SS','SS','SS','SS']
console.log(testJackpot(arr))
var arr=['&&','&','&&','&&']
console.log(testJackpot(arr))
var arr=['SS','SS','SS','Ss']
console.log(testJackpot(arr))

//Question 3

function duplicates(arr)
{
    return arr.filter((a,b) => arr.indexOf(a)==b).join(" ")
}

var ele = [1,0,1,0] 
console.log(duplicates(ele))

var num = ['The','big','cat']
console.log(duplicates(num))

var num = ['Jhon','Taylor','Jhon']
console.log(duplicates(num))
 