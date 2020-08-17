const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  //   console.log(btn);
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      question.classList.toggle("show-text");
    });
  });
});
