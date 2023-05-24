import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('pruebas en Componente <AddCategory />', () => { 
    test('debe de cambiar el valor de la caja de texto', () => {

        // 1. Se crea el sujeto de pruebas
        render(<AddCategory onNewCategory={() => {}}/>);
        // 2. Extraemos el input
        const input = screen.getByRole('textbox');
        // 3. Disparamos el evento para insertar el texto
        fireEvent.input(input, {target: {value: 'Saitama'}});
        // 4. Verififcamos lo que se espera recibir en el evento
        expect(input.value).toBe('Saitama'); //Con esta funcion evaluas si llega bien el valor del input
        screen.debug();
    })
})