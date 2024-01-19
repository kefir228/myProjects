function addListener() {
    const burger = window.document.getElementById("burger")
    document.addEventListener("click", function (event) {
        if (event.target.id==="showBurger") {
          burger.classList.add('burger__show')  
        }
      
        if (event.target.id==='reverse__burger') {
          burger.classList.remove('burger__show')
        }
    })
}
addListener()
