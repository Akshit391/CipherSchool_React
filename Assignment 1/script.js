const search = () =>
{
var input=document.getElementById("search").value.toUpperCase();

var blocks=document.getElementsByClassName("items") ;
var heading=document.getElementsByClassName("names");

for(var i=0;i<heading.length;i++)
{
    let x=heading[i];
  
    
    if(x)
    {
        let textvalue=x.textContent || x.innerHTML
        console.log(textvalue)

        if(textvalue.toUpperCase().indexOf(input)>-1)
        {
            blocks[i].style.display=""
        }
        else
        {
            blocks[i].style.display="none"
        }
    }
}

}


const donuts = () =>
{
    var bake=document.getElementsByClassName("items") ;
    //  console.log(block)
    var block=document.getElementsByTagName("img") ;
    // console.log(block)
     for(var j=0;j<block.length;j++)
     {
        var x=block[j].name
        // console.log(x)
        if(x=="donut")
        {
            bake[j].style.display=""
        }
        else{
            bake[j].style.display="none"
        }
     }  
}

const cakes = () =>
{
    var bake=document.getElementsByClassName("items") ;
    //  console.log(block)
    var block=document.getElementsByTagName("img") ;
    // console.log(block)
     for(var j=0;j<block.length;j++)
     {
        var x=block[j].name
        // console.log(x)
        if(x=="cake")
        {
            bake[j].style.display=""
        }
        else{
            bake[j].style.display="none"
        }
     }  
}
const chocolates = () =>
{
    var bake=document.getElementsByClassName("items") ;
    //  console.log(block)
    var block=document.getElementsByTagName("img") ;
    // console.log(block)
     for(var j=0;j<block.length;j++)
     {
        var x=block[j].name
        // console.log(x)
        if(x=="chocolate")
        {
            bake[j].style.display=""
        }
        else{
            bake[j].style.display="none"
        }
     }  
}
const candys = () =>
{
    var bake=document.getElementsByClassName("items") ;
    //  console.log(block)
    var block=document.getElementsByTagName("img") ;
    // console.log(block)
     for(var j=0;j<block.length;j++)
     {
        var x=block[j].name
        // console.log(x)
        if(x=="candy")
        {
            bake[j].style.display=""
        }
        else{
            bake[j].style.display="none"
        }
     }  
}







