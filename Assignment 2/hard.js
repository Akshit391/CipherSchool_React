console.log("+++++++++++++++++++++++++")
console.log("Hard Problems")
console.log("+++++++++++++++++++++++++")


//Question 1

function realTypes(value)
{
    var final=value.constructor.name
    return final;
}

console.log(realTypes(1))
console.log(realTypes("A"))
console.log(realTypes(true))
console.log(realTypes([]))


//Question 2

//question 2:

function validate(input){
    var new_arr = []
    for(element of input){
        var flag = true;
        var newelement = element.replace(/ /g, "");
    	for(let i=0;i<newelement.length;i++){
        	if(!isNaN(newelement[i])){
            	flag = false;
            	break;
            }
        }
        if(!flag){
        	new_arr.push(newelement)
        }
    }
    var final = new_arr.join(" ")
    return final;

}
var input = ["1a","a","2b","b"]
console.log(validate(input));
//output: ab1 3dc e5r

var input1 = ["abc", "abc10"]
console.log(validate(input1));



// output: test1

var input3 = ["abc","ab10c","a10bc","bcd"]
console.log(validate(input3));

var input2 = ["this is a test", "test1"]
console.log(validate(input2));

