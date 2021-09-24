import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponent brand='Apple' price='5000'></MyComponent>
      <MyComponent brand='microsoft' price='10000'></MyComponent>
      <MyComponent brand='Google' price='50'></MyComponent>
      <MyComponent></MyComponent>
    </div>
  );
}

function LoadUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>Users Loaded:{users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}
function User(props) {
  return (
    <div className='user'>
      <h2>Name: {props.name}</h2>
      <p>call me {props.phone}</p>
    </div>
  )
}

function MyComponent(props) {
  const [points, setPoints] = useState(1);
  const myStyle = {
    backgroundColor: 'lightblue',
    border: '3px solid blue',
    margin: '10px',
    padding: '5px',
    borderRadius: '10px'
  }
  const handleAddCart = () => {
    const newpoints = points * 2;
    setPoints(newpoints);
  }
  return (
    <div style={myStyle}>
      <h1>Yo Yo Mama! {props.brand}</h1>
      <p>asking money price:{props.price}    I have points: {points} </p>

      <button onClick={handleAddCart}>Add to cart</button>
      <p>I can write my own component</p>
    </div>
  )
}
export default App;
