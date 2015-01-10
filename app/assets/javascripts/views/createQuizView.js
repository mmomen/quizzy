(function() {
  var CreateQuizView = function($el) {
    this.element = $el;

    var template = $('.new-quiz-button-template').html();
    var uncompiledTemplate = _.template(template);
    var $html = uncompiledTemplate();
    $el.append($html);

    _view = this;
    $el.on('click', '#create-display', function() { //needs to be refactored\organized better
      _view.element.empty();
      var template = $('.create-quiz-template').html();
      var uncompiledTemplate = _.template(template);
      var $html = uncompiledTemplate();
      _view.element.append($html);

      _view.element.on('submit', '#quiz-title', function(e) {
        e.preventDefault();

        var inputTitle = $('#quiz-title-input').val();
        $.ajax({
          method: "POST",
          url: "/quizzes",
          data: {
            quiz: {
              title: inputTitle
            }
          },
          success: function(data) {
            var newQuizID = data.entity.id;
            //call add question controller, pass in data.entity.id
          }
        });
        /*$.post( "/quizzes", {
          quiz: {
            title: inputTitle
          }, function(data) {
            console.log(data);
          }
        });*/

      });
    });

  };

  window.Views = window.Views || {};
  window.Views.CreateQuiz = CreateQuizView;
})();