(function(){
  var QuestionView = function($el, questionIterator, questions) {
    this.element = $el;
    this.questions = questions;

    var template = $('.questions-template').html();
    var uncompiledTemplate = _.template(template);
    var $html = $(uncompiledTemplate({questions: this.questions, questionIterator: questionIterator}));
    $el.append($html);

    var _view = this;
    $html.on('submit', function(e) {
      e.preventDefault();

      var selected = $('input:checked', '#quizzes-display').val();
      var questionIterator = $(this).data("questioniterator");
      var questionID = $(this).data("questionid");
      var quizID = $(this).data("quizid");

      _view.element.empty();

      var checkAnswer = new Controllers.Check(_view.element, quizID, questionIterator, questionID, selected);
      checkAnswer.showResult();
    });
  };

  window.Views = window.Views || {};
  window.Views.Question = QuestionView;
})();