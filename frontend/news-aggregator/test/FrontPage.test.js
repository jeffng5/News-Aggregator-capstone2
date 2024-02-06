
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FrontPage from "../src/FrontPage"
import Archive from "../src/Archive"
import ArticleCard from "../src/ArticleCard"
import ColoredLine from "../src/ColoredLine"
import ColoredLineThin from "../src/ColoredLineThin"
import Login from "../src/Login"
import Logout from "../src/Logout"
import Preferences from "../src/Preferences"
import Saved from "../src/Saved"
import SignUp from "../src/SignUp"
import Welcome from "../src/Welcome"

describe('<FrontPage />', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<FrontPage />)
      expect(wrapper).to.matchSnapshot();
  
    });
    });

describe('<Archive />', () => {
    it('should match snapshot', () => {
          const wrapper = shallow(<Archive />)
          expect(wrapper).to.matchSnapshot();
        });});

describe('<ArticleCard />', () => {
    it('should match snapshot', () => {
    const wrapper = shallow(<ArticleCard />)  
    expect(wrapper).to.matchSnapshot();
});
    });

describe('<ColoredLine />', () => {
    it('should match snapshot', () => {
    const wrapper = shallow(<ColoredLine />)  
    expect(wrapper).to.matchSnapshot();
});});

describe('<ColoredLineThin />', () => {
        it('should match snapshot', () => {
        const wrapper = shallow(<ColoredLineThin />) 
        expect(wrapper).to.matchSnapshot();
    });});

describe('<Login />', () => {
    it('should match snapshot', () => {
    const wrapper = shallow(<Login />)  
    expect(wrapper).to.matchSnapshot();
});});

describe('<Logout />', () => {
        it('should match snapshot', () => {
        const wrapper = shallow(<Logout />) 
        expect(wrapper).to.matchSnapshot();
    });});

describe('<Preferences />', () => {
            it('should match snapshot', () => {
            const wrapper = shallow(<Preferences />)
            expect(wrapper).to.matchSnapshot();
        });});

describe('<Saved />', () => {
                it('should match snapshot', () => {
                const wrapper = shallow(<Saved />)  
                expect(wrapper).to.matchSnapshot();
            });});

describe('<SignUp />', () => {
    it('should match snapshot', () => {
    const wrapper = shallow(<SignUp />)
    expect(wrapper).to.matchSnapshot();
});});

describe('<Welcome />', () => {
        it('should match snapshot', () => {
        const wrapper = shallow(<Welcome />)
        expect(wrapper).to.matchSnapshot();
    });});

