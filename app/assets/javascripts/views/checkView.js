(function(){
  var CheckView = function($el, quizID, questionIterator, data) {
    this.element = $el;
    this.quizID = quizID;
    this.questionIterator = questionIterator;
    this.result = data.correct;

    var template = $('.result-template').html();
    var uncompiledTemplate = _.template(template);
    var $html = $(uncompiledTemplate({result: this.result}));
    $el.append($html);

    var _view = this;
    setTimeout(function() {
      _view.element.empty();

      _view.questionIterator++;

      var questionsController = new Controllers.Question(_view.element, _view.quizID, _view.questionIterator);
      questionsController.nextQuestion();
    }, 1000);
  };

  window.Views = window.Views || {};
  window.Views.Check = CheckView;
})();