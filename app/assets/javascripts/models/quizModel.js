(function() {

  //preparing the quiz object
  var Quiz = function(data) {
    this.title = data.title;
    this.id = data.id;
  };

  //function to fetch quizzes
  Quiz.fetch = function(cb) {
    $.ajax({
      method: "GET",
      url: "/quizzes",
      success: function(quizzes) {
        var quizObjs = quizzes.map(function(quizData) {
          return new Quiz(quizData);
        });
        if (cb) {
          cb(quizObjs);
        }
      }
    });
  };

  Quiz.prototype.save = function(cb) {
    // body...
  };

  window.Models = window.Models || {};
  window.Models.Quiz = Quiz;
})();