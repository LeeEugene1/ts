//[타입스크립트로 리액트 컴포넌트 만들기] - React.FC와 일반 function컴포넌트
//FC의 장점: 
// 1.children을 넣지않아도 사용가능 => 리엑트18부터 불가 https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210
// 2.Greetings. 했을때 리엑트 컴포넌트 클래스 메소드 사용가능(defaultProps)
//단점. default props가 잘동작하지않는다. -> 1.mark에 ? 붙이기 2.비구조할당하는 단계에서 초기값입력
//요새 잘안쓰는듯함
import React, { ReactNode } from 'react'

type GreetingsProps = {
    name:string,
    // children?:ReactNode,
    //1번의 단점: undefined
    mark:string//(parameter) mark: string | undefined
    // arr?:string[]//arr.map바로쓸수없어서 널처리필요 'arr' is possibly 'undefined'.ts(18048)
    optional?: string,
    onClick2:(name:string)=>void;//void: 아무값도 리턴하지않는다.
}

//Function
const Greetings = ({name,mark, optional, onClick2}:GreetingsProps) => {
    const handleClick = () => onClick2(name)
    return <div>
        Hello, {name}{mark}
        {optional && <p>{optional}</p>}
        <div>
            <button onClick={handleClick}>click me!</button>
        </div>
    </div>
}
Greetings.defaultProps = {
    mark:'!',
}

//FC
// const Greetings: React.FC<GreetingsProps> = ({name, mark='!'}) => {
//     // if(!arr)return
//     // arr.map(e => {
//     // })
//     return <div>
//         Hello, {name}{mark}
//     </div>
// }

export default Greetings
