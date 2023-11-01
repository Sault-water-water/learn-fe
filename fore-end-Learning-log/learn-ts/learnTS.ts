console.log("hello ts");

const arr = ["aaa", "bbb", "ccc"];

// 推到类型不强制返回 void (返回undefined也可以,但是没什么用)
arr.forEach((item) => console.log(item));

function foo() {
  while (true) {
    console.log(";;;;;");
  }
  console.log(";;;");
}

// 3.使用元组类型

const info: [string, number, null] = ["why", 1, null];

// 函数中使用元组类型(函数的返回多个值)

function useTool(initialState: number): [number, (value: number) => void] {
  return [
    initialState,
    function (value) {
      console.log(value);
    },
  ];
}

const [number, fn] = useTool(123);

// fn('hello')
fn(123123123);

const item: number | string = "hello";

// type(类型别名)

type item = number | string;

// 类型缩小

const bar = function (argu: item): number {
  if (typeof argu === "number") return 123;
  else argu.charAt(1);
  return 654;
};

// interface 相比于 type , interface 可以继承 ,所有 interface 可扩展性更强

// 交差类型 (多重身份) zhj:Iperson & Istudent
// interface Iperson{} interface Istudent

// 类型断言 as

//  非空类型断言
// 定义接口
interface IPerson {
  name: string;
  age: number;
  friend?: {
    name: string;
  };
}

const info2: IPerson = {
  name: "why",
  age: 18,
};

// 访问属性: 可选链: ?.
console.log(info2.friend?.name);

// 属性赋值:
// 解决方案一: 类型缩小
if (info2.friend) {
  info2.friend.name = "kobe";
}

// 解决方案二: 非空类型断言(有点危险, 只有确保friend一定有值的情况, 才能使用)
info2.friend!.name = "james";

// 字面量类型
type MethcodType = "get" | "post";

// 类型缩小 in 的使用
// 4.in: 判断是否有某一个属性
interface ISwim {
  swim: () => void;
}

interface IRun {
  run: () => void;
}

function move(animal: ISwim | IRun) {
  if ("swim" in animal) {
    animal.swim();
  } else if ("run" in animal) {
    animal.run();
  }
}

const fish: ISwim = {
  swim: function () {},
};

const dog: IRun = {
  run: function () {},
};

move(fish);
move(dog);

// ts对参数的个数不校验

// 函数调用签名
// 1.函数类型表达式
type BarType = (num1: number) => number;

// 2.函数的调用签名(从对象的角度来看待这个函数, 也可以有其他属性)
interface IBar {
  name: string;
  age: number;
  // 函数可以调用: 函数调用签名
  (num1: number): number;
}

const bar0: IBar = (num1: number): number => {
  return 123;
};

bar0.name = "aaa";
bar0.age = 18;
bar(123);

// 开发中如何选择:
// 1.如果只是描述函数类型本身(函数可以被调用), 使用函数类型表达式(Function Type Expressions)
// 2.如果在描述函数作为对象可以被调用, 同时也有其他属性时, 使用函数调用签名(Call Signatures)

// ThisType
function foo2(this: { name: string }, info: { name: string }) {
  console.log(this, info);
}

type FooType = typeof foo;

// 1.ThisParameterType: 获取FooType类型中this的类型
type FooThisType = ThisParameterType<FooType>;

// 2.OmitOmitThisParameter: 删除this参数类型, 剩余的函数类型
type PureFooType = OmitThisParameter<FooType>;

// 3.ThisType: 用于绑定一个上下文的this
interface IState {
  name: string;
  age: number;
}

interface IStore {
  state: IState;
  eating: () => void;
  running: () => void;
}

const store: IStore & ThisType<IState> = {
  state: {
    name: "why",
    age: 18,
  },
  eating: function () {
    console.log(this.name);
  },
  running: function () {
    console.log(this.name);
  },
};

store.eating.call(store.state);

// 继承
interface IPerson {
  name: string;
  age: number;
}

// 可以从其他的接口中继承过来属性
// 1.减少了相同代码的重复编写
// 2.如果使用第三库, 给我们定义了一些属性
//  > 自定义一个接口, 同时你希望自定义接口拥有第三方某一个类型中所有的属性
//  > 可以使用继承来完成
interface IKun extends IPerson {
  slogan: string;
}

const ikun: IKun = {
  name: "why",
  age: 18,
  slogan: "你干嘛, 哎呦",
};

// 泛型

function bar1<T>(arg: T): T {
  return arg;
}

bar1<string>("abc");

export {};
