function randomizer() {
  return new Promise((res, rej) => {
    const isSuccess = Math.random() >= 0.5;
    
    if (isSuccess) res('Resolved');
    else rej('Rejected');
  });
}

randomizer()
  .then(res => console.log(res))
  .catch(e => console.log(e));
