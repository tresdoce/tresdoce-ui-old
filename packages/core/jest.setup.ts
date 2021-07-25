import "@testing-library/jest-dom";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.console.log = jest.fn()
global.console.error = jest.fn()
global.console.warn = jest.fn()

jest.setTimeout(30000);

expect.extend({
  toBeTypeOrNull(received, classTypeOrNull) {
    try {
      expect(received).toEqual(expect.any(classTypeOrNull));
      return {
        message: () => `Ok`,
        pass: true,
      };
    } catch (error) {
      return received === null
        ? {
          message: () => `Ok`,
          pass: true,
        }
        : {
          message: () => `expected ${received} to be ${classTypeOrNull} type or null`,
          pass: false,
        };
    }
  },
});
