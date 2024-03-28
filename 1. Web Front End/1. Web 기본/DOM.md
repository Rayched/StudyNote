
## DOM이란 무엇인가?

- DOM == Document Object Model
- 이를 직역하자면 '문서 객체 모델'이라는 뜻이 나온다.
- DOM은 `HTML`, `XML` 작성된 문서를 구조화하여 `JavaScript`와 같은 프로그래밍 언어가
	해당 문서에 접근해서 문서의 구조, 스타일, 내용 등을 변경할 수 있게 해주는
	일종의 프로그래밍 `interface`이다.

``` html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>예제</title>
	</head>
	<body>
		<h4>아래 버튼을 클릭해보세요. 👇</h4>
		<button onclick="alert('Hello')">Click !</button> 
	</body>
</html>
```

- 위와 같은 `HTML` 문서를 웹 브라우저에서 열면, 해당 브라우저 엔진이
	해당 `HTML` 문서의 코드를 해석하고, 아래와 같은 DOM Tree를 생성한다.

[예제 코드 DOM 트리 이미지]()

```
HTML 문서가 브라우저에 랜더링되는 과정

1. DOM, CSSOM 트리 생성
	- 브라우저를 통해 웹 사이트에 접속하면, 서버로부터 HTML, CSS 등
	  웹 사이트를 랜더링하는데 필요한 리소스를 다운로드 받는다.
	- 이후 HTML 코드는 DOM, CSS 코드는 CSSOM 트리로 변환한다.
	
	(1). DOM 트리 생성
	 - 변환
		 - 브라우저가 HTML의 원시 Byte를 읽어와서, HTML 문서에서 정의된
		   인코딩 방식에 따라 개별 문자로 반환한다.
		   ('utf-8'로 지정했다면, utf-8의 형태로 반환한다.)
	 - 토큰화
		 - 브라우저가 반환된 문자열을 W3C 표준에 지정된 고유 토큰으로 변환한다.
	 - 렉싱
		 - 변환된 토큰은 해당 속성 및 규칙을 정의하는 객체, Object의 형태로 변환
	 - DOM 생성
		 - 마지막으로 HTML 문서에 정의된 여러 태그 간의 관계를 참고해서
		   트리 데이터 구조로 연결시킨다.

	(2). CSSOM Tree 생성
	 - DOM Tree 생성 과정과 마찬가지의 과정을 거친다.
	 - '변환' - '토큰화' - '렉싱' - CSSOM Tree 생성

2. 랜더링 트리 생성
	- DOM 트리와 CSSOM 트리가 만들어진 다음에
	  이 둘을 이용해서 Render Tree를 생성한다.
	- 요소들의 구조와 텍스트만 존재하던 DOM Tree와 달리
	  Render Tree는 CSSOM 트리도 가지고 있기에 style 정보가 설정됐으며
	  실제 웹 브라우저 화면에 표시되는 node들로만 구성된다.

3. Layout
	- Layout 단계에서는 브라우저의 Viewport 내에서
	  각 node들의 정확한 위치와 크기를 계산한다.
	  그리고 계산한 위치와 크기를 바탕으로 Box Model이 반환된다.
	  
	- Viewport => 그래픽이 표시되는 브라우저의 영역, 크기
				  모바일 환경에서는 핸드폰 디스플레이의 크기
				  PC 환경에서는 브라우저 창의 크기에 따라 달라진다.
				  
	- 본론으로 돌아와서, 위의 과정으로 생성된 Render Tree의 node들이
	  가진 style과 속성에 따라서 브라우저 화면에서
	  "어느 위치에 표시하고, 어느 정도의 크기로 출력할지"를 계산하는 단계이다.

4. Paint
	- Layout 계산이 완료가 된 요소들을 실제 브라우저 화면에 표시한다.
	- 이전 단계에서 Render Tree의 각 node의 위치, 크기, 색상 등의 style의
	  계산이 완료가 됐기 때문에 이를 바탕으로 브라우저 화면의 실 px로 변환
	- 변환이 완료된 요소들을 웹 브라우저 화면에 출력한다.
	- 단, 처리해야 하는 style이 복잡할수록 (그라데이션 효과나 그림자 효과 등)
	  Paint 단계에서 소요되는 시간이 늘어나게 된다.
```

#### 브라우저 Rendering 과정 Reference

- [브라우저의 랜더링 과정 / Medium 개발자의 품격](https://medium.com/%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98%ED%92%88%EA%B2%A9/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95-5c01c4158ce)
- [브라우저 랜더링 과정 / Front Study](https://hangem-study.readthedocs.io/en/latest/front_interview/browser-rendering/)
---

