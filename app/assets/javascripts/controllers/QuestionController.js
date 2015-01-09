(function(){
  var QuestionController = function(parentElement, id, questionIterator, score) {
    this.parentElement = parentElement;
    this.quizID = id;
    this.questionIterator = questionIterator;
    this.score = score;
  };

  QuestionController.prototype.showFirstQuestion = function() {
    var $el = $(this.parentElement);
    var quizID = this.quizID;
    var questionIterator = 0;
    var score = 0;

    Models.Question.fetch(quizID, function(questions) {
      var questionView = new Views.Question($el, questionIterator, questions[questionIterator], score);
    });
  };

  QuestionController.prototype.nextQuestion = function() {
    var $el = $(this.parentElement);
    var quizID = this.quizID;
    var questionIterator = this.questionIterator;
    var score = this.score;

    Models.Question.fetch(quizID, function(questions) {
      if (questions[questionIterator] === undefined) {
        console.log("final: " + score);
      } else {
        var questionView = new Views.Question($el, questionIterator, questions[questionIterator], score);
      }
    });
  };

  window.Controllers = window.Controllers || {};
  window.Controllers.Question = QuestionController;
})();