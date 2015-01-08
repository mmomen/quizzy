$(document).ready(function() {
  var controller = new Controllers.Quiz($("#quizzes-display"));
  controller.showQuizzes();
});