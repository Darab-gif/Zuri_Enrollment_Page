const answer = document.querySelectorAll(".answer");

const quest_card = document.querySelectorAll(".quest-card");

for (let i = 0; i <= quest_card.length; i++) {
  for (let k = 0; k < answer.length; k++) {
    quest_card[i].addEventListener("click", function () {
      if (answer[k].style.display === "none") {
        answer[k].style.display = "block";
      } else {
        answer[k].style.display = "none";
      }
    });
  }
}
