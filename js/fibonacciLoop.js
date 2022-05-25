const fibonacci = (num) => {
    array = [0,1]
    for (let i = 2; i <= num; i++) {
        array.push(array[i-1] + array[i-2])
        //console.log(array)
    }
    return array[num-1]
    
}
fibonacci(7)
//module.exports = {fibonacci}
