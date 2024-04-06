//Promise 예제

const workA = (value, callback) => {
    setTimeout(() => {
        callback(value);
    }, 3000);
}

const workB = (value, callback) => {
    setTimeout(() => {
        callback(value);
    }, 5000);
}

const workC = (value, callback) => {
    setTimeout(() => {
        callback(value);
    }, 1000);
}

const workD = (value, callback) => {
    callback(value);
}

workA("workA", (res) => console.log(res));
workB("workB", (res) => console.log(res));
workC("workC", (res) => console.log(res));
workD("workD", (res) => console.log(res));

//Async, Non-Blocking이므로
//작성한 순서에 상관없이 정해진 시간이 지나면
//Callback 함수가 실행된다.
//D - C - A - B