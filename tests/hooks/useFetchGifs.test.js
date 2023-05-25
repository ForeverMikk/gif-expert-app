/* eslint-disable no-undef */
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('probando hook useFetchGifs', () => {

    test('debe de regresar el estado inicial', () => { 

        const {result} = renderHook(() => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
        
    });
    
    test('debe de retornar un arreglo de imagenes y isLoading en False', async() => { 
        
        const {result} = renderHook(() => useFetchGifs('One Punch'));
    
        await waitFor( //espera hasta que el resultado sea mayor a 0
            () => expect(result.current.images.length).toBeGreaterThan(0),
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});