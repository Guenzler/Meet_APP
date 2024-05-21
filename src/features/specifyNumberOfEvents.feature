Feature: Specify number of events

    Scenario: When user hasn t specified a number, 32 events are shown by default
        Given the list of events is displayed
        When the user has not typed in the number input field
        Then the app displays 32 events by default

    Scenario: User can change the number of events displayed
        Given the list of events is displayed
        When the user types a number in the input field
        Then the app updates the number of events displayed according to the users selection