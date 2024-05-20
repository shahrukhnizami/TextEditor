var ddropdown = document.getElementsByClassName("heading")
var hone = document.getElementById('h1')
var textInput = document.getElementById("Eddit")
var showcode = document.getElementById("showcode")
var bbold = document.getElementById('bold')
var under_Line = document.getElementById('underLine')
var linethrough = document.getElementById('line_through')


for(var i=0; i<ddropdown.length;i++){
    console.log(ddropdown.innerHTML=hone )
    ddropdown.textContent= hone
    //ddropdown[i].innerHTML= 
}




var active=false

var hone = document.getElementById("h1")


showcode.addEventListener('click', function(){
    showcode.dataset.active = !active;
    active = !active;
    if(active){
        textInput.textContent=textInput.innerHTML;
    }
    else{
        textInput.innerHTML=textInput.textContent;
    }
})

bbold.addEventListener('click',function(){
    textInput.style.fontWeight = "bold"
})
bbold.addEventListener('dblclick',function(){
    textInput.style.fontWeight = "normal"
})

under_Line.addEventListener('click',function()
{
    textInput.style.textDecoration = "underline"
})
under_Line.addEventListener('dblclick',function()
{
    textInput.style.textDecoration = "none"
})
linethrough.addEventListener('click',function()
{
    textInput.style.textDecoration = "line-through" 
})
linethrough.addEventListener('dblclick',function()
{
    textInput.style.textDecoration = "none" 
})





//function bold() {
  //  textInput.style.fontWeight = "bold"
//}
//function underLine(){
  //  textInput.style.textDecoration = "underline"
//}

function italic(){
    textInput.style.fontStyle = "italic" 

}

function left(){
    textInput.style.textAlign = "left" 

}
function center(){
    textInput.style.textAlign = "center" 

}
function right(){
    textInput.style.textAlign = "right" 

}
// function line_through(){
//     textInput.style.textDecoration = "line-through" 

// }
function justify(){
    textInput.style.textAlign = "justify" 

}

function color(e){
    let value = e.value;
    textInput.style.color=value;
 }

 function background(e){
    let value = e.value;
    textInput.style.background=value;
 }

 