//interface와 type알리야스는 비슷하여 한놈만 일관성있게 쓰면됨
interface Shape {
    getArea(): number;
}

type Person = {//타입 별칭
    name: string,
    age?:number,
}
interface Developer extends Person {
    skills:string[]
}
const person:Person = {
    name:'Lee',
    age:20,
}
const expert:Developer = {
    name:'kim',
    skills:['typescript']
}

type People = Person[]
const people:People = [person, expert]

type Color = 'red' | 'orange'
const col:Color = 'orange'

class Circle implements Shape{//implements: 조건에 부합한다.
    // radius:number;

    // constructor(radius:number){
    //     this.radius = radius
    // }


    constructor(public radius:number){//밖에서 radius조회가능
    }

    getArea(): number {
        return 5
    }
}

class Rectangular implements Shape{
    w:number;
    h:number;
    constructor(w:number,h:number){
        this.w = w
        this.h = h
    }
    getArea(): number {
        return this.w + this.h
    }
}
const c = new Circle(5)
const rec = new Rectangular(2,3)
const shapes: Shape[] = [c, rec]
shapes.forEach(s => {
    console.log(s.getArea())
})