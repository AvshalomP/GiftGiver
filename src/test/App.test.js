import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';


describe('App', () => {
    const app = shallow(<App />);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('initializes the `state` with an empty list of gifts', () => {
       expect(app.state().gifts).toEqual([]);
    });

    describe('when clicking the `add gift` button', () => {
        it('adds a new gift to `state`', () => {
            app.find('.btn-add').simulate('click');

            expect(app.state().gifts).toEqual([{ id: 1 }]);
        });
    });
});