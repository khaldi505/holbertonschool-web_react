import {shallow} from 'enzyme';
import App from './App';
import React from 'react';


describe('<App />', () => {
    const wrapper = shallow(<App />);
    it('renders <App /> components without crashing', () => {
      expect(wrapper.find('.App').exists()).toBeTruthy()
    });

    it('renders Notifications components without crashing', () => {
        expect(wrapper.find('Notifications').exists()).toBeTruthy()
      });

    it('renders a Header without crashing', () =>{
        expect(wrapper.find('Header').exists()).toBeTruthy()
    });

    it('renders Login without crashing', () =>{
        expect(wrapper.find('Login').exists()).toBeTruthy()
    });

    it('renders Footer without crashing', () =>{
        expect(wrapper.find('Footer').exists()).toBeTruthy();
    });

});