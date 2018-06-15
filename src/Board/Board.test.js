import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Board from "./Board";


describe('Board component',()=>{
    it('should render board component',()=>{
        let wrapper = shallow(<Board />);
        
    })
})