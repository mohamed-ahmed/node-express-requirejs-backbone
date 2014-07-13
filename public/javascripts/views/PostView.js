define([
    'jquery', 
    'backbone',
    'underscore', 
    'models/model',
    'text!templates/main.html'], 
function($, Backbone, _, model, template){
  var PostView = Backbone.View.extend({
    el: 'body',
    initialize: function(){
      this.model = new model({
        message: 'Hello World'
      });
      this.template = _.template( template, { model: this.model.toJSON() } );
    },
    render: function(){
      $(this.el).append( this.template );
    }
  });
  
  return new PostView();
});
