$( document ).ready(function(){
	if (typeof annotator === 'undefined') {
          alert("Oops! Something went wrong and Annotator isn't loaded.");
      } else {
        var app = new annotator.App();
        app.include(annotator.ui.main,{
              element: document.querySelector('#tweet-content'),
            })
            .include(annotatorImageSelect, {
              element: $('.NaturalImage-image'),
           });
          app.start();
      }

});
        