angular.
  module('dashboardApp').
  component('trafficLight', {
    template:
      '<div class="container">' +
      '<div class="trafficlight">' +
      '<div class="protector"></div>' +
      '<div class="protector"></div>' +
      '<div class="protector"></div>' +
      '<div class="trafficlightbody">' +
        '<div ng-class="$ctrl.isRed() ? \'red on\' : \'red off\' "></div>' + 
        '<div ng-class="$ctrl.isYellow() ? \'yellow on\' : \'yellow off\' "></div>' + 
        '<div ng-class="$ctrl.isGreen() ? \'green on\' : \'green off\' "></div>' + 
      '</div>' +
    '</div>' +
    '</div>' +
    '<button type="button" ng-click="$ctrl.activate(\'red\')">Red</button>' +
    '<button type="button" ng-click="$ctrl.activate(\'yellow\')">Yellow</button>' +
    '<button type="button" ng-click="$ctrl.activate(\'green\')">Green</button>' +
    '<button type="button" ng-click="$ctrl.activate(\'off\')">Off</button>',
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
