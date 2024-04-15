
### 2023.11.15 수요일

- `React`는 우리가 개발한 웹 사이트가 사용자인 우리와 상호작용을 할 수 있게 해준다.

- `Button`과 `text`만 있는 웹 페이지가 하나 있다고 가정
- 버튼을 클릭할 때마다 웹 페이지의 텍스트가 변경돼야 한다.
- 예를 들면, 버튼 클릭 횟수를 텍스트로 보여주는 식으로...

- **`HTML`, `JavaScript` 만을 사용해서 구현한 코드**
``` HTML
<head>
    <meta charset="UTF-8">
    <title>HTML, VanillaJs Only</title>
</head>

<body>
    <!-- 버튼, 버튼 클릭 횟수를 기록하는 텍스트 -->
    <div>
        <button id="ClickBtn">Click</button>
        <button id="ResetBtn">Reset</button>
    </div>
    <br/>
    <div id="BtnClickCount">
        버튼 클릭 횟수: 0
    </div>
    <script src="/React/index.js"></script>
</body>
</html>
```

``` js
//버튼을 클릭하면, 내가 클릭한 횟수를 기록하고
//리셋 버튼을 클릭하면, 클릭한 횟수가 초기화되는 코드

const BtnClick = document.getElementById("ClickBtn");
const BtnCounter = document.getElementById("BtnClickCount");
const ResetBtn = document.getElementById("ResetBtn");

let BtnClickCounter = 0;

//버튼 클릭 횟수를 HTML에 표시하는 함수
const ClickCount = () => {
    BtnClickCounter = BtnClickCounter + 1;
    BtnCounter.innerText = `버튼 클릭 횟수 : ${BtnClickCounter}`;
};

//버튼 클릭 횟수를 초기화하는 함수
const CountReset = () => {
    alert("Reset");
    BtnClickCounter = 0;
    BtnCounter.innerText = `버튼 클릭 횟수 : ${BtnClickCounter}`;
}

BtnClick.addEventListener("click", HandleClick);
ResetBtn.addEventListener("click", CountReset);

//HTML에서 버튼 2개와 텍스트를 표시할 요소를 만들고
//이를 index.js 파일에서 dom 객체로 가져오고
//버튼 click을 감지하면, Callback으로 전달된 함수 실행
```

`React`를 사용하지 않고, `HTML`, `JavaScript`만으로 구현, 시간이 좀 걸렸다.

> HTML 문서에 버튼 2개 (Click, Reset)와 클릭 횟수를 보여줄 요소 (`div`) 생성

> `index.js`에서 버튼 2개와 `div` 요소를 DOM 객체의 형태로 가져온다.

> 버튼 클릭에 반응해서 실행될 함수 두 개를 만들고 (`ClickCount`, `CountReset`)
> 이를 `addEventListener()` 함수를 통해 실행한다.

---

- `html` 파일에 `react` 추가
- [웹사이트에 React 추가 (React 공식 문서)](https://ko.legacy.reactjs.org/docs/add-react-to-a-website.html)
- 아래 두 개의 `<script>` 태그를 `html` 파일에 추가한다.

``` html
<script src="https://unpkg.com/react@18/umd/react.development.js">
</script>

<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```


- `Javascript` 활용해서 HTML Element 생성하고, `html` 파일에 반영

``` html
<html>
<head>
    <meta charset="UTF-8">
    <title>ReactJS로 HTML Element 생성</title>
</head>
<body>
    <div id="box"></div>
</body>
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script>
    const ElementBox = document.getElementById("box");
    const ClickCount = React.createElement(
        "span",
        { id: "span_exam",
            style: { color: "white", "background-color": "black" } 
         },
        "span element"
    );

    ReactDOM.render(ClickCount, ElementBox);
</script>
</html>
```

- `html` 문서에서 `id="box"`인  `<div>` 요소를 `<script>` 요소 내부로 가져오기
- `React.createElement()` `method` 통해 HTML Element (`<span>`) 생성.
- 이후 `document.getElementById()` `method` 통해 가져온 `<div>` 요소 내부에
   방금 전 생성했던 `<span>` Element를 추가한다.
   `ReactDOM.render()` method를 통해서 `<div>` 내부에 `<span>` 요소를 추가한다.
- 개발자 Console에서 `<div id="box">`  내부에  `<span id="span_exam">`가
   문제 없이 정상적으로 추가된 것을 확인할 수 있다.

---

### `React.createElement()`

``` js
React.createElement(
 type, [property], [child]
);
```

- 인자로 주어지는 `type`에 따라 새로운  `HTML Element (React Element)`를 
   return하는 `React method`이다.
- 매개변수 목록
	- `type`
		- `HTML`의 태그 (`<p>, <div>, <span>, ...`)를 인자로 전달 받는다.
		- `React Component`, `React Fragment` 타입의 값도 인자로 전달 받을 수 있음.
		
	- `[property]`
		- `React Component`에 넣어주는 `data` 객체
		- 보통은 `HTML`의 `id`, `class`, `style`과 같은 `HTML Attribute (속성)`을
		   명시해준다.
	
	- `[child]`
		- `React.createElement()`로 생성한 `Element`에 추가할 자식 요소 명시

---

### `ReactDOM.render()`

``` js
const ElementBox = document.getElementById("box");
//<div id="box"></div>
const span = React.createElement("span");

ReactDOM.render(span, ElementBox);
/*ReactDOM.render('추가할 요소', '상위 요소')*/
```

- 기존 `HTML` 태그에 인자로 전달된 요소 (`React.createElement()`로 만든 `Element`)를
   추가하는 함수
- `createElement()`의 반환 값인 `Element`를 참조할 수 있는 변수 (예제: `span`)와
   기존 `HTML` 요소 안에 추가하고 싶다면 `DOM Object`로 가져온 `HTML Element`를
   참조할 수 있는 변수의 이름을 명시하면 새로 생성된 `Element`, `<span>` 요소가
   기존 `HTML`의 요소인 `<div id="box"></div>` 내부에 추가된다.
- `ReactDOM.render()` 함수 자체가 기존 `HTML` 요소 내부에 새로 생성한 `Element`를
   추가하기 위한 목적이라고 보는 게 일단 맞을 것 같다.

- 참고한 문서
	- [render() 함수 (Tistory Blog)](https://minjoo-space.tistory.com/39)