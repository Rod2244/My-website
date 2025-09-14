 const reasons = document.querySelectorAll(".reason");
    reasons.forEach((reason, i) => {
      reason.addEventListener("click", () => {
        alert(`Reason #${i+1}: ${reason.textContent}`);
      });
    });

function openPopup(imgSrc, text) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popup-img").src = imgSrc;
  document.getElementById("popup-text").innerText = text;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
