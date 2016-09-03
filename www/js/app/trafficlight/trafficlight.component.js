angular.
  module('trafficLight').
  component('trafficLight', {
    templateUrl: 'js/app/trafficlight/trafficlight.template.html',
    controller: function TrafficlightController(){
        this.color = 'off';
        this.activate = function(color){
            this.color = color; 
        };
        this.isRed = function() { return this.color === 'red'; };
        this.isYellow = function() { return this.color === 'yellow'; };
        this.isGreen = function() { return this.color === 'green'; };
    }
  });
