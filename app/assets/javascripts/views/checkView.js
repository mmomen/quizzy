(function(){
  var CheckView = function($el, quizID, questionIterator, data, score) {
    this.element = $el;
    this.quizID = quizID;
    this.questionIterator = questionIterator;
    this.result = data.correct;
    this.score = score;

    var template = $('.result-template').html();
    var uncompiledTemplate = _.template(template);
    var $html = $(uncompiledTemplate({result: this.result}));
    $el.append($html);

    var _view = this;
    setTimeout(function() {
      _view.element.empty();

      _view.questionIterator++;
      if (_view.result === true) {
        _view.score++;
      }

      var questionsController = new Controllers.Question(_view.element, _view.quizID, _view.questionIterator, _view.score);
      questionsController.nextQuestion();
    }, 1000);
  };

  window.Views = window.Views || {};
  window.Views.Check = CheckView;
})();