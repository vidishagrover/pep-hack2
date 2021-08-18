let name = document.querySelector(".name");
let btn = document.querySelector(".cb");
let container = document.querySelector(".container");
let subcontainer = document.querySelector(".subcontainer");
let newmodal =  document.createElement("div");
btn.addEventListener("click",function(){
// console.log(name.value);
subcontainer.remove();
let text = document.createElement("div");
text.classList.add("new");
text.innerHTML = "Thanks for your suggestion " + name.value + ". GRILL & CHILL always at your service." ;
newmodal.append(text);
container.append(newmodal);
})

//menu
