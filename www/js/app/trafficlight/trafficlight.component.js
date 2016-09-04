angular.
  module('trafficLight').
  component('trafficLight', {
    templateUrl: 'js/app/trafficlight/trafficlight.template.html',
    controller: ['$http', function TrafficlightController($http){
        this.color = 'off';
        this.activate = function(color){
            this.color = color; 
        };
        this.isRed = function() { return this.color === 'red'; };
        this.isYellow = function() { return this.color === 'yellow'; };
        this.isGreen = function() { return this.color === 'green'; };
        this.fetchData = function() {
            var self = this;
            data = {"id": 1,"project": "cronos","status": "green" };
            $http.get('http://localhost:3000/status/cronos').then(function(response) {
                data = response.data;
                self.color = data.status;
            });
        };
    }]
  });
