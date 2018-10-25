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

   describe('when typing into the person input', () => {
      const person = 'Uncle';

      beforeEach(() => {
          gift.find('.input-person').simulate('change', { target: { name: "person", value: person } });
      });

      it('updates the person in `state`', () => {
          expect(gift.state().person).toEqual(person);
      })
   });

   describe('when typing into the present input', () => {
      const present = 'Wine';

      beforeEach(() => {
         gift.find('.input-present').simulate('change', { target: { name: "present", value: present} });
      });

      it('updates the present in `state`', () => {
          expect(gift.state().present).toEqual(present);
      });
   });
});

