interface Named {
  readonly name: string;
}
// readonly: 객체 초기화 시에만 값 설정 가능
interface Greetable extends Named {
  greet(phrase: string): void;
}
// 인터페이스 확장(extends) -> Named 프로퍼티 + Greetable 프로퍼티 필수
class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Max');
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);
