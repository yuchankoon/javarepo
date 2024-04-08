//자바스크립트 변수, 자료형, 함수, 조건문, 반복문

// 변수
// -변수 종류: var, let, const
// -변수 명명규칙: 변수 이름, 규칙, 표기법
// - 연산자(Operaotr)종류 : 할당, 비교, 산술, 비트, 논리, 문자열, 조건, 쉼표, 단항, 관계, 옵셔널제이닝
// - 값 할당, 변수 호출
// - 메모리 관리, 가비지 컬렉션, 메모리 생존주기(할당, 사용..)




// 자료형
/*
-자료형 종류 : Number, BigInt, String, Boolean, 
-복합 타입: Object, Function, Array
-문자열(String) : 큰 따옴표, 작은 따옴표, 백틱
-타입 체크(typeof) : 타입 확인, 타입 변환
-객체(Object) : 
-객체 메서드 : Object.entries(), Object.keys(), 
-배열(array) : 배열 초기화(빈 배열), 요소 추가, 확장, 삭제, 길이 늘리고 줄임
-배열 메서드 : concat(), filter(), map(), slice(), sort(), splice(), forEach(), find(), join(), includes(), reduces(), push(), pop(), 그 외 array 매서드
-배열 구조분해할당 : 요소 할당, ...rest 연산자 
/*
// 함수
// - 함수 종류: 함수 서넝ㄴ식, 함수 표현식, 화살표 함수, 익명 함수, 즉시실행함수(IIFE)
// - 지역변수, 저역변수, 메섣, 매개변수(parameter), 전달인자(argument), this
// - 생성자 함수 : new 키워드, new Function(), 메서드(call, apply, bind)
// - 재귀함수
// - Class 함수 : 생성자(constructor), 속성(properties), 메서드(method), 상속(innheritance), 캡슐화(encapsulation)


// 반복문
// - 반복문 종류: for, for in, for of, while, do while, 
// - 반복문과 같이 사용되는 키워드 : break, continue, switch
// - 배열과 객체로 반복문 활용


// 조건문
// - 조건문 구분: if, else, else if, switch 
*/

let a = 'a';
const b = 'b';

let camelCase; 카멜케이스
let snake_case; 스네이크케이스
let PascalCase; 파스칼케이스
let $case1; $ 달러
let _case2; _ 밑줄

let bread = '빵';
let creamBread = '크림빵';
bread = creamBread;
console.log(bread);
console.log('첫번째 빵은 : ', bread);
console.log('두번째 빵은 ; ${bread}');