function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}
// decorator: 클래스가 인스턴스화 될 때 실행 X, 클래스 정의될 때 실행
@Logger
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);
