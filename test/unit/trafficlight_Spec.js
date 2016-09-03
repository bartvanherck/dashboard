describe('Trafficlight', function() {
    var ctrl;
    beforeEach(module('dashboardApp'));
    beforeEach(inject(function($componentController){
      ctrl = $componentController('trafficLight');
    }));

    it('Initial color is off', function(){
      expect(ctrl.color).toBe("off");
    });
});

