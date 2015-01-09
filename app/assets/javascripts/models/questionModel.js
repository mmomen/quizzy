(function() {
  var Question = function(data) {
    this.questionID = data.id;
    this.question = data.question;
    // this.answer = data.answer;
    // this.timesAnswered = data.times_answered;
    // this.correctResponses = data.answers;
    this.quizID = data.quiz_id;
    // this.questionType = data.question_type;
    this.choices = data.choices.split(';');
  };

  Question.fetch = function(id, cb) {
    var quizURL = "/quizzes/" + id + "/questions";
    $.ajax({
      method: "GET",
      url: quizURL,
      success: function(questions) {
        var questionObjs = questions.map(function(questionData) {
          return new Question(questionData);
        });
        if (cb) {
          cb(questionObjs);
        }
      }
    });
  };

  window.Models = window.Models || {};
  window.Models.Question = Question;
})();