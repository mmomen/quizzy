(function(){
  var QuestionView = function($el, questionIterator, questions) {
    this.element = $el;
    this.questions = questions;

    var template = $('.questions-template').html();
    var uncompiledTemplate = _.template(template);
    var $html = $(uncompiledTemplate({questions: this.questions, questionIterator: questionIterator}));
    $el.append($html);
  };

  window.Views = window.Views || {};
  window.Views.Question = QuestionView;
})();