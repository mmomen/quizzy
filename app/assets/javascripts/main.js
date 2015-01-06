$(function() {
  $.get("/quizzes", function(data) {
    console.log(data);
    var source = $(".my-template").html();
    var uncompiledTemplate = _.template(source);
    data.forEach(function(e) {
      var stuff = uncompiledTemplate({
        content: {
          title: e.title
        }
      });
      $('.quizzes-display').append(stuff);
    });
  });
});