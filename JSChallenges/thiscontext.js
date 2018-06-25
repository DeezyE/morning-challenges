

// Start with the following code:
const whatsThisThen = function (someParam) {
    console.log(this.name, someParam)
  }
  
  const ye = { name: 'Kanye' }

  
  // a) Research: call, apply and bind. Guess the output of each before running:
  
  // b) 
  // whatsThisThen()
  // My expectation: undefined
  // Actual output: undefined
  
  // c)
  // whatsThisThen('hello!')
  // My expectation: undefined, hello
  // Actual output: undefined 'hello!'
  
  // d)
  // whatsThisThen.call(ye)
  // My expectation: 'Kanye', undefined
  // Actual output: 'Kanye', undefined
  
  // e)
  // whatsThisThen.call(ye, 'hello!')
  // My expectation: 'Kanye', 'hello!'
  // Actual output: 'Kanye', 'hello!'
  
  // f)
  // whatsThisThen.apply(ye, 'hello')
  // My expectation: 'Kanye', undefined
  // Actual output: error
  
  // g)
  // whatsThisThen.apply(ye, ['hello'])
  // My expectation: 'Kanye', 'hello'
  // Actual output: 'Kanye', 'hello'
  
  // h) What does `call` do? 
  // it applies the called elements to the function
  
  // i) What's the difference between `call` and `apply`?
  // call takes a single argument, apply takes an array
  
  // j) When would you use bind?
  // when you want to bind a function to another object. So that 'this' works correctly