Feature: Select a timer

  @dev
  Scenario Outline:
    Given I am on the home page
    When I click on the <timerButton>
    Then The <timerButton> gets selected
      And The timer gets updated with <correctTime> minutes

    Examples:
    |      timerButton | correctTime |
    |    POMODORO_TIME |       25:00 |
    | SHORT_BREAK_TIME |       05:00 |
    |  LONG_BREAK_TIME |       15:00 |
