document.getElementById("submit").addEventListener("click", function(event){
    let list = document.getElementById("list");
    let inputDom = document.getElementById("todoInput");
    let node = document.createElement("li");
    node.innerHTML = inputDom.value;
    list.appendChild(node);
});