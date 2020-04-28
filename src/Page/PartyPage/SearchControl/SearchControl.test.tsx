import * as React from 'react'
import Enzyme, { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

import SearchControl from './SearchControl';

describe('<SearchControl/> component', () => {
    it('Input value should be updated to 42', async () => {
        const component = mount(
            <MockedProvider mocks={[]} addTypename={false}>
                <SearchControl />
            </MockedProvider>
        );
        const input = component.find("input");
        input.simulate('change', { target: { value: "42" } });

        expect(input.html().includes("42")).toBeTruthy();

    })
});