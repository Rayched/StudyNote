
### React Element 생성 법

- React에서 React Element를 생성하는 방법으로는 두 가지가 존재한다.
- 하나는 `JSX` 문법을 사용해서 React Element를 생성하는 방식
- 다른 하나는 `React.createElement()` 함수를 통해 React Element를 생성하는 방식이다.

---
#### `React.createElement()`

``` js
React.createElement(
	type,
	[props],
	[...children]
);
```

- 인자로 주어지는 타입 (`type`)에 따라 새로운 `React Element`를 생성하여 반환하는 함수
- `type` : `HTML` 태그 이름 (문자열), `React Component` 등이 인자로 전달된다.
- `props` : `createElement()` 결과 값인 `React Element`에 기입하는 `data` 객체 <br/>
		`id`, `class`, `style`과 같은 `HTML` 태그의 속성을 전달할 수 있다.
- `[...children]` : `React Element` 내부에 추가할 자식 요소를 전달 받는다. <br/>
				여러 개의 자식 요소를 전달하는 경우에는 `[Array]` 묶어서 전달함.

---

### `JSX`



