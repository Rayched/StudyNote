
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

