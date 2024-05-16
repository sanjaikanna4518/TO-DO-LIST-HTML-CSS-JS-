var ul = document.getElementById("list-container")
var input = document.getElementById("input")
function kanna() {
    var clist = document.createElement("li")
    clist.innerHTML=input.value + "<button onclick='deelete(event)'>delete</button>"
    ul.append(clist)

}

function deelete(event) {
    event.target.parentElement.remove()

}