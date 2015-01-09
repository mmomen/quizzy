(function(){
  var CheckView = function($el, data) {
    this.element = $el;
    this.result = data.correct;

    var template = $('.result-template').html();
    console.log(template);
    var uncompiledTemplate = _.template(template);
    var $html = $(uncompiledTemplate({result: this.result}));
    $el.append($html);
  };

  window.Views = window.Views || {};
  window.Views.Check = CheckView;
})();