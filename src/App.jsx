import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
  
  function handleClick(){
    alert('button clicked');
  }
  const handleCLick2 = () => {
    alert('button 2 clciked')
  }

  const add = (n) => {
    alert(n+5);
  }

  return (
    <>
      <h2>React core concept 2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>       


      <button onClick={handleClick}>click me</button>
      <button onClick={handleCLick2}>click 2</button>
      <button onClick={() => {alert('Third clciked!')}}>third</button>
      {/* if need to take parameter */}
      <button onClick={() => add(4)}>add 4</button>
    </>
  )
}

export default App
