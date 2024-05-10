// src/components/Event.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { getEvents } from '../api'; // Importing getEvents function
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';

describe('Event component', () => {
    let mockData;
    let EventComponent;

    beforeAll(async () => {
        mockData = await getEvents();
    });

    beforeEach(() => {
        EventComponent = render(<Event event={mockData[0]} />);
    })

    test('renders event title', () => {
        expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
    });
    test('renders start time', () => {
        expect(EventComponent.queryByText(mockData[0].start.dateTime)).toBeInTheDocument();
    });
    test('renders time zone', () => {
        expect(EventComponent.queryByText(mockData[0].start.timeZone)).toBeInTheDocument();
    });
    test('renders location', () => {
        expect(EventComponent.queryByText(mockData[0].location)).toBeInTheDocument();
    });
    test('renders button show details', () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

    test('event details hidden by default', () => {
        expect(EventComponent.container.querySelector('.eventDetails')).not.toBeInTheDocument();
    });

    test('shows details section when the user clicks on -show details- button', async () => {
        const user = userEvent.setup();
        await user.click(EventComponent.queryByText('show details'));

        expect(EventComponent.container.querySelector('.eventDetails')).toBeInTheDocument();
        expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
        expect(EventComponent.queryByText('show details')).not.toBeInTheDocument();
    });

    test('hide details section when the user clicks on -hide details- button', async () => {
        const user = userEvent.setup();

        await user.click(EventComponent.queryByText('show details'));

        await user.click(EventComponent.queryByText('hide details'));
        expect(EventComponent.container.querySelector('.eventDetails')).not.toBeInTheDocument();
        expect(EventComponent.queryByText('hide details')).not.toBeInTheDocument();
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

});