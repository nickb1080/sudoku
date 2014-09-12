"use strict";

function unique ( arr ) {
  return arr.reduce( function ( result, item ) {
    if ( result.indexOf( item ) === -1 ) {
      result.push( item );
    }
    return result;
  }, [] );
}

// http://jsperf.com/push-flatten-vs-concat-flatten
// flattening with push.apply is faster than .concat
function flatten ( arr ) {
  return arr.reduce( function ( result, item ) {
    [].push.apply( result, Array.isArray( item ) ? flatten( item ) : [ item ] );
    return result;
  }, [] );
}

function identity ( obj ) {
  return obj;
}

function validValue ( value ) {
  return (
    Number( value ) === value &&
    value % 1 === 0 &&
    value > 0 &&
    value < 10
  ) || value === null;
}

function demethodize ( method ) {
  return Function.prototype.call.bind( method );
}

function demethodizeOne ( method ) {
  return function ( arg ) {
    return method.call( arg );
  };
}

function opposite ( value ) {
  return !value;
}

function addArrays ( arr1, arr2 ) {
  return arr1.map( function ( item, i ) {
    return item + arr2[i];
  });
}

module.exports = {
  unique: unique,
  flatten: flatten,
  identity: identity,
  opposite: opposite,
  validValue: validValue,
  sliceOne: demethodizeOne( [].slice ),
  slice: demethodize( [].slice ),
  addArrays: addArrays
};
