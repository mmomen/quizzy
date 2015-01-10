(function(){
  var CreateQuizController = function(parentElement) {
    this.parentElement = parentElement;
  }

  CreateQuizController.prototype.showButton = function() {
    var $el = $(this.parentElement);

    var quizButton = new Views.CreateQuiz($el);
  };

  window.Controllers = window.Controllers || {};
  window.Controllers.CreateQuiz = CreateQuizController;
})();