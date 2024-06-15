
- `interface`는 사용자 정의 타입을 만들 때 사용했던 `type` 키워드와 비슷한 개념이다.

``` ts
type Player = {
    name: string,
    age: number
};

type Player_LV = number;
//객체 형태 말고도 이런 식으로 일반 타입으로 지정도 가능하다.

const Player1: Player = {
    name: "홍길동",
    age: 25
}

let playerLV : Player_LV = 10;
playerLV = "15"; //error
//Player_LV type은 number 타입이므로
//string 값을 전달하려고 시도하면 error가 발생한다.
```

- `|` 키워드를 사용해서 사용자 정의 타입이 허용하는 값의 원시 타입을 <br/>
	두 개 이상 지정하거나 아니면 특정 값만 허용하도록 설정할 수 있다.

``` ts
type Team = "Red" | "Blue";
type PlayerID = number | string;

type Player = {
	name: string,
	age: number,
	team: Team,
	id: PlayerID
};

const Player1: Player = {
	name: "홍길동",
	age: 25,
	team: "Red",
	id: 123456
}

const Player2: Player = {
	name: "홍길순",
	age: 30,
	team: "Blue",
	id: "HongGilSoon"
}

const Player3: Player = {
	name: "임꺽정",
	age: 40,
	
	team: "Green", //error
	id: null //error
/**
	* 'team' prop의 type인 Team은 "Red"와 "Blue" 두 문자열 값만 허용된다.
	* 이외의 값인 "Green"을 'team' prop에 전달했기에 Error가 발생한다.

	* 'id' prop의 type인 PlayerID는 number|string 타입의 값만 허용된다.
	* 이외의 값인 null을 'id' prop에 전달했기에 Error가 발생한다.
*/
}
```


---

## `interface`로 사용자 정의 타입 생성

- `interface`는 `type` 키워드와 일부를 제외하면 거의 비슷한 역할을 한다.

``` ts
type Team = "Red" | "Blue";
type PlayerID = number | string;

interface User {
    name: string,
    age: number,
    team: Team,
    id: PlayerID
}

const player1 : User = {
    name: "홍길동",
    age: 25,
    team: "Red",
    id: 123456
};

const player2 : User = {
    name: "홍길순",
    age: 24,
    team: "Blue",
    id: "HongGilSoon"
};
```

- `type`, `interface`는 `object`의 기본적인 틀을 갖춰 놓는다는 점에서 <br/>
	거의 비슷한 역할을 하지만, `type` 쪽이 더 활용 범위가 넓다는 차이점을 가지고 있다.

- 예를 들어서 `type`은 아래와 같이 단일 값을 전달할 수 있지만 <br/>
	`interface`는 불가능하다.

``` ts
type Exam1 = string;
interface Exam2 = string; //Error
```

- `interface`는 `class` 선언할 때처럼 `interface 'name' {...}`과 같은 형태로 <br/>
	선언을 해줘야 한다.
- 각각 장/단점이 있기 때문에 그냥 취사 선택하면 된다...

- `interface` 사용해서 타입을 만들면, 아래와 같이 상속을 사용해서 <br/>
	여러 `property`를 누적하는 것이 가능하다. <br/>
	(`type` 키워드를 사용했을 때는 하지 못했던 것...)


``` ts
type TeamColor = "Red"|"Blue";

interface User {
	name: string,
	age: number,
	team : TeamColor
}

interface Player extends User {
	isMarried: boolean
}

//최종적으로 Player라는 타입은 User로부터 상속받은
//name, age, team property 외에도
//Player에서 정의한 isMarried property까지
//총 4개의 property를 정의해줘야 한다.

const Player1: Player = {
	name: "홍길동",
	age: 25,
	team: "Red",
	isMarried: false
};
```

---

### `interface`


``` ts
abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string
    ){};
    abstract Hello(name: string): string;
    abstract fullName(): string;
}

class Player extends User {
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    Hello(name: string){
        return `Hello, My name is ${name}`;
    }
}

//추상 class인 User는 직접적으로 instance를 생성할 수 없다.
//User로부터 상속받은 하위 class는 instance 생성 가능
//const A_Player = new User(); //Error
  
const A_Player = new Player("Hong", "Gil Dong");
A_Player.fullName();
A_Player.Hello("홍길동");

//JavaScript로 변한된 코드를 확인해보면
//JS에는 추상 클래스라는 개념이 존재하지 않는다는 것을 확인할 수 있다.
//TypeScript에서 Abstract class로 정의한 User class는
//JS로 변환된 코드에선 일반 class이다.

//이런식으로 TypeScript에서 추상 클래스를 사용해서
//추상화를 구현해도 변환된 js code에선 이어지지 않는다는 것이다.
//abstract class 대신 interface를 사용하면
//변환된 js code에서도 추상화가 이어지게 할 수 있다.
```

``` ts
//추상화 관점에서
//Abstract Class와 interface 비교

interface User {
    FirstName: string,
    LastName: string,
    SayHello(name: string): string,
    FullName(): string
};

//class를 상속할 때는 extends 키워드를 사용했지만
//interface를 상속할 때는 extends 대신 implements 키워드를 사용한다.

class MrHong implements User {
    //Users interface로부터 상속받았기 때문에
    //firstName, lastName property를 정의해야 하고
    //SayHello, fullName method를 완성해줘야 한다.
    constructor(
        public FirstName: string,
        public LastName: string
        //FirstName, LastName property는 interface로부터 상속 받은 것
        //interface에서 private로 property를 만들지 않았기에
        //이에 맞춰서 접근제어자를 private에서 public으로 변경해야 한다.
    ){};

    SayHello(name: string){
        return `Hello, My name is ${name}`;
    }
    
    FullName(){
        return `${this.FirstName} ${this.LastName}`;
    }
};

const player = new MrHong("Hong", "Gil Dong");
player.SayHello("홍길동");
player.FullName();

//추상 클래스를 사용했던 JS Code와
//interface를 사용했던 JS Code를 비교하면
//전자는 class를 두개 사용했지만
//후자는 class 하나에 다 들어간다는 것을 파악할 수 있다.
```

- `Java`와 같은 다른 객체 지향 언어에서도 마찬가지지만
- 기본적으로 `class` 간 상속은 `1 : 1`이다.
- 즉, 다중 상속이 안된다는 것이다.

``` ts
class Talk {
    Hello(){
        return "Hello";
    }
}

class Work {
    Working(){
        return "일을 합니다.";
    }
}

class Human extends Talk, Work {} //Error
```

- `interface`는 다중 상속이 가능하다.

``` ts
interface Talk {
    Hello(): string;
}


interface Work {
    Working(): string
}


class Human implements Talk, Work {
    Hello(){
        return "Hello";
    }
    
    Working(){
        return "Working";
    }
}
```

- `추상 class`는 `추상 method`를 가지고 있는 일반 `class`이므로 <br/>
	다중 상속이 안되지만 `interface`는 `추상 method`를 가지고 있지만 <br/>
	따져보면 껍데기일 뿐이기에 이런 식의 다중 상속이 가능하다.
- `상속`이라기 보단, `구현`에 가깝지만 말이다.

- 이에 대해서는 아래 문서를 통해서 좀 더 자세하게 공부를 해볼 필요가 있을 것 같다.

- **[`interface / TCP School`](https://www.tcpschool.com/java/java_polymorphism_interface#google_vignette)**

---
