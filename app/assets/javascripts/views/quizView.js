(function() {
  var QuizView = function($el, quizzes) {
    this.element = $el;
    this.quizzes = quizzes;
    var template = $('.quizzes-template').html();
    var uncompiledTemplate = _.template(template);
    var $html = $(uncompiledTemplate({quizzes: this.quizzes}));
    $el.append($html);

    var _view = this;
    $html.children('.quiz').on('click', function() {
      var quizID = $(this).data("id");
      _view.element.empty();
      var questionsController = new Controllers.Question(_view.element, quizID);
      questionsController.showFirstQuestion();
    });
    $el.append($html);
  };

  window.Views = window.Views || {};
  window.Views.Quiz = QuizView;
})();