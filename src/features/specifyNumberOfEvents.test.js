import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn t specified a number, 32 events are shown by default', ({ given, when, then }) => {

        let AppComponent;
        let AppDOM;
        let EventListDOM;
        let EventListItems;
        given('the list of events is displayed', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;

             // Check that the loader is present initially
             await waitFor(() => {
                expect(AppDOM.querySelector('.loader')).toBeInTheDocument();
            });

            // Wait for the loader to disappear
            await waitFor(() => {
                expect(AppDOM.querySelector('.loader')).not.toBeInTheDocument();
            });

            EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBeGreaterThan(0);
            });
        });

        when('the user has not typed in the number input field', () => {
        });

        then('the app displays 32 events by default', () => {
            expect(EventListItems.length).toBe(32);
        });
    });

    test('User can change the number of events displayed', ({ given, when, then }) => {

        let AppComponent;
        let AppDOM;
        let EventListDOM;
        let EventListItems;
        given('the list of events is displayed', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;

             // Check that the loader is present initially
             await waitFor(() => {
                expect(AppDOM.querySelector('.loader')).toBeInTheDocument();
            });

            // Wait for the loader to disappear
            await waitFor(() => {
                expect(AppDOM.querySelector('.loader')).not.toBeInTheDocument();
            });
            
            EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBeGreaterThan(0);
            });
        });

        when('the user types a number in the input field', async () => {
            const user = userEvent.setup();
            const numberInput = AppComponent.queryByRole('spinbutton');

            await user.type(numberInput, '{backspace}{backspace}10');
            expect(numberInput.value).toBe('10');
        });

        then('the app updates the number of events displayed according to the users selection', async () => {
            await waitFor(() => {
                EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(10);
            });
        });
    });
});