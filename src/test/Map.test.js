import React from 'react'
import { shallow ,render, mount} from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HistoryVideoForm from "../Components/HistoryVideoForm"
import MainNav from "../Components/MainNav";
import App from "../App";

configure({ adapter: new Adapter() });

const setupApp = () => {
    const props = {
        onAddClick: jest.fn()
    };
    const wrapper = shallow(<App {...props} />);
    return {
        props,
        wrapper
    }
};

describe('<HistoryVideoForm />', () => {
    it('Component should be render', () => {
        expect(shallow(<HistoryVideoForm />).find('Grid').exists());
    });
    it('render', () => {
        const wrapper = render(<HistoryVideoForm />);
        expect(wrapper.find('div')).toHaveLength(9);
    });
    it('allows us to set props', () => {
        const wrapper = mount(<HistoryVideoForm bar="baz"/>);
        expect(wrapper.props().bar).toBe('baz');
        wrapper.setProps({ bar: 'foo' });
        expect(wrapper.props().bar).toBe('foo');
    });
});

describe('<MainNav />', () => {
    it('Component should be render', () => {
        expect(shallow(<MainNav />).find('Grid').exists());
    });
    it('allows us to set props', () => {
        const wrapper = mount(<MainNav bar="baz"/>);
        expect(wrapper.props().bar).toBe('baz');
        wrapper.setProps({ bar: 'foo' });
        expect(wrapper.props().bar).toBe('foo');
    });
});

