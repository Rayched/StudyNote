//Promise 객체

//Producer
const Prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("성공");
        reject("실패");
    }, 3000);

    //Promise 객체 생성 시, 인자로 전달한 executor 함수 자동 실행
    //executor 내부 함수 실행하고, 작업이 성공하면 resolve를
    //작업 중 에러가 발생하면 reject를 호출한다.

    //executor는 resolve, reject 둘 중 하나는 무조건 호출해야한다.
});

//Consumer
/**
 * Promise 객체는 executor와 결과나 에러를 받을 소비 함수를 이어주는 역할을 한다.
 * 여기서 소비 함수는 '.then', '.catch', '.finally' 메서드를 사용한다.
 */

//executor에서 reject를 호출했다고 가정
//then에 함수를 하나만 전달한 상태에서는
//error가 발생한다.
//error 발생하여 reject를 호출했을 때
//어떻게 대처할 지를 정해놓지 않았기 때문이다.

/*
Prom.then(
    //작업 성공 시, resolve에 전달될 함수
    (value) => {
        console.log(value);
    },
    //error 발생 시, reject에 전달될 함수
    (error) => {
        console.log(error);
    }
);*/

//executor 내부 코드 실행 중 error가 발생하면
//executor에서 reject 콜백을 호출하는데
//이때 reject에 전달될 함수도 만들어놔야 한다.
//'.then()'의 공간 여유는 아직 더 있다.
//아니면 '.catch()' 쓰던가...

//위에 꺼는 성공 / 실패를 '.then()'에 몰아넣은 형태고
//보통은 성공은 '.then()', 실패는 '.catch()'에 넣는다.

Prom.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Finally");
});

/**
 * Promise 작업이 성공하면 resolve 호출
 *  => 성공한 경우는 '.then()'을 통해 다룬다.
 * 작업이 실패하면 reject를 호출한다.
 *  => 실패한 경우는 '.catch()'를 통해 다룬다.
 * 
 * '.finally()'는 결과에 상관없이 
 * 어떻게든 결론을 내고 싶을 때 유용한 Promise method
 * 
 * 작업에 성공해서 resolve를 호출하거나
 * 작업 도중 error가 발생해서 reject를 호출하든 상관없이 실행된다.
 */