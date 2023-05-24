import { getGifs } from "../../src/helpers/getGifs"

describe('pruebas en el helper getGifs', () => { 
    test('debe retornar un aarreglo de gifs', async() => { 
        const gifs = await getGifs('One Punch');
        
        expect(gifs.length).toBeGreaterThan(0); //El arreglo contiene al menos un elemento
        expect(gifs[0]).toEqual({ //Esperar que el primer gis tenga la sisguiente estructura
            id: expect.any(String), // Esperas que el "id" sea un string no importa que
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})