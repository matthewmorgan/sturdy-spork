'use strict';

module.exports = function(input, k){
  input = input || [];
  k = k || 1;

  if (input.length === 0) return [0];
  if (k === input.length) return input;
  if (k <1 | k > input.length) throw "Invalid k!";

  return input
      .sort((a,b) => a-b)
      .slice(0,k);
};