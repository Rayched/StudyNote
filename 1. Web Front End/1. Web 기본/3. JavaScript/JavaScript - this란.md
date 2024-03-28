
## 개요

이전 게시글, JavaScript 객체 게시 글에서 메서드를 생성하고, 사용하는 것까지 다뤘었다.
하지만 메서드에서 객체 Property를 참조할 수 있는 방법에 대해서는 다루지 않았었다.
이번에 다룰 것은 메서드에서 객체 Property를 참조하려고 할 때 
사용되는 `this` 키워드에 관한 것이다.

---

일단 간단한 코드를 하나 작성해보자.
'**홍길동 (25세)**'이라는 사람의 정보를 객체에 담고
해당 정보를 console에 출력하는 Info 메서드를 만들고 이를 실행해보자.

``` js
const Person = {
	name: "홍길동",
	age: 25,
	
	Info(){
		console.log(`이름: ${name}`);
		console.log(`나이: ${age}`);
	}
};

Person.Info(); //error
```

위의 소스 코드를 실행하면 Syntax Error가 발생한다.
이번에는 점 표기법을 활용해서 Person 객체의 name, age Property에 접근해보자.

``` js
const Person = {
	name: "홍길동",
	age: 25,

	Info: function(){
		console.log(`이름: ${Person.name}`);
		console.log(`나이: ${Person.age}`);
	}
};

Person.Info();
```

![[Pasted image 20231024162736.png]]

이렇게 하면 Person 객체의 `name`, `age` Property에 접근할 수 있지만
`Info` 메서드가 객체 리터럴 단계에서 선언되지 않고
외부에서 선언한 함수로 할당됐다면 예기치 못한 Error가 발생할 수도 있다.

예를 들어서 '홍길동'이라는 사람의 정보 외에도
'John'이라는 사람의 정보도 객체에 담고, 이를 출력하는 함수를
각 객체의 메서드로 추가해야 한다고 가정해보자.

``` js
//점 표기법 예제 

const Person1 = {
	name: "홍길동",
	age: 25
};

const Person2 = {
	name: "John",
	age: 30
};

function PersonInfo(){
	//객체에 저장된 사람의 정보(이름, 나이)를
	//console에 출력하는 PersonInfo 함수
	console.log(Person1.name);
	console.log(Person1.age);
}

function PersonInfo2(){
	console.log(Person2.name);
	console.log(Person2.age);
}

Person1.Info = PersonInfo;
Person1.Info();

Person2.Info = PersonInfo2;
Person2.Info();
```

앞에서 제시한 방법(점 표기법)으로는 '홍길동'의 정보만 출력할 수 있기 때문에
'John'의 정보를 출력하는 함수도 따로 만들고, 해당 객체의 메서드로 추가해줘야 한다.
이러면 사실 상 같은 기능을 하는 함수를 두 개나 만들어야 한다.
상당히 번거롭기도 하고, 중복된 기능을 가진 함수가 존재하니 별로 효율적이지도 못하다.

그러면 이번에는 `this` 키워드를 사용해서 객체 Property에 접근해보자.

``` js
//this 키워드를 통해서 객체 Property에 접근한다.

const Person1 = {
	name: "홍길동",
	age: 25
};

const Person2 = {
	name: 'John',
	age: 30
};

function PersonInfo() {
	console.log(`이름 : ${this.name}`);
	console.log(`나이 : ${this.age}`);
};

Person1.Info = PersonInfo;
Person2.Info = PersonInfo;

Person1.Info();
Person2.Info();

/*
	이름 : 홍길동
	나이 : 25
	
	이름 : John
	나이 : 30
*/
```

같은 기능을 하는 함수를 추가할 필요 없이 각 객체의 `name`, `age` Property로 
접근하는 것을 위의 출력 결과를 통해 확인할 수 있다.


---

``` js
//test Code
//객체 메서드가 점 표기법으로 Property로 접근
//객체를 특정 변수에 저장하고, 해당 객체를 다른 값으로 수정한 뒤
//객체 메서드를 실행하려고 할 경우

let Person = {
	name: "홍길동",
	age: 25,

	InfoPrint() {
		console.log(`이름 : ${Person.name}`);
		console.log(`나이 : ${Person.age}`);
	}
};

let ObjBox = Person;
Person = null;
ObjBox.InfoPrint();
```

``` js
//test Code
//객체 메서드가 this.(Key)로 객체 Property로 접근한다.

//이후 객체를 특정 변수에 저장하고
//해당 객체를 다른 값으로 수정한 뒤
//객체 메서드를 실행하려고 하면 어떤 일이 발생할 지에 대한 테스트

let Person = {
	name: "홍길동",
	age: 25,

	InfoPrint() {
		console.log(`이름 : ${this.name}`);
		console.log(`나이 : ${this.age}`);
	}
};

let ObjBox = Person;
Person = null;
ObjBox.InfoPrint();
```

``` js

//전역으로 사용한 this가 window 객체를 참조하는 것이
//참인지 검증하는 예제

function TestFunc(){
	return this;
}

let A = window;
let B = TestFunc();

console.log("전역으로 사용한 this가 window 객체를 참조하는 지 검증");
console.log(A == B); //??
console.log(A === B); //??
```