require.config({
  'paths': { 
    "underscore": "libs/underscore", 
    "backbone": "libs/backbone"
  }
}); 

require([
  'order!libs/underscore',
  'order!libs/backbone',
  'order!app'
  ], 
  function(_,Backbone,app){
    console.log("main.js")
    app.init();
});