function openTab(event, tabName) {
  const tabContents = document.getElementsByClassName("containerImage");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");
  console.log(event)

}

const popup = document.querySelector("panelRight");
const modalOpen = document.querySelectorAll(".image img");
for (let i = 0; i < modalOpen.length; i++) {
  const thumbnail = modalOpen[i].getAttribute("src");
  modalOpen[i].addEventListener("click", function () {
    console.log(thumbnail);
    let htmls = `
    <div id="modal" class="modal">
    <div class="modal-content">
      <span id="close-button" class="close-button">&times;</span>
      <div class="image">
        <img src="${thumbnail}">
      </div>
    </div>
     </div>
    `;
  popup.innerHTML = htmls.join("");   
  })
  
}


