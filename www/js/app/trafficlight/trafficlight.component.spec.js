describe('Trafficlight', function() {
    var ctrl, $httpBackend;
    beforeEach(module('trafficLight'));
    beforeEach(inject(function($componentController, _$httpBackend_){
        $httpBackend = _$httpBackend_; 
        ctrl = $componentController('trafficLight');
    }));

    it('Initial color is off', function(){
        expect(ctrl.isRed()).toBe(false);
        expect(ctrl.isYellow()).toBe(false);
        expect(ctrl.isGreen()).toBe(false);
    });

    it('Activate Red changes color to red', function(){
        ctrl.activate("red");
        expect(ctrl.isRed()).toBe(true);
        expect(ctrl.isYellow()).toBe(false);
        expect(ctrl.isGreen()).toBe(false);
    });

    it('Activate Green changes color to green', function(){
        ctrl.activate("green");
        expect(ctrl.isRed()).toBe(false);
        expect(ctrl.isYellow()).toBe(false);
        expect(ctrl.isGreen()).toBe(true);
    });

    it('Activate Yellow changes color to yellow', function(){
        ctrl.activate("yellow");
        expect(ctrl.isRed()).toBe(false);
        expect(ctrl.isYellow()).toBe(true);
        expect(ctrl.isGreen()).toBe(false);
    });

    it('Deactivate button with a color active resets all colors', function(){
        ctrl.activate("yellow");
        ctrl.activate("off");
        expect(ctrl.isRed()).toBe(false);
        expect(ctrl.isYellow()).toBe(false);
        expect(ctrl.isGreen()).toBe(false);
    });

    describe('http requests', function() {
        it('fetch status with http returns red', function() { 
            url = 'http://localhost:3000/status/cronos'; 
            $httpBackend.expectGET(url).respond(
                {"id": 1, "project": "cronos", "status": "red"}
            ); 
            ctrl.fetchData();
            $httpBackend.flush(); 
            expect(ctrl.isRed()).toBe(true);
        });
    });
});

