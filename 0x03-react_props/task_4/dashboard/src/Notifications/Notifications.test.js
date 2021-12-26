import {shallow} from 'enzyme';
import Notifications from './Notifications';
import React from 'react';

describe('<Notifications />', () => {
    it('renders <Notifications /> components without crashing', () => {
      const wrapper = shallow(<Notifications displayDrawer={false}/>);
      expect(wrapper.find('.notificationsElement').exists()).toBeTruthy()
    });
    it('renders a paragraph with a spesfic text without crashing ', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications p').text()).toMatch('Here is the list of notifications');
      });

    it('should have  3 list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications ul').children().length).toBe(3);
    })


    it('should have  3 list items', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.find('.Notifications ul').children().length).toBe(3);
  })

  it('div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    const element = wrapper.find('div.Notifications')
    const attru = element.getElement().props.style.display;
    expect(attru).toMatch("block")
  });
  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    const element = wrapper.find('div.Notifications')
    const attru = element.getElement().props.style.display;
    expect(attru).toMatch("none")
  });

  it("menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);

    expect(wrapper.find('.menuItem').exists()).toBeTruthy()
  });


  it("menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);

    expect(wrapper.find('.menuItem').exists()).toBeTruthy()
  });

});