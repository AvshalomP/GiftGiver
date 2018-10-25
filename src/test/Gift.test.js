import React from 'react';
import { shallow } from 'enzyme';
import Gift from '../components/Gift';


describe('Gift', () => {
    const gift = shallow(<Gift />);

    it('should render properly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('initializes a person and present in `state`', () => {
        expect(gift.state()).toEqual({ person: "", present: "" });
    });
});

