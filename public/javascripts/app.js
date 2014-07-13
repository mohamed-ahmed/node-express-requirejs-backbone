define(['routers/home'], function(router){
  var init = function(){
  	console.log("app.js")
    this.router = new router();
  };
  
  return { init: init};
});