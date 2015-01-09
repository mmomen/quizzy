(function(){
  var QuestionController = function(parentElement, id, questionIterator) {
    this.parentElement = parentElement;
    this.quizID = id;
    this.questionIterator = questionIterator;
  };

  QuestionController.prototype.showFirstQuestion = function() {
    var $el = $(this.parentElement);
    var quizID = this.quizID;
    var questionIterator = 0;

    Models.Question.fetch(quizID, function(questions) {
      // console.log(questions);
      var questionView = new Views.Question($el, questionIterator, questions[questionIterator]);
    });
  };

  QuestionController.prototype.nextQuestion = function() {
    var $el = $(this.parentElement);
    var quizID = this.quizID;
    var questionIterator = this.questionIterator;

    Models.Question.fetch(quizID, function(questions) {
      console.log(questions);
      if (questions[questionIterator] === undefined) {
        //show score
      } else {
        var questionView = new Views.Question($el, questionIterator, questions[questionIterator]);
      }
    });
  };

  window.Controllers = window.Controllers || {};
  window.Controllers.Question = QuestionController;
})();