function openTab(event, tabName) {
  const tabContents = document.getElementsByClassName("containerImage");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");
  console.log(event)

}
    
  
const modalOpen = document.querySelectorAll(".containerImage .image");
for (let i = 0; i < modalOpen.length; i++) {
modalOpen.addEventListenner("click", function (){
  modalOpen.background-image
})
}


