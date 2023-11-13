const open = document.getElementById("openList");
const listMenu = document.getElementById("tbh-list");
const closeIcon = document.getElementById("closeList")


listMenu.addEventListener('click',()=> {

        listMenu.classList.add("open")
    listMenu.style.display = "none";
    closeIcon.style.display = "block";
})


open.addEventListener('click', ()=> {

if (listMenu.classList.contains("open")) {

    listMenu.classList.remove("open")
    listMenu.style.display = "block";
    closeIcon.style.display = "inline";
    open.style.display = "none"
    
}
else {
    listMenu.classList.add("open")
    listMenu.style.display = "none";
    closeIcon.style.display = "none";
}

})

closeIcon.addEventListener('click', ()=> {

    if (listMenu.classList.contains("open")) {
    
        listMenu.classList.remove("open")
        listMenu.style.display = "block";
        closeIcon.style.display = "inline";
        
    }
    else {
        listMenu.classList.add("open")
        listMenu.style.display = "none";
        closeIcon.style.display = "none";
        open.style.display = "block"
    }
    
    })
