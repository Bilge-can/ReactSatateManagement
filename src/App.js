import {useState} from "react";

function App() {
    const [name, setName] =useState("Bilge");
    const [age, setAge] = useState(22);

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
        <h2>{age}</h2>
        <button onClick={() => setName("Bilgeeeeee")}>Change Name</button>
        <button onClick={() => setAge(25)}>Change Age</button>
    </div>
  );
}

export default App;
