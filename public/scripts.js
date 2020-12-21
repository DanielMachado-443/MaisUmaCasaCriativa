
function onOff(){
document
    .querySelector("#modal")
    .classList
    .toggle("hide")

document
    .querySelector("body")
    .classList
    .toggle("hideScroll")

document
    .querySelector("#modal")
    .classList
    .toggle("addScroll")
}

function ckeckFields(event) {

const valuesToCheck = [
   "title",
   "category",
   "image",
   "description",
   "link",
]
 
const isEmpty = valuesToCheck.find(function(value){ // this function return a bool

    const checkIfIsString = typeof event.target[value].value === "string" // bool    
    const checkIfIsEmpty = !event.target[value].value.trim() // bool        
     
    if(checkIfIsString && checkIfIsEmpty) {
        
        if(event.target["title"].value.trim() &&
        event.target["category"].value.trim() &&
        event.target["image"].value.trim() &&
        event.target["description"].value.trim() &&
        !event.target["link"].value.trim())
        {
            const auxG = "https://www.google.com/search?q="
            var auxT = event.target["title"].value.trim()                       
            event.target["link"].value = auxG+auxT

            return false
        }
        else{
            return true
        }                
    }
})

 if(isEmpty) {
     event.preventDefault()
     alert("       POR FAVOR, PREENCHA TODOS OS CAMPOS")
 }

}
