(function () {

  'use strict';

  module.exports = function () {

    var clickedTimer;

    this.Given('I am on the home page',
      function (callback) {
        this.client.
          url(process.env.ROOT_URL).
          call(callback);
      }
    );

    this.When(/^I click on the (.*)$/,
      function (timerButton, callback) {
        this.client.click('[data-type=' + timerButton + ']').
        call(callback);
      }
    );

    this.Then(/^The (.*) gets selected$/,
      function (timerButton, callback) {
        this.client.getAttribute('[data-type=' + timerButton + ']', 'class', function(err, attr) {
          global.chai.assert.isAbove(attr.indexOf('disabled'), -1);
        }).
        call(callback);
      }
    );

    this.Then(/^The timer gets updated with (.*) minutes$/,
      function (correctTime, callback) {
        this.client.getText('.pomodoro-current-time', function(err, time) {
          global.chai.assert.equal(time, correctTime);
        }).
        call(callback);
      }
    );

  };

})();
