//Primitive & Non-Primitive
// string number boolen null undefined
// array object number enums

let newName: string = "Manel";
newName = "Emmanuel";

let isAdmin: boolean = true;
isAdmin = false;

//Typescript Object
const Food: {
  name: string;
  color: string;
  qty: number;
  price: number | string;
  inStock?: boolean;
} = {
  name: "plantain",
  color: "red",
  qty: 9,
  price: "#90",
  //   inStock: true,
};
Food.color = "yellow";
// console.log(Food);

//Tuple
let form: [string, string, string, number] = ["Amadi", "Joe", "Mike", 23];
// console.log(form);

//Typescript Class
class set05 {
  name: string;
  color: string;
  qty: number;
  price: number;
  inStock?: boolean;
  constructor(
    name: string,
    color: string,
    qty: number,
    price: number,
    inStock?: boolean
  ) {
    this.name = name;
    this.color = color;
    this.qty = qty;
    this.price = price;
    this.inStock = inStock;
  }
  review() {
    // console.log(newClass);
  }
}

const newClass = new set05("Plantain", "Green", 21, 90, true);
newClass.review();

class codeLab {
  name: string;
  set: string;
  year: number;
  students: number;
  best: boolean;
  constructor(
    name: string,
    set: string,
    year: number,
    students: number,
    best: boolean
  ) {
    this.name = name;
    this.set = set;
    this.year = year;
    this.students = students;
    this.best = best;
  }
  newLab() {
    // console.log(newCodelab);
  }
}
const newCodelab = new codeLab("CodeLab", "set05", 2021, 16, true);
newCodelab.newLab();

const Fruit: {
  name: string;
  color: string;
  qty: number;
  instock: boolean;
} = {
  name: "iphone 7",
  color: "silver",
  qty: 5,
  instock: false,
};

Fruit.name = "iphone X";
// console.log(Fruit);

//Typescript Array
let myArray: (string | number | boolean | null)[] = [
  "john",
  34,
  true,
  "obi",
  null,
];
// console.log(myArray);

// let arr : any[]= ["osas","sam","dera",90,true]
let things: (string | number | null)[] = [
  "joe",
  "Amadi",
  23,
  null,
  45,
  "Manel",
];
things[6] = "Good";
things[7] = "Man";
things[8] = "Bald";
things.push("Papa");
// console.log(things);

let arr: (string | number | boolean | null)[] = [
  "osas",
  "sam",
  "dera",
  null,
  90,
  true,
];
arr[1] = "Gideon";
arr.push("Manel");

// console.log(arr);

let arr2: [number, number, number, string] = [1, 4, 6, "Papa"];
arr2.push(45);
// console.log(arr2);
// console.log(arr2[1]);

type movie = {
  name: string;
  year: number;
  interesting: boolean;
  series: boolean;
};

interface Movie extends movie {
  subtitle: boolean[];
}

interface film extends Movie {
  language: string;
}

let Theatre: film = {
  name: "Alcheamy of souls",
  year: 2022,
  interesting: true,
  series: true,
  subtitle: [true],
  language: "Korea",
};
// console.log(Theatre);

type myStuff = {
  name: string;
  set: string;
  year: number;
  students: number;
  best: boolean;
  pagination: number | string;
};

interface stuffs extends myStuff {
  user: string[];
}

interface stuff extends stuffs {
  fundraise: boolean[];
}

let schools: stuff = {
  name: "CodeLab",
  set: "set05",
  year: 2021,
  students: 16,
  best: true,
  pagination: 2,
  user: ["Mike"],
  fundraise: [true],
};
// console.log(schools);

type myData = {
  name: string;
  color: string;
  qty: number;
  instock?: boolean;
  pagination: number | string;
  user: string[];
};
type newData = {
  user: string[];
};

interface Manel extends myData {
  user: any[];
}
interface Dix extends Manel {
  version: number;
}

let stock: Dix = {
  name: "iphone 7",
  color: "silver",
  qty: 5,
  pagination: 2,
  user: ["Mike"],
  version: 15.6,
  // instock: false,
};
// console.log(stock);

let school: string = "CodeLab";
let institute = school.split("");
let institution = institute.reverse().join();
console.log(institution);

const newSchool = (x: string): string => {
  let xx: string[] = x.split("");
  let newFile: string = xx.reverse().join("");
  return newFile;
};
// newInstitute("Manel");

const newnumber = (j: string): number => {
  let aa: string[] = j.split("");
  let final: number = parseInt(aa.reverse().join(""));
  return final;
};

const getData = (x: any[]) => {
  let index = Math.floor(Math.random() * x.length);
  let d = x[index];
  //   console.log(d);
};
getData([1, 4, 6, 9, 0]);

//Generics
const getDatas = <Arr>(x: Arr[]): void => {
  let index = Math.floor(Math.random() * x.length);
  let d = x[index];
  console.log(d);
};
const arrs = [1, 4, 6, 9, 0];
const arres = ["joe", "mike", "manel", "dera"];
// getDatas(arres);

class myName {
  public name: string;
  protected color: string;
  public ripe: boolean;
  private qty: number;
  static sold: boolean;
  constructor(name: string, color: string, ripe: boolean, qty: number) {
    this.name = name;
    this.color = color;
    this.ripe = ripe;
    this.qty = qty;
  }
  review() {
    // console.log( `Unripe ${this.name} is ${this.color} in color and has a quantity of ${this.qty}`   );
  }
}

const newBuild = new myName("pawpaw", "green", false, 11);
newBuild.review();
newBuild.name;

myName.sold;

// console.log(newBuild.ripe);
// console.log(newBuild);

enum Game {
  peter = "Oti",
  john = "Kennedy",
  james = "Joseph",
  dix = "Manel",
}

// console.log(Game);

class Devs {
  constructor() {}
}

//Class
class Trial {
  public country: string;
  state: string;
  Lga: string;
  town: string;
  family: string;
  total: number;
  constructor(
    country: string,
    state: string,
    Lga: string,
    town: string,
    family: string,
    total: number
  ) {
    this.country = country;
    this.state = state;
    this.Lga = Lga;
    this.town = town;
    this.family = family;
    this.total = total;
  }
  Niga() {
    // console.log(newTrial);
  }
}
const newTrial = new Trial(
  "Nigeria",
  "Enugu",
  "Ezeagu",
  "Akama-oghe",
  "Onyegwu",
  34
);
newTrial.Niga();
newTrial.country;
// console.log(newTrial.country);

// Tuple
let wow: [string, string, number, boolean] = ["MAn", "Woman", 23, true];
// console.log(wow);

//array
let Man: (string | string | boolean | number)[] = ["MAnel", "Dix", false, 14];
Man.push("Manel");
Man[2] = "new";
// console.log(Man);

//type and interface
type Me = {
  name: string;
  age: number;
};
interface emi extends Me {
  tall: boolean[];
}
let Muwa: emi = {
  name: "Manel",
  age: 18,
  tall: [false],
};

// console.log(Muwa);

//Object
let myObject: {
  name: string;
  age: number;
} = {
  name: "Manel",
  age: 18,
};
// console.log(myObject);

//enum
enum Games {
  Manel = "dix",
  Eze = "Emmanuel",
}
// console.log(Games);

//Generics
const Geerics = <wow>(x: wow[]) => {
  let dix = Math.floor(Math.random() * x.length);
  let nat = x[dix];
  console.log(nat);
};
const arx = [1, 2, 3, 3, 4, 4, 5];
const arrx = ["joe", "mike", "manel", "dera"];
Geerics(arx);

class Students {
  name: string;
  color: string;
  height: number;
  short: boolean;
  weight: number;
  person: any[];
  constructor(
    name: string,
    color: string,
    height: number,
    short: boolean,
    weight: number,
    person: any[]
  ) {
    this.name = name;
    this.color = color;
    this.height = height;
    this.short = short;
    this.weight = weight;
    this.person = person;
  }
  added() {
    console.log(newStudent);
  }
}

const newStudent = new Students("John", "black", 15, true, 56, ["Man"]);
newStudent.added();
