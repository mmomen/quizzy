(function() {
  var ScoreView = function($el, score) {
    this.element = $el;
    this.score = score;

    var template = $('.score-template').html();
    var uncompiledTemplate = _.template(template);
    var $html = $(uncompiledTemplate({score: score}));
    $el.append($html);
  };

  window.Views = window.Views || {};
  window.Views.Score = ScoreView;
})();