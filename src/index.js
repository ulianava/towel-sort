
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined){
    return []
  }else {
    let result =  matrix.reduce((acc, cur, i) => {
      cur.sort((a, b) => !(i % 2) ? a - b : b - a).map(e => acc.push(e));
      return acc;
    }, [])
    return result;
  }
}

