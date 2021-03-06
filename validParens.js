/**
 * @param {string} s
 * @return {boolean}
 */

// 650 characters
var test = '((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))'

// 2600 characters
var largerTest = '((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))((((()))))((((()))))[][{}{}{}{{{{{}}}}}][][][][][][][][][][][][][][][][[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]((((()))))((((()))))'

///////////// largerTest RUNTIMES /////////////////

// isValidOne Runtime: 2.557ms
// isValidTwo Runtime: 1.144ms
// isValidThree Runtime: 1.007ms

// Short and concise code that uses indexOf: 
var isValidOne = function(s) {
  var stack = [];
  var lib = {
    '(': ')', 
    '{': '}', 
    '[': ']'
  };

  for (var i = 0; i < s.length; i++){
    '{[('.indexOf(s[i]) > -1 && stack.push(s[i]);
    ']})'.indexOf(s[i]) > -1 && (lib[stack.pop()] !== s[i]) && (function(){return false}()); 
  };

  return stack.length === 0;
};

// Taking out the indexOf function: 
var isValidTwo = function(s){
  var stack = [];
  var lib = {
    '(': ')', 
    '{': '}', 
    '[': ']'
  };

  for (var i = 0; i < s.length; i++){
    s[i] === '{' && stack.push(s[i]);
    s[i] === '[' && stack.push(s[i]);
    s[i] === '(' && stack.push(s[i]);
    s[i] === ')' && lib[stack.pop()] !== ')' && function(){return false}();
    s[i] === '}' && lib[stack.pop()] !== '}' && function(){return false}();
    s[i] === ']' && lib[stack.pop()] !== ']' && function(){return false}();
  };

  return stack.length === 0;
}

// What many would consider messy/ugly code
var isValidThree = function(s){
  var stack = [];
  var lib = {
    '(': ')', 
    '{': '}', 
    '[': ']'
  };

  for (var i = 0; i < s.length; i++){
    if (s[i] === '{'){
      stack.push(s[i]);
    }else if (s[i] === '('){
      stack.push(s[i]);
    }else if (s[i] === '['){
      stack.push(s[i]);
    }else if (s[i] === ')'){
      if (lib[stack.pop()] !== ')'){
        return false;
      }
    }else if (s[i] === ']'){
      if (lib[stack.pop()] !== ']'){
        return false;
      }
    }else if (s[i] === '}'){
      if (lib[stack.pop()] !== '}'){
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.time('a');
isValidOne(largerTest);
console.timeEnd('a');

console.time('b');
isValidTwo(largerTest);
console.timeEnd('b');

console.time('c');
isValidThree(largerTest);
console.timeEnd('c');


// When thinking about code cleaniness versus performance, it's all about what your goal is...



