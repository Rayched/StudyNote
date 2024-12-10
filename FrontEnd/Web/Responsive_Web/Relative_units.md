
### 상대 단위, Part 1 (`px`, `em`, `rem`)
#### `px, pixel`

- 절대 길이 단위
- 어떠한 상황에서도 동일한 값을 유지하므로, 가변성이 없다.

<img src="refImgs/use_unit_pixel.png"/>

- 위의 웹 사이트를 개발할 때, 각 요소의 크기 설정을 할 때 <br/>
	`px`로 설정을 했기 때문에 PC 환경에선 문제 없었지만 <br/>
	모바일 환경에서는 이런 식으로 나온다.

---
#### `em`, `rem`

- `em, rem`, 박스에서 텍스트 크기를 조정할 때 사용하는 상대 단위

- **`em`**
	- 부모 요소의 폰트 사이즈에 의해 자식 요소의 폰트 사이즈가 결정되는 방식
	- `em`으로 내, 외부의 여백 (`padding`, `margin`) 크기를 지정할 경우 <br/>
		자기 자신의 텍스트 크기를 기준으로 설정한다.

- **`rem`**
	- `Root + em`
	- `em`과는 다르게 `Root`의 폰트 사이즈에 의해 결정되는 방식 <br/>
		(`Root => <html> or <body>`)

---

``` html
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
	content="width=device-width, initial-scale=1.0">
	<title>Units Example</title>
	<style>
		.Outer {
			font-size: 24px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
	
			.box {
				display: flex;
				justify-content: center;
				align-items: center;        
				width: 150px;
				height: 150px;
				background-color: tomato;
				margin: 3px;
			};
		}
	
		#box1 {
			font-size: 1em;
			padding: 1em;
		}
	
		#box2 {
			font-size: 1em;
			padding: 1rem;
		}
	
		#box3 {
			font-size: 1rem;
			padding: 1em;
		}
	
		#box4 {
			font-size: 1rem;
			padding: 1rem;
		}
	</style>
</head>
<body>
	<div class="Outer">
		<div class="box" id="box1">em / em</div>
		<div class="box" id="box2">em / rem</div>
		<div class="box" id="box3">rem / em</div>
		<div class="box" id="box4">rem / rem</div>
	</div>
</body>
</html>
```

- 위의 예제를 통해서 `font-size`와 `padding` 값을 `1em / 1rem` <br/>
	조합해서 사용했을 때 어떤 변화가 발생하는 지를 확인하였다.

<img src="refImgs/units_padding_em-rem.png"/>

- `font-size`의 값을 `1em` 설정하면, 부모 요소 `outer`의 `font-size: 24px` <br/>
	자식 요소인 `box's`의 텍스트 크기가 `24px`로 설정된다.

- 반대로 `font-size: 1rem` 설정하면, `root` 요소의 텍스트 크기를 따라가는데 <br/>
		`<html>, <body>`의 `font-size` 지정하지 않았기 때문에 <br/>
		기본 값인 `16px`이 `box's`의 텍스트 크기로 결정된다.

- 그 다음 `padding` 값을 확인해보자.

- `padding`의 값을 `1em` 설정한 경우, 자식 요소의 텍스트 크기가 기준이 된다. <br/>
	즉, `font-size: 1em (==24px)`이면 `padding: 1em(==24px)`이 되고 <br/>
	`font-size: 1rem(==16px)`이면 `padding: 1em(==16px)`로 설정된다.

- 물론 `padding: 1rem` 설정했다면, 자식 요소의 `font-size`가 기준이 되지 않고 <br/>
	`root` 요소의 텍스트 크기를 따라가게 된다.

---

### 상대 단위, Part 2

- 이번에 다룰 것은 `Viewport` 기반으로 값을 계산해서
- 크기를 결정하는 가변 단위인 `vw, vh, vmin, vmax` 다뤄볼 것이다.

#### `vw / vh (viewport width / viewport height)`

- 현재 보여지는 웹 상 화면, `Viewport` 기준으로 너비와 높이를 정하는 단위

``` css
font-size: 1vw; /*Viewport 너비, 1/100*/
font-size: 1vh; /*Viewport 높이, 1/100*/
```

---
#### `vmin / vmax`

- `vmin`: `Viewport`의 너비와 높이 중 더 **작은 값** 기준으로 백분율 차지
- `vmax`: `Viewport`의 너비와 높이 중 더 **큰 값** 기준으로 백분율 차지

``` css
font-size: 1vmin; 
/*Viewport 너비와 높이 중, 더 작은 쪽의 1/100 크기 설정*/
font-size: 1vmin; 
/*Viewport 너비와 높이 중, 더 큰 쪽의 1/100 크기 설정*/
```

---
