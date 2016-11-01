/*global expect browser element protractor*/
describe('testing QuestionCtrl',function(){
   //setting up each test
   beforeEach(function(){
       browser.get('/#/');
       //then after loading landing click take test button to go to question html page.
       //we need to start at landing inorder to get the question data.
       element(protractor.By.css('.ptor-lobby-go-question')).click();
   });
   // this spec is testing for text in question A card.
   it('running through questionA text fields',function(){
       //this loop runs through all 30 questions and i represents the question number
       for (var i = 1; i <= 30; i++) {
           //  need to check if the url matches the question(ID) url before we test for text 
           expect(browser.getLocationAbsUrl()).toMatch('/question'+i);
           //  this expect function is checking if the question A text contains any text at all
           expect(element(protractor.By.css('.ptor-question-text-a' + i)).getText()).toBeDefined();
           //  now that we have tested click the questionA card and go to next quest
           //  element(protractor.By.css('.ptor-go-atext')).click();
           element(protractor.By.css('.ptor-question-go-a' + i)).click();
       }
   }, 50000); //  this sets the longest amount of time in milliseconds until the test errors out
   // this spec is testing for text in question B card.
   it('running through questionB text fields',function(){
       for (var i = 1; i <= 30; i++) {
           expect(browser.getLocationAbsUrl()).toMatch('/question'+i);
           expect(element(protractor.By.css('.ptor-question-text-b' + i)).getText()).toBeDefined();
           element(protractor.By.css('.ptor-question-go-b' + i)).click();
       }
   }, 50000);
});