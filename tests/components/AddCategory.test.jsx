/* eslint-disable no-undef */
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
        // screen.debug();
    });
    
    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn(); //Creamos una ssimulacion de la funcion

        render(<AddCategory onNewCategory={ onNewCategory } />);
        const input = screen.getByRole('textbox'); //obtiene el input
        const form = screen.getByRole('form'); //obtiene el formulario

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled(); // Verifica si fue llamada la funcion
        expect(onNewCategory).toHaveBeenCalledTimes(1); //Especifica las veces que se llama la funcion
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); // Verifica se se llamo la funcion con el valor del inputValue
    });
    
    test('no debe llamar onNewCAtegory si el input es vacio', () => { 
        
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);       
        expect(onNewCategory).not.toHaveBeenCalled();       
    });
});