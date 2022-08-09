const answer = document.getElementsByClassName("answer");

const quest_card = document.getElementsByClassName("quest-card");

for (let i = 0; i <= quest_card.length; i++) {
  quest_card[i].addEventListener("click", function () {
    for (let k = 0; k <= answer.length; k++) {
      if (answer[k].style.display == "none") {
        answer[k].style.display = "block";
      } else {
        answer[k].style.display = "none";
      }
    }
  });
}
