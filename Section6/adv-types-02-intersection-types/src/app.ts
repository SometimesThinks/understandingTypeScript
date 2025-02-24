type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};
// interface version
// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
// number type 인식 cuz, 교차되는 타입 있기 때문
type Universal = Combinable & Numeric;
