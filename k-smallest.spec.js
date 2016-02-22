"use strict";

const kSmallest = require('./k-smallest');

describe('KSmallest handles bad input and',()=>{

  it('returns 0 for an empty input array', ()=>{
    expect(kSmallest([])).toEqual([0]);
  });

  it('returns 0 for an undefined input array', ()=>{
    expect(kSmallest()).toEqual([0]);
  });

  it('returns 0 for a null input array', ()=>{
    expect(kSmallest(null)).toEqual([0]);
  });
});

describe('KSmallest handles valid input and', ()=>{
  it('finds the 1 smallest number in an input array',()=>{
    const input = [4,6,1,7];
    const k = 1;
    const expected = [1];
    expect(kSmallest(input,k)).toEqual(expected);
  });

  it('finds the 3 smallest numbers in an input array',()=>{
    const input = [4,6,1,7,22,0,-3,18,2];
    const k = 3;
    const expected = [-3,0,1];
    expect(kSmallest(input,k)).toEqual(expected);
  });


});