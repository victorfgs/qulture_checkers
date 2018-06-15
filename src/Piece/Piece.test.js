import Piece from "./Piece";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({
    adapter:new Adapter()
})
describe('Piece class',()=>{
    it('should be an instance of Piece with all props empty',()=>{
        let _piece = new Piece();
        
    })
})