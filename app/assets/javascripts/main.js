var menuTemplate = _.template(
  "<% _.forEach(content, function(e) { %>" +
    "<li><%= e.title %></li>" +
  "<% }) %>"
);

$(function() {
  $.get("/quizzes", function(data) {
    var compiled = menuTemplate({content: data});
    $('#menu').append(compiled);
  });
});