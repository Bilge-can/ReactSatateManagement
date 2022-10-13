import {useState} from "react";

function App() {
    const [name, setName] =useState("Bilge");
    const [age, setAge] = useState(22);
    const [friends, setFriends] = useState(["Bilge1", "Bilge2"]);
    const [address, setAddress] = useState({title: "İstanbul", zip: 343434});

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
        <h2>{age}</h2>
        <button onClick={() => setName("Bilgeeeeee")}>Change Name</button>
        <button onClick={() => setAge(25)}>Change Age</button>

        <hr />
        <br/>

        <h2>Friends</h2>

        {
            friends.map((friends ,index )=>
                <div key={index}>{friends}</div>)
        }
        <button onClick={() => setFriends(["Bilge3", ...friends])}>add new friend</button>

        <hr />
        <br/>

        <h2>Address</h2>
        <div>{address.title} {address.zip}</div>

        <br/>

        <button onClick={() => setAddress({title: "Ankara", zip: 8888})}>change the address</button>
    </div>
  );
}

export default App;
