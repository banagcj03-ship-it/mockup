const cards = document.querySelectorAll(".card");

let current = 0;

function showSlide(index) {
  
  cards.forEach(card => {
    card.style.opacity = "0.4";
    card.style.transform = "scale(0.9)";
  });
  
  cards[index].style.opacity = "1";
  cards[index].style.transform = "scale(1)";
}

showSlide(current);

document.querySelector(".next").addEventListener("click", () => {
  
  current++;
  
  if (current >= cards.length) {
    current = 0;
  }
  
  showSlide(current);
  
});

document.querySelector(".prev").addEventListener("click", () => {
  
  current--;
  
  if (current < 0) {
    current = cards.length - 1;
  }
  
  showSlide(current);
  
});