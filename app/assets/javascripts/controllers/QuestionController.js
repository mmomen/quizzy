(function(){
  var QuestionController = function(parentElement, id) {
    this.parentElement = parentElement;
    this.quizID = id;
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

  window.Controllers = window.Controllers || {};
  window.Controllers.Question = QuestionController;
})();