//Promise Chaining

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1); 
        //작업 성공 시, resolve 콜백 실행
        //숫자 1을 value로 전달한다.

    }, 1000);
});

fetchNumber
.then((num) => num * 2) // 1 * 2 = 2
.then((num) => num * 3) // 2 * 3 = 6
.then((num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num - 1); //6 - 1 = 5
        }, 1000)
    });
})
.then((num) => console.log(num)); //5