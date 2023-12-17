// 언제사용? any를 사용하기싫은데 타입을 지켜내고싶을때 사용한다.

// any 문제: merged에 파라미터들이 뭐가들어있는지 알수없음(const merged: any)
function merge(a:any,b:any){
    return{
        ...a,
        ...b
    }
}
const merged = merge({foo:1},{bar:2})

//generic으로 해결해 타입을 지켜낼수있다.(const wrapped: {param: number;})
//여러개를 사용할 수 있다.
function wrap<T,V>(param:T, param2:V){
    return{
        param,
        param2,
    }
}
const wrapped = wrap(10,'a')

//interface
interface Items<T>{
    list:T[]
}
const items: Items<string> ={
    // list:[1,2,3] 에러남
    list:['1','2','3']
}

//type alias
type Item2<T> = {
    list:T[]
}
const item2: Item2<number> ={
    list:[1,2,3]
}

//class
class Queue<T> {
    list: T[] = []

    get length(){
        return this.list.length
    }

    enQueue(item:T){
        this.list.push(item)
    }

    deQueue(){
        return this.list.unshift()//0번째
    }
}

const que = new Queue<number>()
que.enQueue(0)
que.enQueue(1)
que.enQueue(2)
que.enQueue(3)
que.enQueue(4)
while(que.length > 0){
    console.log(que.deQueue())
}
