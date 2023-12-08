const msg:string = 'hello'
console.log(msg)

const done:boolean = false
const numbers:number[] = [1,2,3]

let mightBeUndefired: string | undefined = undefined

let color: 'red' | 'orange' = 'red'

function sum(x:number, y:number):number{
    return x + y
}
function sumArray(numbers: number[]):number{
    return numbers.reduce((acc, current)=> acc + current, 0)
}

const total = sumArray([1,2,3])

function returnNothing():void {//should not return any value. 
    console.log('ddd')
    return;
    // return true
}
returnNothing()