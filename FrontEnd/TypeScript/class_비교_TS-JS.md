
- `TypeScript`에서는 `private`, `public`과 같은 접근 제어자를 사용할 수 있다.
- 이를 통해서 `class`의 `Field (클래스 변수라고 생각하면 편하다..)`를 <br/>
	의도치 않은 외부에서의 접근으로부터 보호하는 것이 가능하다.

``` ts
class Player {
	constructor(
		private FirstName : string,
		private LastName: string,
		public Nickname: string
	){}
}

const Player1 = new Player("John", "Pablo", "Johny");
Player1.FirstName = "James"; //Error
```

- 위의 `TypeScript` 코드를 `JavaScript`로 변환하면 다음과 같이 나온다.
- 이후 `Player1` 객체를 만들고, `FirstName`을 `James`로 수정을 시도하면 <br/>
	Error가 발생한다. (`FirstName`은 `private`으로 지정했기 때문)
- 아래 코드는 위의 예제를 `JavaScript`로 변환한 예제이다.

``` js
class Player {
	constructor(FirstName, LastName, Nickname){
		this.FirstName = FirstName;
		this.LastName = LastName;
		this.Nickname = Nickname
	}
}

const Player1 = new Player("John", "Pablo", "Johny");
Player1.FirstName = "James";

console.log(Player1);
//{ FirstName: "James", LastName: "Pablo", Nickname: "Johny" }
```

- `private`, `public` 같은 접근 제어자를 통한 `property` 보호가 되지 않는 것을  <br/>
	위의 예제 코드를 통해서 확인할 수 있다.

-  `TypeScript`를 통해서 객체 지향 문법을 구현할 수 있다.

---

### Abstract class

``` ts
abstract class User {
	constructor(
		private FirstName : string,
		private LastName: string,
		public Nickname: string
	){}
};

class Player extends User {};

const Player1 = new Player("John", "Pablo", "Johny");
```

- `Abstract Class`, `추상 클래스`는 `추상 메서드` 가진 `class`를 가리킨다.
- 추상 클래스는 직접적으로 `Instance`의 생성은 할 수 없고 <br/>
	대신 다른 `class`에서 추상 클래스로부터 상속을 받아서 `instance`를 생성한다.

- 추상 클래스로부터 상속을 받은 하위 `class`는 추상 클래스가 가지고 있던 <br/>
	`property`와 `method`를 사용할 수 있다.

``` ts
abstract class User {
	constructor(
		private FirstName : string,
		private LastName: string,
		public Nickname: string
	){}

	getFullName(){
		return `${this.FirstName} ${this.LastName}`;
	}
};

class Player extends User {};

const Player1 = new Player("John", "Pablo", "Johny");
Player1.getFullName();
```

- 일반적인 `method` 외에도 `Abstract Method 추상 메서드`를 만들 수 있다.
- `추상 클래스` 내부에 `추상 메서드`가 존재한다면 <br/>
	이를 상속 받은 하위 `class`에서 `추상 메서드`를 완성을 해줘야 한다.

``` ts
//추상 메서드
abstract class User {
	constructor(
		protected FirstName : string,
		protected LastName: string,
		//하위 class에서 참조 불가하므로
		//private에서 protected로 변경
		public Nickname: string
	){}

	getFullName(){
		return `${this.FirstName} ${this.LastName}`;
	}

	//추상 메서드 생성
	abstract getNickname() : string;
	//코드 블럭 ('{}')은 붙이지 않는다.
	//해당 추상 메서드가 어떤 타입을 return하는지 명시해줘야 한다.
};

class Player extends User {
	//추상 class User로부터 상속을 받음.
	//User는 getNickname이라는 추상 메서드를 가지고 있으므로
	//이를 상속받은 Player class에서 해당 메서드를 완성해야 한다.
	getNickname(){
		return `${this.FirstName} ${this.LastName} / ${this.Nickname}`
	}
};

const Player1 = new Player("John", "Pablo", "Johny");
Player1.getFullName(); //John Pablo
Player1.getNickname(); //John Pablo / Johny
```


- 위의 코드를 `JavaScript`로 변환하면 다음과 같이 나온다.

``` js
class User {
    constructor(FirstName, LastName, Nickname){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Nickname = Nickname;
    }

    getFullName(){
        return `${this.FirstName} ${this.LastName}`;
    }
}

class Player extends User {
    getNickname(){
        return `${this.FirstName} ${this.LastName} / ${this.Nickname}`;
    }
}

const Player1 = new Player("John", "Pablo", "Johny");
Player1.getFullName(); //John Pablo
Player1.getNickname(); //John Pablo / Johny
```

- `Player` class가 `User` Class로부터 상속을 받는 것은 똑같지만 <br/>
	추상화와 관련된 기능이 지원되지는 않기 때문에 <br/>
	`Player` Class에사 `getNickname` 메서드를 정의하는 형태로 코드가 변환됐다.

- 위의 과정을 통해 `JavaScript`와 `TypeScript`의 `class` 문법 차이를 확인하였다.

