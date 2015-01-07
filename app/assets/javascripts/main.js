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
  var checkAnswerURL = "/quizzes/" + quizID + "/questions/" + questionID + "/check?answer=" + selected;
  
  $.get(checkAnswerURL, function(data) {
    var source = $('.answer-template').html();
    var answerTemplate = _.template(source);
    var compiledAnswerTemplate = answerTemplate({result: data.correct});
    var $el = $(compiledAnswerTemplate);
    $('#quizzes-display').empty();
    $('#quizzes-display').append($el);
  });

  // console.log(questionID, lastQuestionID);
  if (questionID === lastQuestionID) {
    console.log('that was the last question - returning true');
    return true;
  } else {
    questionIterator++;
    setTimeout(function() {
      getQuestion(quizID, questionIterator);
    }, 1000);
  }
});

$(document).on('click', '.quiz', function() {
  $('#quizzes-display').empty(); //clear any quizzes that may be up 
  var source = $('.question-template').html();
  var questionsTemplate = _.template(source);
  var quizID = $(this).data("id");
  var url = "/quizzes/" + quizID + "/questions";
  var questionIterator = 0;
  $.get(url, function(questionData) {
    // console.log(questionData);
    var compiledQuestionsTemplate = questionsTemplate({
      content: questionData,
      quizID: quizID,
      questionIterator: questionIterator
    });
    var $el = $(compiledQuestionsTemplate);
    $('#quizzes-display').append($el);
  });
});

var getQuestion = function(quizID, questionIterator) {
  console.log('hello i am get you quesiton!');
  $('#quizzes-display').empty();
  var source = $('.question-template').html();
  var questionsTemplate = _.template(source);
  var url = "/quizzes/" + quizID + "/questions";
  $.get(url, function(questionData) {
    // console.log(questionData);
    var compiledQuestionsTemplate = questionsTemplate({
      content: questionData,
      quizID: quizID,
      questionIterator: questionIterator
    });
    var $el = $(compiledQuestionsTemplate);
    $('#quizzes-display').append($el);
  });
};