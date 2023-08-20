function openTab(event, tabName) {
  const tabContents = document.getElementsByClassName("containerImage");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");
  console.log(event)

}

const closeButton = document.getElementById("close-button");
const popup = document.querySelector(".modal img");
const modalOpen = document.querySelectorAll(".image img");
for (let i = 0; i < modalOpen.length; i++) {
  const thumbnail = modalOpen[i].getAttribute("src");
  modalOpen[i].addEventListener("click", function () {
    console.log(thumbnail);
    popup.setAttribute("src", thumbnail);
    popup.style.display = "block";
  })
  
}


