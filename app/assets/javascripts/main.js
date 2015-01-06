var quizTemplate = _.template(
  "Quizzes: <% _.forEach(content, function(e) { %>"
  + "<h1><%= e.title %></h1>"
  + "<% }) %>"
);

$(function() {
  $.get("/quizzes", function(data) {
    var compiled = quizTemplate({content: data});
    $('.quizzes-display').append(compiled);
  });
});