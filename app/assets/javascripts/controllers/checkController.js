(function() {
  var CheckController = function(parentElement, quizID, questionIterator, questionID, selected, score) {
    this.parentElement = parentElement;
    this.quizID = quizID;
    this.questionIterator = questionIterator;
    this.questionID = questionID;
    this.selected = selected;
    this.score = score;
  };

  CheckController.prototype.showResult = function() {
    var $el = $(this.parentElement);
    var quizID = this.quizID;
    var questionIterator = this.questionIterator;
    var questionID = this.questionID;
    var selected = this.selected;
    var score = this.score;
    // console.log("before check fetch: " + this.score)

    Models.Check.fetch(quizID, questionIterator, questionID, selected, score, function(data) {
      // console.log("on check fetch: " + score)
      var checkView = new Views.Check($el, quizID, questionIterator, data, score);
    });
  };

  window.Controllers = window.Controllers || {};
  window.Controllers.Check = CheckController;
})();