let menu = document.querySelector(".menu");
let main = document.querySelector(".header-img");
let title = document.querySelector(".title");
let options = document.querySelector(".options");
let reserve = document.querySelector(".reserve");
// let arr = [
//     {id : "1", name : "Tandoori Vegetable Platter", price : "350"},
//     {id : "1", name : "Cheese Platter", price : "350"},
//     {id : "1", name : "Spaghetti Napolitana", price : "350"},
// ]
menu.addEventListener("click",function(){
    title.remove();
    options.remove();
    let container = document.createElement("div");
    container.classList.add("container", "newbox");
    // let cross =  document.createElement("div");
    // cross.classList.add("material-icons", "scroller" , "left-scroller");
    // cross.innerHTML = close;
    // <div class="material-icons scroller left-scroller">arrow_left</div>
    let image1 = document.createElement("img");
    image1.classList.add("new-image");
    image1.setAttribute("src" , "img/menu1.jpeg");
    let image2 = document.createElement("img");
    image2.classList.add("new-image");
    image2.setAttribute("src" , "img/menu2.jpeg");
//     let heading = document.createElement("h1");
//     heading.classList.add("menudes");
//     heading.innerHTML = "MENU"
//    for(let i = 0; i < arr.length; i++){
//     let subcontainer = document.createElement("div");
//     let namecontainer = document.createElement("div");
//     let pricecontainer = document.createElement("div");
//     subcontainer.classList.add("row");
//     namecontainer.innerHTML = arr[i].name;
//     pricecontainer.innerHTML = arr[i].price;
//     subcontainer.append(namecontainer,pricecontainer)
//     container.append(subcontainer);
// }
container.append( image1, image2);
main.append(container);
container.addEventListener("dblclick" ,function(){
    container.remove();
    main.append(title,options);
})
})
function tableConfirm(button, name,date,time,container){
    button.addEventListener("click",function(){
        console.log(name.value , date.value,time.value);
        container.remove();
        button.remove();
        let confirmation = document.createElement("div");
        confirmation.classList.add("confirm")
        let heading1 = document.createElement("h2");
        let heading2 = document.createElement("h2");
        let heading3 = document.createElement("h2");
        let heading4 = document.createElement("h2");
        heading1.innerHTML = name.value + " your reservation is Confirmed. ";
        heading2.innerHTML = "Time - " + time.value;
        heading3.innerHTML = "Date - " + date.value;
        heading4.innerHTML = "Grill & Chill welcomes you with an open heart🍴"
        confirmation.append(heading1,heading2,heading3,heading4);
        main.append(confirmation);
        setTimeout(() => {
            confirmation.remove();
            main.append(title,options);
            main.classList.remove("new-header");
            main.classList.add("header-img")
        },3000)
    })
}

reserve.addEventListener("click",function(){
    let container = document.createElement("div");
    container.classList.add("container");
    title.remove();
    options.remove();
    main.classList.remove("header-img");
    main.classList.add("new-header");
    let heading = document.createElement("h1");
    heading.classList.add("reserve-heading");
    heading.innerHTML = "Reservation";
    let subheading = document.createElement("h3");
    subheading.classList.add("heading");
    subheading.innerHTML = "BOOK A TABLE";
    let deatailsA = document.createElement("div");
    deatailsA.classList.add("detailsA")
    let name = document.createElement("input");
    let email = document.createElement("input");
    let phone = document.createElement("input");
    name.setAttribute("placeholder", "Name");
    email.setAttribute("placeholder", "xyz@gmail.com");
    phone.setAttribute("placeholder", "📞  Phone No");
    name.classList.add("format");
    email.classList.add("format");
    phone.classList.add("format");
    let deatailsB = document.createElement("div");
    deatailsB.classList.add("detailsA");
    let date= document.createElement("input");
    date.setAttribute("type","date");
    let time = document.createElement("input");
    time.setAttribute("type","time");
    date.classList.add("format");
    time.classList.add("format");
    let button = document.createElement("input");
    button.setAttribute("type","button");
    button.classList.add("book");
    button.setAttribute("value","BOOK A TABLE");
    deatailsA.append(name,email,phone);
    deatailsB.append(date,time);
    container.append(heading,subheading,deatailsA,deatailsB);
    main.append(container,button);
    tableConfirm(button,name,date,time,container);
})
