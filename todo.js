document.getElementById("todoInput").addEventListener("focus", function() {
    let addItemDiv = this.parentElement;
    addItemDiv.classList.toggle("todo_add-item--focus");
});

document.getElementById("todoInput").addEventListener("blur", function() {
    let addItemDiv = this.parentElement;
    addItemDiv.classList.toggle("todo_add-item--focus");
});

//Submit button attach point
document.getElementById("submit").addEventListener("click", function(event){
    let list = document.getElementById("list");
    let inputDom = document.getElementById("todoInput");

    list.appendChild(additem(inputDom.value));
    
    inputDom.value = "";
    inputDom.focus();
});

/*
 * Appends a div containing a inputfield and delete button
 * into an unordered list.
 * Returns div domNode.
 */
let additem = function(textValue){
    let listItem = document.createElement("li");
    let div = document.createElement("div");
    let inputField = document.createElement("input");
    let deleteButton = document.createElement("button");

    // Set attributes
    div.id = "item";
    div.setAttribute("class", "todo_list-item");
    inputField.setAttribute("class", "todo_input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("value", textValue);
    deleteButton.innerHTML = "delete";
    deleteButton.id = "deleteButton";

    deleteButton.addEventListener("click", function(event){
        while(listItem.firstChild) {
            listItem.removeChild(listItem.firstChild);
        }
        listItem.remove();
    });

    inputField.addEventListener("focus", function() {
        let listItemDiv = this.parentElement;
        listItemDiv.classList.toggle("todo_list-item--focus");
    });

    inputField.addEventListener("blur", function() {
        let listItemDiv = this.parentElement;
        listItemDiv.classList.toggle("todo_list-item--focus");
    });

    listItem.appendChild(div);
    div.appendChild(inputField);
    div.appendChild(deleteButton);
    return listItem;
}

let clearInput = function() {
    document.getElementById("todoInput").value = "";
}