const question = document.querySelectorAll(".question");

const answer = document.querySelectorAll(".answer");

const quest_card = document.querySelectorAll(".quest-card");

quest_card.forEach((link) =>
  link.addEventListener("click", function () {
    question.forEach((links) =>
      links.addEventListener("click", function () {})
    );
  })
);
