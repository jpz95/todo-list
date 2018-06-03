
//Submit button attach point
document.getElementById("submit").addEventListener("click", function(event){
    let list = document.getElementById("list");
    let inputDom = document.getElementById("todoInput");

    list.appendChild(additem(inputDom.value));
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
    inputField.type = "text";
    inputField.value = textValue;  
    deleteButton.innerHTML = "delete";
    deleteButton.id = "deleteButton";

    deleteButton.addEventListener("click", function(event){
        while(listItem.firstChild) {
            listItem.removeChild(listItem.firstChild);
        }
        listItem.remove();
    });

    listItem.appendChild(div);
    div.appendChild(inputField);
    div.appendChild(deleteButton);
    return listItem;
}