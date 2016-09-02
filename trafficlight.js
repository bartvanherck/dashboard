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
        '<div ng-class="isRed() ? \'red on\' : \'red off\' "></div>' + 
        '<div ng-class="isYellow() ? \'yellow on\' : \'yellow off\' "></div>' + 
        '<div ng-class="isGreen() ? \'green on\' : \'green off\' "></div>' + 
      '</div>' +
    '</div>' +
    '</div>' +
    '<button type="button" ng-click="activate(\'red\')">Red</button>' +
    '<button type="button" ng-click="activate(\'yellow\')">Yellow</button>' +
    '<button type="button" ng-click="activate(\'green\')">Green</button>' +
    '<button type="button" ng-click="activate(\'off\')">Off</button>',
    controller: function DashBoardController($scope){
        var colors = ['off', 'red', 'green', 'yellow'];
        $scope.color = colors[0];
        $scope.activate = function(color){
            $scope.color = color; 
        };
        $scope.isRed = function() { return $scope.color === colors[1]; };
        $scope.isYellow = function() { return $scope.color === colors[3]; };
        $scope.isGreen = function() { return $scope.color === colors[2]; };
    }
  });
