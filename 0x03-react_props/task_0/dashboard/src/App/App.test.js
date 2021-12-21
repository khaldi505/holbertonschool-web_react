import {shallow} from 'enzyme';
import App from './App';
import React from 'react';


describe('<App />', () => {
    const wrapper = shallow(<App />);
    it('renders three <App /> components without crashing', () => {
      expect(wrapper.find('.App').exists()).toBeTruthy()
    });
});