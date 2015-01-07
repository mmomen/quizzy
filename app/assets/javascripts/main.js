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

$(document).on('click', '.quiz', function() {
  var source = $('.question-template').html();
  var questionsTemplate = _.template(source);
  $('#quizzes-display').empty(); //clear the question block 
  var quizID = $(this).data("id");
  var url = "/quizzes/" + quizID + "/questions";
  $.get(url, function(questionData) {
    console.log(questionData);
    var compiledQuestionsTemplate = questionsTemplate({content: questionData});
    var $el = $(compiledQuestionsTemplate);
    $('#quizzes-display').append($el);
  });
});