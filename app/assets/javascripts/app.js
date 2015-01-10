$(document).ready(function() {
  var controller = new Controllers.Quiz($("#quizzes-display"));
  controller.showQuizzes();

  var createController = new Controllers.CreateQuiz($("#quizzes-display"));
  createController.showButton();
});