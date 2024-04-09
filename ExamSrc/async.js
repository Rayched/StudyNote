//async와 await

/**
 * Promise를 좀 더 깔끔하게 사용할 수 있게 해주는 기법
 * 
 */

//Promise 활용해서 비동기로 사용자 이름 가져와서 출력하기
function fetchUser(){
    return new Promise((resolve, reject) => {
        resolve("Rayched");
    });
}

const userData = fetchUser();
userData.then(console.log);
console.log(userData);

//지금까지 Promise 객체를 활용해서 비동기 처리를 하는 법을 배웠다.
//이번에 배우는 것은 조금 더 간편한 방법인 
//async와 await를 활용하는 방법에 대해서다.

//'async'를 추가하면 해당 키워드 뒤에 존재하는
//함수 블록이 룰 상 'Promise'로 취급된다.
async function fetchUser2(){
    return "Rayched";
}

const userData2 = fetchUser2();
userData2.then(console.log);
console.log(userData2);

//await
//'async' 키워드가 붙은 함수에서만 사용할 수 있는 키워드
function delayTime(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

//'await' 키워드가 붙으면 호출한 함수의 작업이 끝날 때까지
//다음 작업의 처리를 기다린다..?
//보류 처리..?
async function getCamera(){
    await delayTime(1000);
    return "📷";
}

async function getNotebook(){
    await delayTime(1000);
    return "💻";
}

/*
function takeItems(){
    //Promise 중첩 Chain
    return getCamera()
    .then((item) => {
        return getNotebook()
        .then((item2) => `${item} and ${item2}`)
    });
    //Callback 지옥 코드처럼 가독성이 떨어진다.
}*/

async function takeItems(){
    //Promise 호출, 대기 동시
    //기존 코드는 Promise 두 개로부터 데이터를 가져오고
    //이를 출력하는데 약 2초 정도가 걸린다.
    //이는 너무나 비효율적이다.
    
    /*
    const Camera = await getCamera();
    const Notebook = await getNotebook();
    return `${Camera} and ${Notebook}`;
    */

    //Promise 호출, 대기 분리
    
    const cameraProm = getCamera();
    const notebookProm = getNotebook();
    const camera = await cameraProm;
    const notebook = await notebookProm;

    return `${camera}, ${notebook}`; //1초 만에 바로 결과가 나왔다.
    //Camera와 notebook Promise를 가져오는 것을 병렬적으로 처리하고
    //이를 기다렸다가 결과 값을 return한다.
    //물론 실제론 이런 식으로 코드를 작성할 필요는 없다.
    //이거보다 좀 더 나은 방법이 존재한다.
}


takeItems().then(console.log);

//3. Promise api 활용해서 좀 더 간단하게 처리하기

function pickAllItems(){
    //'Promise.all()'
    return Promise.all([getCamera(), getNotebook()])
    .then((items) => items.join(" and "));

    //'Promise.all()' 메서드에
    //Promise를 배열로 묶어서 전달
    //전달한 Promise 배열을 실행해서 데이터를 가져온다.
}

pickAllItems().then(console.log);

//'Promise.race()'
//제일 먼저 전달된 Promise의 데이터만 출력하는 api
//1등으로 도착한 Promise만 출력한다고 생각하면 된다.

function PromiseRace(){
    return Promise.race([getCamera(), getNotebook()]);
}

PromiseRace().then(console.log);