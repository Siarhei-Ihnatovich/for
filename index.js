const sumOfSequence = (n) => {
  let result = 0;

  for (let i = 1; i <= n; i++){
    result +=i;
  }
  return result;
}
sumOfSequence(10);