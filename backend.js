let submitButton = document.getElementById("submit")
let input = document.getElementById("grocery_input")
let groceryList = document.getElementById("grocery_list")


submitButton.addEventListener("click", function() {
    saveInput()
})

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        saveInput()
    }
})
function saveInput() {
    let el = document.createElement("p")
    el.textContent = input.value
    el.id = input.value
    el.className = "grocery_item"
    groceryList.appendChild(el)
    input.value = ""
}




