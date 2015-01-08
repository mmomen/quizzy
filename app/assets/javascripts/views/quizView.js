(function() {
  var QuizView = function($el, quizzes) {
    this.element = $el;
    this.quizzes = quizzes;
    var template = $('.quizzes-template').html();
    var uncompiledTemplate = _.template(template);
    var $html = $(uncompiledTemplate({quizzes: this.quizzes}));
    $el.append($html);

    var _view = this; //QUEST: this is supposed to be an element at this point? where is this coming from?
    $html.children('.quiz').on('click', function() {
      var id = $(this).data("id");
      _view.destroy();
      var questionsController = new Controller.QuestionsController(_view.element, questionsController.showFirstQuestion());
    });
    $el.append($html);
  };

  window.Views = window.Views || {};
  window.Views.Quiz = QuizView;
})();