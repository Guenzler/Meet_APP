import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {

        let AppComponent;
        let AppDOM;
        let EventListDOM;
        given('the event list is displayed', async () => {
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
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBeGreaterThan(0);
            });

        });

        when('the user has not clicked on an event', () => {
        });

        then('the event details are collapsed by default', () => {
            expect(EventListDOM.querySelector('.eventDetails')).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;

        given('the event list is displayed', async () => {
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
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBeGreaterThan(0);
            });
        });

        when('the user clicks on an event', async () => {
            const user = userEvent.setup();
            await user.click(within(EventListDOM.firstChild).queryByText('show details'));
        });

        then('the app expands the event to display its details', () => {
            expect(EventListDOM.firstChild.querySelector('.eventDetails')).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details', ({ given, and, when, then }) => {

        let AppComponent;
        let AppDOM;
        let EventListDOM;
        given('the event list is displayed', async () => {
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
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBeGreaterThan(0);
            });

        });

        and('one event is expanded', async () => {
            const user = userEvent.setup();
            await user.click(within(EventListDOM.firstChild).queryByText('show details'));
            expect(EventListDOM.firstChild.querySelector('.eventDetails')).toBeInTheDocument();
        });

        when('the user clicks the expanded element', async () => {
            const user = userEvent.setup();
            await user.click(within(EventListDOM.firstChild).queryByText('hide details'));
        });

        then('the app collapses the event to hide its details', () => {
            expect(EventListDOM.firstChild.querySelector('.eventDetails')).not.toBeInTheDocument();
        });
    });

});