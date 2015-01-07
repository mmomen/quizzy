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

var questionsTemplate = _.template(
  "<ol>" +
    "<% _.forEach(content, function(data) { %>" +
      "<li><%= data.question %> </li>" +
        "<ul class=\"choices-block\">" +
          "<% var options = data.choices.split(';') %>" +
          "<% options.forEach(function (o) { %>" +
            "<li><input type='radio' name='question-<%= data.id %>' value='<%= o %>'><%= o %></li>" +
          "<% }) %>" +
        "</ul>" +
    "<% }) %>" +
  "</ol>"
);

$(document).on('click', '.quiz', function() {
  $('#quizzes-display').empty(); //clear the question block 
  var quizID = $(this).data("id");
  var url = "/quizzes/" + quizID + "/questions";
  $.get(url, function(questionData) {
    console.log(questionData);
    var $el = questionsTemplate({content: questionData});
    $('#quizzes-display').append($el);
  });
});

