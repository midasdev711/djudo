import {ReversePipe} from './reverse.pipe';

describe('ReversePipe', () => {

  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('reverses array', () => {
    const pipe = new ReversePipe();
    const tempArr = [1, 2, 3, 4];
    const reverseArr = [4, 3, 2, 1];

    expect(pipe.transform(tempArr)).toEqual(reverseArr);
  });

});
