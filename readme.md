# Meet APP

## Project Description
This will be a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application will use the Google Calendar API to fetch upcoming events.

## User Stories

1. As a user, I should be able to filter events by city so that I can see the list of events in the city I'm interested in.  

2. As a user, I should be able to show/hide event details so that I can see more/less information about an event I'm interested in.  

3. As a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.  

4. As a user, I should be able to use the app when offline so that I can view the event list at all times even without access to the internet.  

5. As a user, I should be able to add the app shortcut to my home screen so it is more convenient to open the app.   

6. As a user, I should be able to see a chart showing the upcoming events in each city so I have a visual overview about events.   

## Scenarios

### Feature 1: Filter Events By City

Scenario 1  
When user hasn’t searched for a city, show upcoming events from all cities.  
Given the user has not searched for a city  
    When the user opens the app  
    Then the user should see the list of all upcoming events   

Scenario 2  
User should see a list of suggestions when they search for a city.  
Given the main page is open    
    When the user starts typing in the search field  
    Then he user should recieve a list of cities (suggestions) that match what theyve typed    

Scenario 3  
User can select a city from the suggested list.  
Given the user was typing something  in the city textbox and the list of suggestions is showing
    When the user selects a city from the suggested list  
    Then their city should be changed to that city the user should receive a list of upcoming events in that city    

### Feature 2: Show/Hide Event Details

Scenario 1  
An event element is collapsed by default.  
Given the event list is displayed    
    When the user has not clicked on an event  
    Then the event details are collapsed by default  

Scenario 2  
User can expand an event to see details.  
Given the event list is displayed    
    When the user clicks on an event    
    Then the app expands the event to display its details  

Scenario 3  
User can collapse an event to hide details.  
Given the event list is displayed   and one event is expanded  
    When the user clicks the expanded element    
    Then the app collapses the event to hide its details  

### Feature 3: Specify Number of Events

Scenario 1  
When user hasn’t specified a number, 32 events are shown by default.  
Given the list of events is displayed    
    When the user has not typed in the number input field    
    Then the app displays 32 events by default  

Scenario 2  
User can change the number of events displayed.  
Given the list of events is displayed    
    When the user types a number in the input field    
    Then the app updates the number of events displayed according to the user's selection  

### Feature 4: Use the App When Offline

Scenario 1  
Show cached data when there’s no internet connection  
Given the app has previously cached data  
    And there is no internet connection  
    When the user opens the app  
    Then the app displays the cached data  

Scenario 2  
Show error when user changes search settings (city, number of events).  
Given there is no internet connection  
    When the user attempts to change search settings (city, number of events)  
    Then the app displays an error message indicating the user cannot change settings without an internet connection  

### Feature 5:  Add an App Shortcut to the Home Screen

Scenario 1  
User can install the meet app as a shortcut on their device home screen.  
Given user has opend the app and wants to open the app easier the next time  
    When the user clicks on the button "Create home shortcut"  
    Then the meet app is added as a shortcut on the device's home screen  

### Feature 5:  Display Charts Visualizing Event Details

Scenario 1  
Show a chart with the number of upcoming events in each city.  
Given there are upcoming events from multiple cities  
    When the user requests to view a chart visualizing event details  
    Then the app generates and displays a chart showing the number of upcoming events in each city  


## Serverless functions
In this app, serverless functions will handle the process of authorization.
When the user opens the initial page, AWS Lambda functions contact the authorization server (Google Oauth provider), which returns the Google login page. After the user successfully logs in, the serverless functions communicate with the authorization server and receive an access token, which is then used to access the Google Calender API. 
Serverless technology will be used because it is more efficient and cost-effective than maintaining a dedicated server infrastructure.
