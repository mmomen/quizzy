(function(){
  var Check = function(data) {
    this.correct = data.correct;
  };

  Check.fetch = function(quizID, questionIterator, questionID, selected, score, cb) {
    var checkURL = "/quizzes/" + quizID + "/questions/" + questionID + "/check?answer=" + selected;

    $.ajax({
      method: "GET",
      url: checkURL,
      success: function(result) {
        var resultObj = result;
        if (cb) {
          cb(resultObj);
        }
        return new Check(resultObj);
      }
    });
  };

  window.Models = window.Models || {};
  window.Models.Check = Check;
})();