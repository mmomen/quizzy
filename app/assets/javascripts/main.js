var menuTemplate = _.template(
  "<% _.forEach(content, function(e) { %>" +
    "<li class=\"quiz\" data-id=\"<%= e.id %>\"><%= e.title %></li>" +
  "<% }) %>"
);

$(function() {
  $.get("/quizzes", function(data) {
    var compiled = menuTemplate({content: data});
    $('#menu').append(compiled);
  });
});

$(document).on('submit', '#form-submit', function(e) {
  e.preventDefault();
  var selected = $('input:checked', '#quizzes-display').val();
  var quizID = $(this).data("quizid");
  var questionIterator = $(this).data("questioniterator");
  var questionID = $(this).data("questionid");
  var lastQuestionID = $(this).data("lastquestionid");
  var score = $(this).data("score");

  var checkAnswerURL = "/quizzes/" + quizID + "/questions/" + questionID + "/check?answer=" + selected;
  
  $.get(checkAnswerURL, function(data) {
    // console.log("before: " + score);
    if (data.correct === true) {
      score++;
    }
    // console.log("after: " + score);
    var answerSource = $('.answer-template').html();
    var answerTemplate = _.template(answerSource);
    var compiledAnswerTemplate = answerTemplate({result: data.correct});
    var $elAnswer = $(compiledAnswerTemplate);
    $('#quizzes-display').empty();
    $('#quizzes-display').append($elAnswer);
    if (questionID === lastQuestionID) {
      // console.log('that was the last question, your score: ' + score);
      var scoreSource = "<h1>YO SCORE BE: <%= ttt %></h1>";
      var scoreTemplate = _.template(scoreSource);
      var compiledScoreTemplate = scoreTemplate({ttt: score});
      var $elScore = $(compiledScoreTemplate);
      setTimeout(function() {
        $('#quizzes-display').empty();
        $('#quizzes-display').append($elScore);
      }, 1000);
    } else {
      questionIterator++;
      // console.log('fff');
      setTimeout(function() {
        // getQuestion(quizID, questionIterator, score);
        getQuestion(quizID, questionIterator, score);
      }, 1000);
    }
  });
});

$(document).on('click', '.quiz', function() {
  $('#quizzes-display').empty(); //clear any quizzes that may be up 
  var source = $('.question-template').html();
  var questionsTemplate = _.template(source);
  var quizID = $(this).data("id");
  var url = "/quizzes/" + quizID + "/questions";
  var questionIterator = 0;
  var score = 0;
  $.get(url, function(questionData) {
    // console.log(questionData);
    var compiledQuestionsTemplate = questionsTemplate({
      content: questionData,
      quizID: quizID,
      questionIterator: questionIterator,
      score: score
    });
    var $el = $(compiledQuestionsTemplate);
    $('#quizzes-display').append($el);
  });
});

var getQuestion = function(quizID, questionIterator, score) {
  // console.log('hello i am get you quesiton!');
  $('#quizzes-display').empty();
  var source = $('.question-template').html();
  var questionsTemplate = _.template(source);
  var url = "/quizzes/" + quizID + "/questions";
  $.get(url, function(questionData) {
    // console.log(questionData);
    var compiledQuestionsTemplate = questionsTemplate({
      content: questionData,
      quizID: quizID,
      questionIterator: questionIterator,
      score: score
    });
    var $el = $(compiledQuestionsTemplate);
    $('#quizzes-display').append($el);
  });
};