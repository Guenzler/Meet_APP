// src/__tests__/NumberOfEvents.test.js

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE = {() => { }} />);
    });

    test('renders input field for number of events', () => {
        const numberInput = NumberOfEventsComponent.queryByRole('spinbutton');
        expect(numberInput).toBeInTheDocument();
        expect(numberInput).toHaveClass('numberOfEvents');
    });

    test('default value of input field is 32', () => {
        const numberInput = NumberOfEventsComponent.queryByRole('spinbutton');
        expect(numberInput.value).toBe('32');
    });

    test('update numberOfEvents when user types', async () => {
        const numberInput = NumberOfEventsComponent.queryByRole('spinbutton');
        const user = userEvent.setup();
        await user.type(numberInput, '{backspace}{backspace}10');
        expect(numberInput.value).toBe('10');
    });
});