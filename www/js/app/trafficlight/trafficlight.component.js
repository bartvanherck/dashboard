
angular.
    module('trafficLight').
    component('trafficLight', {
        templateUrl: 'js/app/trafficlight/trafficlight.template.html',
        bindings: {
            title: '@',
            project: '@'
        },
        controller: ['$http', '$window', 
                     function TrafficlightController($http, $window) {
            "use strict";
            
            var self = this;
            self.color = 'off';
            self.activate = function (color) {
                self.color = color;
            };
            self.isRed = function () { return self.color === 'red'; };
            self.isYellow = function () { return self.color === 'yellow'; };
            self.isGreen = function () { return self.color === 'green'; };
            self.fetchData = function () {
                $http.get('http://localhost:3000/status/' + self.project
                         ).then(function (response) {
                    var data = response.data;
                    self.color = data.status;
                });
            };
            self.go = function (path) {
                $window.open(path);
            }
        }]
    });