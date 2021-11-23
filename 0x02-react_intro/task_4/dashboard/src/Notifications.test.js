import Notifications from './Notifications.js';
import { shallow } from 'enzyme';


describe('<Notifications />', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(Notifications)).to.not.be.an('undefined');
});


it('renders a ``', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li').to.have.lengthOf(3));
});

it('renders a `.App-body`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
});
