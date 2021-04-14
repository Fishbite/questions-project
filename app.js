//using selectors inside the element
// Note: this method negates having to
// traverse the entire DOM to select
// the elements that we need

// select all items that are questions
const questions = document.querySelectorAll(".question");

// loop through each and every question
questions.forEach(function (question) {
  //console.log(question);

  // select all buttons
  const btn = question.querySelector(".question-btn");
  //console.log(btn);
  // add an event listener to each button
  btn.addEventListener("click", function () {
    // loop through questions to close text that is already open
    // remember: 'item' is a question, so if the item
    //is not the same question that we are itterating over
    //in the outer loop, remove the class
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    // show/hide text when btn clicked
    question.classList.toggle("show-text");
  });
});

// traversing the dom
/*
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const question = event.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});
*/
