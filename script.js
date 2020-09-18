var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// Delete
var buttonD = document.getElementsByClassName("delete"); 
for(i=0; i<buttonD.length; i++){   
    buttonD[i].addEventListener("click", deleteAfterClick);   
}

function deleteAfterClick(evt){
    // evt.target.removeEventListener("click", deleteAfterClick);
    evt.target.parentNode.remove();
}


// line-through
ul.onclick = function(evt){
	evt.target.classList.toggle("done");
}


function inputLength(){
    return input.value.length;
}

function creatListElement(){
    // creating li and button element  
    var li = document.createElement("li");
    var button = document.createElement('BUTTON');  
                    
    // creating text to be displayed on button 
    var text = document.createTextNode("Delete");    
    // appending text to button 
    button.appendChild(text); 
    button.addEventListener("click", deleteAfterClick);   
    

    li.appendChild(document.createTextNode(input.value));
    // appending button to li
    li.appendChild(button);
    ul.appendChild(li);
    input.value ="";

}

function addAfterClick(){
    if(inputLength() > 0){
        creatListElement();
    }
}

button.addEventListener("click", addAfterClick)

input.addEventListener("keypress", function(event){
    if(inputLength() > 0 && event.keyCode === 13){
        creatListElement();
    }
}) 