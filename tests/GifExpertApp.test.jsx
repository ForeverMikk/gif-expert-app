/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe('pruebas en el Componente <GifExpertApp />', () => { 
    test('debe hacer match con el snapshot', () => { 

        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();


    });
});