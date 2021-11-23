import App from './App.js';
import { shallow } from 'enzyme';


describe('<App />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).to.not.be.an('undefined');
    // expect(wrapper.find(App)).to.have.lengthOf(3);
});


it('renders a `.App-header`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').to.have.lengthOf(1));
});



it('renders a `.App-body`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').to.have.lengthOf(1));
});



it('renders a `.App-footer`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').to.have.lengthOf(1));
});

