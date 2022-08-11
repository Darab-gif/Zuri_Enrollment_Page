const answer = document.querySelectorAll(".answer");

const quest_card = document.querySelectorAll(".quest-card");

function showAns() {
  quest_card[0].addEventListener("click", () => {
    if (answer[0].style.display === "none") {
      answer[0].style.display = "block";
    } else {
      answer[0].style.display = "none";
    }
  });
  quest_card[1].addEventListener("click", () => {
    if (answer[1].style.display === "none") {
      answer[1].style.display = "block";
    } else {
      answer[1].style.display = "none";
    }
  });
  quest_card[2].addEventListener("click", () => {
    if (answer[2].style.display === "none") {
      answer[2].style.display = "block";
    } else {
      answer[2].style.display = "none";
    }
  });
  quest_card[3].addEventListener("click", () => {
    if (answer[3].style.display === "none") {
      answer[3].style.display = "block";
    } else {
      answer[3].style.display = "none";
    }
  });
  quest_card[4].addEventListener("click", () => {
    if (answer[4].style.display === "none") {
      answer[4].style.display = "block";
    } else {
      answer[4].style.display = "none";
    }
  });
}

showAns();
