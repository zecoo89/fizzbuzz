for(let i=1;i<=100;i++) {
  let text = ''

  text += i % 3 === 0 ? 'Fizz' : ''
  text += i % 5 === 0 ? 'Buzz' : ''

  console.log(text ? text : i)
}
