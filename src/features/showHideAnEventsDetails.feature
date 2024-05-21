Feature: ShowHide Event Details

    Scenario: An event element is collapsed by default
        Given the event list is displayed
        When the user has not clicked on an event
        Then the event details are collapsed by default

    Scenario: User can expand an event to see details
        Given the event list is displayed
        When the user clicks on an event
        Then the app expands the event to display its details

    Scenario: User can collapse an event to hide details
        Given the event list is displayed
        And one event is expanded
        When the user clicks the expanded element
        Then the app collapses the event to hide its details
