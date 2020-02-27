'use strict';

// YOU KNOW WHAT TO DO //

// EXAMPLE:
// /**
//  * each: Designed to loop over a collection, Array or Object, and applies the 
//  * action Function to each value in the collection.
//  * 
//  * @param {Array or Object} collection: The collection over which to iterate.
//  * @param {Function} action: The Function to be applied to each value in the 
//  * collection
//  */
// function each(collection, action) {
//     if(Array.isArray(collection)) {
//         for(var i = 0; i < collection.length; i++) {
//             action(collection[i], i, collection);
//         }
//     } else {
//         for (var key in collection) {
//             action(collection[key], key, collection);
//         }
//     }
// }
// module.exports.each = each;


/** 
 * identity: Takes a value and returns it unchanged.
 * 
 * @param {Any Datatype} value: Can be any datatype/ value.
 * 
 * @return {Any Datatype} value: Will be the same value as our input value.
 */
 
 function identity (value) {
    return value;
}

// Export function:
module.exports.identity = identity;


/**
 * typeOf: Takes a value and returns it's data type as a string.
 * 
 * @param: {Any Datatype} value: Can be any datatype/value.
 * 
 * @return {String} string: String value will identify the type of value that 
 * is our datatype.
 */
 
 function typeOf (value) {
     if(typeof(value) === 'string') {
        return 'string';
    } else if(typeof(value) === 'number') {
        return 'number';
    } else if(typeof(value) === 'boolean') {
        return 'boolean';
    } else if(Array.isArray(value)) {
        return 'array';
    } else if (value !== null && value !== undefined && typeof(value) !== 'function') {
        return 'object';
    } else if (value === null) {
        return 'null';
    } else if (value === undefined) {
        return 'undefined';
    } else {
        return 'function';
    }
 }
 
 // Export function:
 module.exports.typeOf = typeOf;
 
 
 
 /**
  * first: Takes an array and a number. 
  *             If <array> is not an array, return [].
  *             If <number> is not given or not a number, return first element 
  *              in <array>. 
  *             Otherwise, return first <number> items of the <array>. 
  * 
  * @param {Array} collection: Collection is determined to be an array or not.
  *                     
  * @param {Number} number: Number is checked to see if it is given or if it
  *                         is a number.
  *                         If number is given, the first appearance of <number>
  *                         within <array> will be returned.
  * 
  * @return: {Value} value: Return either an empty array [], the first element
  *                         of <array>, or first <number> in <array>.
  */
  
  function first(array,number){ 
      if(!Array.isArray(array)) { 
        return [];
    } else if (isNaN(number) || number === null) { 
        return array[0];
    } else if (number < 0) { 
        return [];
    } else {
        array.splice(number,array.length);
        return array;
    }
}

// Export function: 
module.exports.first = first;


/**
 * last: Takes an array and a number.
 *             If <array> is not an array, return [].
 *             If <number> is not given or not a number, return last element 
 *              in <array>. 
 *             Otherwise, return last <number> items of the <array>. 
 * 
 * @param {Array} collection: Collection is determined to be an array or not.
 * 
 * @param {Number} number: Number is checked to see if it is given or if it
 *                         is a number.
 *                         If number is given, the last appearance of <number>
 *                         within <array> will be returned.
 * 
 * @return: {Value} value: Return either an empty array [], the last element
 *                         of <array>, or last <number> in <array>.
 *
 */

function last(array, number){
    if (!Array.isArray(array)) { 
       return []; 
   }
    if (isNaN(number) || number === null) {
    return array[array.length-1];
   } else if (number < 0) { 
       return [];
   } else if (number > array.length) { 
       return array;
   } else if (number) {
          return array.slice(array.length - number, array.length); 
   }
}

// Export function: 
module.exports.last = last;



/**
 * indexOf: Takes an array and a value.
 *                  Return the index of <array> that is the first occurence of 
 *                      <value>.
 *                  Return -1 if <value> is not in <array>.
 * 
 * @param {Array} collection: Loop through <array> to locate <value>
 * 
 * @param {Any Datatype} value: Locate the first occurence of <value> within 
 *                              <array>.
 *                              Return -1 if <value> is not in <array>
 * 
 * @return: {Number} value: Return either the index or -1.
 */
 
 function indexOf(array,value) {
     for( var i = 0; i < array.length; i++) { 
       if(array[i] === value){ 
           return i;
       } 
      }
       return -1; 
   }
   
 // Export function:
 module.exports.indexOf = indexOf;
 
 
 
 /**
  * contains: Takes an array and a value.
  *                  Return true if <array> contains <value>.
  *                  Return false otherwise. 
  * 
  * @param {Array} collection: Loops through <array> to locate <value>
  * 
  * @param {Any Datatype} value: Returns true if <array> contains <value>
  *                              Returns false if not.
  * 
  * @return {Boolean} value: Return true or false.
  */
  
  function contains(array, value) {
        let bool = false;
  for( let i = 0; i < array.length; i++) {
   array[i] === value ? bool = true :  false; 
  }
  return bool;
}

// Export function: 
module.exports.contains = contains;



/**
 * each: Takes a collection and a function.
 *                  Determines if <collection> is an array or object.
 *                      If array, call <function> with each element in array.
 *                      If object, call <function> with each element in object.
 * 
 * @param {Array or object} collection: Use an if else statement with conditions
 *                                      to determine array or object.
 *  
 * @param {Function} action: Call function invoking arguments that correlate 
 *                          within array and object.
 */
function each(collection, aFunction) {
    if(Array.isArray(collection)) { 
    for( let i = 0; i < collection.length; i++) { 
        aFunction(collection[i], i, collection); 
    }
    } else if (typeof collection === 'object') { 
        for (var key in collection) {
            aFunction(collection[key],key,collection); 
        }
    }
}

// Export function: 
module.exports.each = each; 


/**
 * unique: Takes an array and returns a new array with all duplicates removed.
 * 
 * @param: {Array} collection: Array is iterated and locates the index of each 
 *                          duplicate, eventually pushing only singular elements
 *                          to the new array.
 * 
 * @return {Array} collection: Return a new array of elements.
 */

function unique (array) {
    var newArray = []; 
    for (var i = 0; i < array.length; i++) {  
   if (indexOf(array, array[i]) === i) { 
        newArray.push(array[i]); 
    }
  return newArray;
}
}

//Export function:
module.exports.unique = unique;


/**
 * filter: Takes an array and a function. each is called to loop through array. 
 *              A function is called for each element in <array> with passing
 *              arguments.
 *              Returns a new array with all values that returned true from 
 *              calling function.
 * 
 * @param {Array} collection: Iterate through <array> by calling each function. 
 *                      
 * @param {Function} action: Invoke a function with arguments to determine which
 *                          values pass and return those values to a new array 
 *                          of true values.
 * 
 * @return {Array} collection: Return a new array of values.
 */
 
 function filter(array,aFunction) {
    var newArray = [];
      each(array,function(element, index, array){
         if (aFunction(element, index, array)) {
             newArray.push(element);
         }
});
return newArray;
}

// Export function: 
module.exports.filter = filter;


/**
 * reject:  Takes an array and a function. filter is called to loop through 
 *              array. 
 *              A function is called for each element in <array> with passing
 *              arguments.
 *              Returns a new array with all values that returned false from 
 *              calling function.
 * 
 * @param {Array} collection: Iterate through <array> by calling each function. 
 *                      
 * @param {Function} action: Invoke a function with arguments to determine which
 *                          values pass and return those values that did not 
 *                          pass to a new array of false values
 * 
 * @return {Array} collection: Return a new array of values.
 */
 
function reject(array, aFunction) {
    var falseArray = filter(array,function(element, index, collection){
        return !aFunction(element, index, collection); 
});
    return falseArray;
}
 
// Export function:
module.exports.reject = reject;


/**
 * partition: Takes an array and a function. <function> is called for each 
 *              element in <array> with passing arguments. Returns a new array 
 *              with two sub arrays. One containing truthy values, other falsy.
 * 
 * @param {Array} collection: Array is used as a parameter for reject and 
 *                              filter functions once called. Reject(falsy) 
 *                              values are pushed into one array, 
 *                              Filter(truthy) values are pushed into other 
 *                              array. 
 * 
 * @param {Function} action: function is used as parameter for filter and reject
 *                              functions when called as well.
 * 
 * @return {Array} collection: Return a new array with two sub arraty inside.
 */
 
function partition (array, fun) {
  
  var newArr =[];
  
  var truthyArr = filter(array,fun);

  var falseyArr = reject(array,fun);

 newArr.push(truthyArr); 
 newArr.push(falseyArr);

return newArr;
}

// Export function: 
module.exports.partition = partition;


/**
 * map: A function is called for each element passing in collection. The return 
 *      value is pushed into a new array.
 * 
 * @param {Array or object} collection: The collection over which to iterate.
 * 
 * @param {Function} action: Function called with arguements to determine which
 *                          pass in the collection. Return value of each function
 *                          called is saved in new array.
 * 
 * @return {Array} collection: Return a new array of elements.
 */
 
 function map(collection,aFunction) {
     
var newArray = [];

 each(collection,function(element, index, collection) {
  
     newArray.push(aFunction(element,index, collection));
});
    return newArray;
}

// Export function: 
module.exports.map = map;

/**
 * pluck:  Returns an array containing value of every property in array.
 * 
 * @param {Array} collection: Array containg objects. 
 * 
 * @param {Property} value: Property within objects of the array that is to be 
 *                          returned into a new array.
 * 
 * @return {Any Datatype} value: Return the element's property value.
 */
 
 function pluck (arrayOfObjects, property) {
   
	
return map(arrayOfObjects, function(element) { 
	 return  element[property];
});
}

// Export function: 
module.exports.pluck = pluck;


/**
 * every: A function is called for every element in a collection with passing
 *          arguments. If return value for every element is true return the 
 *          boolean value, true. If one returns false, return false.
 *          If function is not provided, return true for truthy values, 
 *          otherwise return false.
 * 
 * @param {Array or object} collection: Collection over which to iterate.
 * 
 * @param {Function} action: Function is called with arguments to determine if
 *          elements in the collection are true or false values.
 * 
 * @return {Boolean} value: Return a boolean value: true or false.
 */

function every(collection, aFunction) {
      let allPass = true;
    aFunction = aFunction || identity; 
 
  each(collection, function(e,i,c) {
    if(!aFunction(e,i,c)) { 
     allPass = false;
     } 
  });
  return allPass; 
}

// Export function: 
module.exports.every = every;


/**
 * some: A function is called for every element in a collection with passing
 *          arguments. If return value for one element is true return the 
 *          boolean value, true. If returns false for all elements, return false.
 *          If function is not provided, return true if one element has truthy 
 *          value, otherwise return false.
 * 
 * @param {Array or object} collection: Collection over which to iterate.
 * 
 * @param {Function} action: Function is called with arguments to determine if
 *          elements in the collection are true or false values.
 * 
 * @return {Boolean} value: Return a boolean value: true or false.
 */

function some (collection, aFunction) {
     let onePass = false;
    aFunction = aFunction || identity;
 
  each(collection, function(e,i,c) {
    if(aFunction(e,i,c)) {
     onePass = true;
     } else if (aFunction(e,i,c)) {
        onePass;
     }
  });
 
  return onePass;
}

// Export function: 
module.exports.some = some;


/**
 * reduce: Takes an array, a function, and a seed. Iterates through array and
 *          calls function with arguements to pass through. The values of seed 
 *          becomes the previous result for the first iteration. 
 *  
 * @param {Array} collection: The array for which to iterate.
 * 
 * @param {Function} action: Function is invoked with passing arguements.
 * 
 * @param {Seed} value: Seed equals the previous result on first iteration. Its
 *                      value will change with each iteration.
 * 
 * @return {Any Datatype} value: Return the value of final function call.
 */
 
 function reduce(array, func, seed) {
         let previousResult;
    if(seed !== undefined){
         previousResult = seed;
        each(array, function (e,i,a){
           previousResult = func(previousResult, e, i,a);
        });
    }else {
         previousResult = array[0];
        for (let i = 1; i < array.length; i++){
          previousResult = func(previousResult, array[i], i, array);
        }
    }
return previousResult;
}

// Export function: 
module.exports.reduce = reduce;


/**
 * extend: Copes propeerties from one object to another. The amount of objects
 *          pass could be infinte. i.e. no set amount of parameters.
 * 
 * @param: {Object 1} collection: Object in which will be used to copy values to. 
 *                              
 * @param: {Object 2} collection: Object in which will have values copied and 
 *                                  moved to Object 1.
 * 
 * @param: {...Object} collection: Uses a rest parameter with this object to 
 *                                  to allow for more than one argument to be
 *                                  passed through. Copy properties from here to
 *                                  Object 1.
 * 
 * @return {Object} collection: Return object 1.
 */
 
 function extend (obj1, obj2,...obj) {
     return Object.assign(obj1,obj2,...obj);
}

// Export function:
module.exports.extend = extend;
