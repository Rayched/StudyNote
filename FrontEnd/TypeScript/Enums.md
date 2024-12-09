## Enums

- 통칭 `enum`은 서로 연관된 이름 있는 상수들의 집합을 의미한다.
- `TypeScript`가 제공하는 기능 중 하나.
- `enum` 활용하면 의도를 문서화하거나 구분되는 사례 집합을 <br/>
	좀 더 수월하게 만들 수 있다. ([공식 문서](https://www.typescriptlang.org/ko/docs/handbook/enums.html) 발췌)

- `Enumarations`의 약어로, `Enumerated Type (열거형)`라고도 부른다.
- `TypeScript`에서는 숫자와 문자열 기반의 열거형을 제공한다.

---
### 숫자 열거형 (Numeric enums)

- 아래와 같은 형식으로 정의할 수 있다.

``` ts
enum Direction {
	Up = 1,
	Down,
	Left,
	Right,
}
```

- 위의 코드에서 첫 번째로 오는 `Up`의 값을 숫자 `1` 설정하였다.
- 이에 맞춰서 뒤따라오는 `Down`, `Left`, `Right`의 값도 순서대로
- 숫자 `2, 3, 4`를 값으로 가지게 된다.

``` ts
enum Direction {
	Up,
	Down,
	Left,
	Right,
}
```

- 아니면 위의 코드처럼 `Up`의 값을 별도로 설정하지 않았다면
- 자동으로 숫자 `0`이 할당이 되고, 뒤이어 `Down`에는 숫자 `1`이 할당되고
- `Left`와 `Right`에는 각각 숫자 `3`, `4`가 할당이 된다.


- `enum`의 속성의 접근 방법은, 객체 Property에 접근하는 것과 비슷하게
- `Enum이름.속성이름` 형식으로 작성해서, `Enums`의 속성에 접근할 수 있다.

``` ts
enum Direction {
	Up,
	Down,
	Left,
	Right,
}

console.log(Direction.Up) //0
console.log(Direction.Down) //1
console.log(Direction.Left) //2
console.log(Direction.Right) //3
```


---

### 문자열 열거형 (String enums)

- 기본적인 선언 법은 동일하게 `enum Direction {...}` 식으로 작성한다.
- 단, 숫자 형과는 다르게 `String enums`는 값을 자동으로 증가하는 기능이 없기에
- 문자열 열거형을 사용할 때는 각 속성에 문자열을 전달해줘야 한다. <br/>
	(빈 문자열(`""`) 전달해도 문제는 없다.)

``` ts
enum Colors {
	c1 = "Red",
	c2 = "Green",
	c3 = "Blue",
	c4 = "",
	c5 = "",
};

console.log(Colors.c1); //"Red"
console.log(Colors.c2); //"Green"
console.log(Colors.c3); //"Blue"
console.log(Colors.c4); //""
console.log(Colors.c5); //""
```


- 숫자형 `Enums`와 문자형 `Enums`는 이론 상 혼용해서 사용할 수도 있다.
- 다만 공식 문서를 통해 알아낸 바로는 별로 권장되는 방법은 아니라고 한다.
- 그러니 그냥 가능하다는 것 정도만 알고 넘어가도록 하자.

``` ts
enum Peoples {
	Name = "James",
	Age = 25
};

console.log(Peoples.Name); //"James"
console.log(Peoples.Age); //25
```






