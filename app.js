function add() {
    var val = document.getElementById("val");
    var list = document.getElementById("list");
    var li = document.createElement("Li");
    var btn = document.createElement("BUTTON");
    var btn1 = document.createElement("BUTTON");
    var btntext = document.createTextNode("Delete");
    var btntext2 = document.createTextNode("Edit");
    btn.appendChild(btntext);
    btn1.appendChild(btntext2);
    
    btn.onclick = function () {
        var li = this.parentNode;
        var ul = li.parentNode;
        ul.removeChild(li);

    }

    btn1.onclick = function (){
        var li = this.parentNode;
        var text = prompt("Enter new update");
    
        li.innerHTML = text;
        li.appendChild(btn);
        li.appendChild(btn1);


    }

var text = document.createTextNode(val.value);
li.appendChild(text)
li.appendChild(btn)
li.appendChild(btn1)
list.appendChild(li)
val.value = " ";

}


function dlt(){
    alert ("Please be carefull \n Think again & again \n Are You Sure you want to delete all todo`s ?");
    document.getElementById("list").innerText = " ";
}