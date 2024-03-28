
### NaN의 타입이 number인 이유


오늘 퇴근하고, 개발자 단톡방에 NaN이 type이 왜 number인지에 대한 issue가 있었다.
그리고 이걸 본 나는 바로 궁금해져서 찾아보기 시작했고 나름대로의 결론이 나왔기에
이거를 잊지 않기 위해서 여기에 남겨두기로 했다.

---

#### NaN의 사전적 정의

일단 NaN의 type을 체크하면 실제로 number type으로 return되는 지 확인을 해보자.

``` js
//NaN Type Check Example Source Code

let Test = "Hello" * true;

console.log(Test); //NaN
console.log(typeof Test); //number
```

위의 예제 코드를 Google Chrome 개발자 콘솔에서 실행했을 때
실제로 NaN의 Data Type이 number로 return되는 것을 확인할 수 있었다.

---

**NaN, Not a Number**

Number, 숫자가 아니라는 뜻이다.
이를 통해서 NaN의 타입이 number가 아니라 string이나 boolean 등
전혀 다른 타입이어야 할 것 같지만 실제로 NaN은 number 타입이다.

일단 NaN의 사전적인 정의를 확인해보자.

> numeric type(숫자 타입)에는 포함되지만 
> number로 정의할 수 없는 numeric type의 값이 NaN으로 출력된다.

**출저**
[Wekipedia - NaN](https://en.wikipedia.org/wiki/NaN)
[Velog - NaN(Not a Number)가 number 타입이라고?](https://velog.io/@lhj5924/JS-NaNNot-a-Number%EA%B0%80-number-%ED%83%80%EC%9E%85%EC%9D%B4%EB%9D%BC%EA%B3%A0)

Wekipedia 원문은 영어로 작성됐지만, 나는 영어와 친하지 않기에
다른 개발자 분이 velog에 정리한 글도 같이 참고하였다.

다시 본론으로 돌아와서
numeric type, 숫자 타입으로는 뭐가 있는 지 확인해보자.
- 정수 타입 (Integer Type)
- 고정 소수점 타입 (Fixed-point type)
- 부동 소수점 타입 (floating-point type)
- 비트 값 타입 (bit-value type)

NaN이 여기 타입 중 number로 정의할 수 없는 numeric type을 출력한다고 했으니
결과야 어찌됐던 NaN은 numeric 타입이라고 할 수 있다.

numeric type이라는 큰 틀이 있다면
거기서 number로 정의할 수 있는 값들과
정의할 수 없는 값들이 NaN으로 대체된다고 생각하면 되는 걸까?
결국 NaN도 numeric type, 숫자 타입에 해당된다는 것은 일단 알겠다.

이제 NaN의 return type이 왜 number로 나오는 것일까?
기본적으로 JavaScript에서 숫자는 전부 number 타입에 해당된다.
정수든, 소수든 전부 number라는 카테고리에 묶이는 것이다.

그리고 JavaScript에서 NaN이라는 결과가 나오는 경우는
총 다섯 가지가 존재한다.

- 숫자로 형변환 실패 (`parseInt("blabla)"`, `Number(undefined)`)
- 결과가 허수인 수학 계산식 (`Math.sqrt(-1)`)
- 정의할 수 없는 계산식 (`0 * Infinity`, `Infinity / Infinity`, `Infinity - Infinity`)
- 피 연산자가 `NaN` or `NaN`으로 변환되는 메서드 or 표현식
(`7 ** NaN`, `7 * "Hello"`)
- 유효하지 않은 값이 숫자로 표시되는 경우 (`new Date("Hello").getTime()`)

앞에서 제시한 예제 소스 코드에서

``` js
let Test = "Hello" * true;
```

산술 연산자 `*`의 피연산자가 `"Hello"`, `true`로 `NaN`으로 변환되기 때문에
연산 결과 값이 NaN으로 나오게 되는 것이라고 이해하면 될 것이다.

그리고 `NaN`은 JavaScript에서 정의된 것이 아니라
IEEE 754, IEEE에서 개발한 컴퓨터에서 부동 소수점 표현 규칙에서 정의된 것이다.

그렇기 때문에 numeric type, 숫자 타입에 포함되는 NaN은
JavaScript에 와서 정수, 소수 등의 모든 숫자 값을 의미하는 `number` 타입에 해당되는 것이다.
numeric type 중에서 number로 표현되지 않은 나머지 numeric type이 NaN으로 표현되므로

결국 JavaScript에서 NaN의 Data Type이 
숫자 타입인 `number`로 나오는 것은 당연한 일이라고 할 수 있을 것 같다.

---

### 마치며

나름대로 정리한다고 정리하기는 했지만
솔직히 찾아본 내용의 7할 정도는 이해하지 못했다.

지금 내 수준에서 전부 소화 시키기에는 다소 어렵기도 하고
이걸 다른 사람에게 설명하려고 해도 쉽지는 않을 것 같다...

아니다.
다른 사람에게 이걸 설명하는 건 지금 수준에서는 불가능 할 것 같다.



