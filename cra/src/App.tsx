import Greetings from './Greetings';

function App() {
  const onClick = (name:string) => {
    console.log(name)
  }
  return (
    <div>
      <Greetings onClick2={onClick} name='function'/>
    </div>
  );
}

export default App;
