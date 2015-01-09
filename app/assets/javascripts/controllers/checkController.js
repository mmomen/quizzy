(function() {
  var CheckController = function(parentElement, quizID, questionIterator, questionID, selected) {
    this.parentElement = parentElement;
    this.quizID = quizID;
    this.questionIterator = questionIterator;
    this.questionID = questionID;
    this.selected = selected;
  };

  CheckController.prototype.showResult = function() {
    var $el = $(this.parentElement);
    var quizID = this.quizID;
    var questionIterator = this.questionIterator;
    var questionID = this.questionID;
    var selected = this.selected;

    Models.Check.fetch(quizID, questionIterator, questionID, selected, function(data) {
      var checkView = new Views.Check($el, quizID, questionIterator, data);
    });
  };

  window.Controllers = window.Controllers || {};
  window.Controllers.Check = CheckController;
})();