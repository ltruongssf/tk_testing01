/*global expect browser element protractor*/
describe('LobbyCtrl', function() {
    beforeEach(function() {
        //open the browser at the lobby
        browser.get('/#/');
    });
    it('should equal 1', function() {
        expect(1).toEqual(1);
    });
    it('should have 2 buttons', function() {
        expect(
            element.all(
                protractor.By.css('button.button.button-block')
            ).count()
        ).toEqual(2);
    });
    it('should navigate to first question', function() {
        element(protractor.By.css('.ptor-lobby-go-question')).click()
        expect(browser.getLocationAbsUrl()).toMatch('/question1');
    });
});