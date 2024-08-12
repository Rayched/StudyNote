
### 여는말

#### `react-router v6` 공부하게 된 계기

- 암호 화폐에 대한 정보를 보여주는 웹 페이지를 구현하는
- `Crypto Tracker` 프로젝트를 본격적으로 시작하기 전에
- `react-router` 6 버전에 대해 배워둬야 
- 앞으로 남은 React 개발 인생에서 조금이라도 수월할 것 같아서
- 조금 일찍 React Router 6 버전에 대한 공부를 시작하기로 했다.

- `Crypto Tracker` 프로젝트에서 `react`가 `18.3.1`, 최신 버전인데
- `react v16.8` 이상부터 `react-router v5.3.0`과 호환되지 않는다.
- 주어진 선택지는 두 가지였다.

```
1. react, react-dom을 16.8 이하 버전으로 재설치
2. react-router를 v5.3.0이 아닌, 최신 버전으로 설치 👈
```

- 내가 선택한 것은 2번, `react-router`를 최신 버전으로 선택하는 쪽이었다.
- `react-router`외에도 사용 중인 다른 `Library`들을 생각하면
- 괜히 `react` 버전을 낮췄다가 어떤 문제가 발생할지 모른다는 점 때문에
- 조금이라도 부담을 줄이기 위해서 `react-router`를 최신 버전으로 설치하였다.

- 아주 예전에, React 기초 강의를 들을 당시에 진행했던 Side Project
- 통칭 `MovieApp` Project에서도 `react-router`를 사용했는데
- 이때 당시에도 `v5.3.0`이 아니라 `v6`를 사용했었다.

- 물론 그땐 프로젝트 구현이 더 급했기 때문에
- 자세히 공부하지는 않았고, 프로젝트를 마치고 시간이 좀 지난 현재
- `react-router v6` 다시 사용할 때가 와버렸다.

- `react-router` `5.3.0` 버전을 써본 적은 없기 때문에
- 6 버전으로 와서 뭐가 달라졌는지는 잘 모르지만
- 그래도 본격적으로 프로젝트를 진행하기 전에 공부를 해둬야
- 나중에 막히는 부분이 조금이라도 줄어들 것 같아서

- 처음 계획과는 달리, 조금 일찍 `react-router` 6 버전에 대한 공부를 하기로 했다. 

---

### `react router dom ver6` 설치

- 아래 명령어를 입력해서 `react-router-dom` `6.4` 버전을 설치한다.

``` shell
npm install react-router-dom@6.4
```