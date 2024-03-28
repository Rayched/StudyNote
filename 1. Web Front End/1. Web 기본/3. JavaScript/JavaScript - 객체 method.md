
# 메서드 method

아래와 같이 people, 한 사람에 대한 정보를 담은 객체가 하나 있다고 해보자.

``` js
let people = {
	name: "홍길동",
	age: 25,
	isMarried: false
};
```

객체의 프로퍼티는 '**key**'와 '**value**' 한 쌍으로 이루어져 있으며
위의 예제에서 name, age, isMarried는 한 사람의 상태를 나타낸다.

하지만 실제 현실에서 사람은 다른 사람과 대화를 하거나 
집이나 도서관에서 공부, 실내 혹은 실외에서 운동을 하는 등의 특정한 행동을 하기도 한다.

특정한 사람에 대한 정보를 담은 객체, people 객체도 
프로퍼티의 값으로 함수를 할당하는 것을 통해서 현실 사람처럼
객체가 특정한 행동을 취할 수 있게 해준다.

이때 객체 프로퍼티에 할당된 함수를 **메서드 Method**라고 한다.

---

# 메서드 만들기

``` js
let people = {
	name: "홍길동",
	age: 25,
	isMarried: false
};

people.Hello = function(){
	console.log(`안녕하세요. 저는 ${people.name}입니다.`);
};

people.Hello(); //안녕하세요. 저는 홍길동입니다.
```

위와 같이 함수 표현식 방식을 통해서 임의의 함수를 만들고
이후 people 객체의 Hello라는 Property에 함수를 할당하였다.

이제 함수 표현식, 화살표 함수에서 함수를 호출하는 것처럼
객체 Property의 Key 값에 '( )'를 붙여주는 것으로 Hello 프로퍼티에 
저장된 함수가 실행되는 것을 알 수 있다.
여기서 people 객체에 할당된 Hello가 메서드(method)라는 것을 알 수 있다.
물론 이것 말고도 미리 정의된 함수를 객체의 메서드로 추가할 수 있다.

``` js

function Hello() {
	console.log("안녕하세요.");
}

let Person = {
	name: "홍길동",
	age: 25
};

Person.hello = Hello;

Person.hello(); //안녕하세요.
```

위와 같이 앞에서 선언한 Hello 함수를 'hello'라는 key 값을 가진
Person 객체의 메서드로 추가하고, 추가한 메서드를 실행하는 것을 확인할 수 있다.

위의 두 예제처럼 이미 선언된 함수를 객체의 메서드로 추가하거나
아니면 외부에서 함수를 만든 다음에, 객체에 메서드로 추가하는 등의 방법 외에도

객체 리터럴을 할 때, 매서드를 같이 선언하는 방식도 존재한다.
``` js
let Person = {
	name: "홍길동",
	age: 30,

	Hello: function(){
		console.log("안녕하세요.");
	},

	//메서드를 선언 시, function 키워드 생략 가능
	Walking(){
		console.log("걸어갑니다.");
	}
};

Person.Hello(); //안녕하세요.
Person.Walking(); //걸어갑니다.
```

---


# `this`

``` js
const Person = {
	name: "John",
	age: 34,
	isMarried: true,

	Hello() {
		console.log("안녕하세요.");
		console.log(`저는 ${/**/}입니다.`);
	}
};

Person.Hello();
```

John이라는 사람의 정보를 Person 객체로 정리하고
자기 소개를 하는 Hello 메서드를 추가하였다.
Person 객체에 저장한 이름, name의 값을 Hello 메서드에서 출력하고자 한다.
아래와 같은 방법으로 코드를 작성하고 실행해보자.

``` js

const Person = {
	name: "John",
	Hello(){
		console.log("안녕하세요.");
		console.log(`저는 ${name}입니다.`);
	}
};

Person.Hello(); //error
```

그러면 Syntax Error가 발생하는 것을 확인할 수 있을 것이다.
Hello() 메서드에서 name은 Person 객체의 name Property가 아니라
변수 name을 가리키고, name이라는 변수가 존재하지 않기 때문에 발생하는 Error이다.

이번엔 `Person.name`으로 바꿔서 코드를 실행해보자.

``` js
const Person = {
	name: "John",
	Hello(){
		console.log(`저는 ${Person.name}입니다.`);
	}
};

Person.Hello(); //저는 John입니다.
```

**`.` 표기법**으로 `Person` 객체의 `name` 프로퍼티로 접근하는 방식을 통해
자기 소개문을 출력하는 `Hello()` 메서드를 실행시켰다.

물론 이 방식은 외부에서 선언한 변수로 객체를 참조하는 경우에
Error가 발생할 수 있기 때문에 좋은 방식은 아니다.

객체 메서드에서 객체 프로퍼티를 참조하는 또 다른 방법으로는
`this` 키워드를 활용하는 방법이 존재한다.

바로 적용해보자.

``` js
const Person = {
	name: "John",
	Hello(){
		console.log(`저는 ${this.name}입니다.`);
	}
};

Person.Hello(); //저는 John입니다.
```

`this.(Key)`
위와 같은 방식으로 메서드에서 객체 프로퍼티로 접근할 수 있다.
여기서 `this`는 객체, 외부에서 메서드를 실행할 때 사용된 객체를 의미한다.

---

# JavaScript에서 `this` 

JavaScript에서 `this` 키워드는 다른 언어와는 다른 방식으로 동작한다고 한다.
이를 확인해보기 위해서 자기 소개를 하는 함수 Hello를 만들고 실행하는 코드를
서로 다른 언어인 Java와 JavaScript로 작성해봤다.

- **Java**
``` java
public class Main {
	static void Hello(){
		System.out.println("저는 %s입니다.\n", this.name); //error
		//Cannot find Symbol (Variable 'name')
	}

	public static void main(String[] args){
		Hello();
	}
}
```

Java에서 `this`는 `class`를 기반으로 생성된 `instance`, 객체를 가리키는 키워드로
객체 메서드 내부에서 사용되며, 메서드의 매개변수와 객체의 변수의 이름이 같은 경우에
이 둘을 구분 짓기 위해 활용된다.
이제 같은 함수를 JavaScript에서 만들고, 실행까지 해보자.

- **JavaScript**
``` js
function Hello() {
	console.log(`저는 ${this.name}입니다.`);
}

Hello(); //저는 입니다.
```

Java로 작성한 코드와는 다르게 Hello 함수가 정상적으로 실행됐다.
`name`이라는 변수나 Property가 없어도 문제 없이 실행됐으며
이를 통해서 JavaScript에서 `this`는 다른 언어와는 다르게 동작 된다는 것을 알 수 있다.

그렇다면 왜 다른 언어와 달리 JavaScript에서 `this` 키워드는
객체 외부에서 사용해도 문제가 없었던 것일까?

JavaScript에서 `this`는 호출된 시점에 따라 그 용도가 달라지기 때문이다.
객체 메서드에서 `this`를 사용했다면 `this`는 해당 메서드가 들어있는 객체를 가리키게 되고
외부 함수, 전역에서 호출했다면 `this`가 가리키는 객체는 전역 객체가 된다.

Web Browser에서 전역 객체는 `window` 객체이기 때문에
전역에서 사용한 `this`는 `window` 객체를 가리키게 된다.

``` js
function Hello(){
	return this;
	//this가 참조하는 객체 === window (in Web Browser)
}

console.log(Hello() === window); //true
//Hello() 함수를 실행하면 this를 return하게 된다.
//여기서 this는 전역 객체, window 객체를 참조하므로
//'Hello() === window'의 결과가 true가 된다.
```

이번에는 각기 다른 객체에서 하나의 함수를 객체 메서드로 추가해보자.

``` js
function Hello(){
	console.log(`저는 ${this.name}입니다.`);
}

const Person1 = {
	name: "홍길동"
};

const Person2 = {
	name: "John"
};

Person1.Hello = Hello;
Person2.hello = Hello;

Person1.Hello(); //저는 홍길동입니다.
Person2.hello(); //저는 John입니다.
```

Person1, Person2 객체에 Hello 메서드를 추가하고
이를 호출했을 때 `this` 가 참조하는 대상이
메서드를 호출한 각 객체를 참조한다는 것을 알 수 있다.

- 첫 번째 `this` => `Person1` 객체
- 두 번째 `this` => `Person2` 객체

이를 통해서 `this`는 함수를 호출한 위치에 따라 
각기 다른 객체를 참조한다는 것을 알 수 있다.

- **특정 객체에서 함수 호출 시, `this` => 해당 객체**
- **전역에서 함수 호출 시, `this` => 전역 객체, `window` 객체**

