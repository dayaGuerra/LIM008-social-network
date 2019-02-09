import {validation} from '../new src/mvvc-arq/lib/controller/validacion.js';
const input = 'se lo que quieras ser , se una barbie girl';
const output = ' ';
describe('validation', () => {
  it('debería ser una función', () => {
    expect(typeof validation).toBe('function');
  });
  it('deberia retornar true cuando encuentre un mensaje', () => {
    expect(validation(input)).toEqual(true);
  });
  it('deberia retornar true cuando no encuentre un mensaje', () => {
    expect(validation(output)).toEqual(false);
  });
  
});
