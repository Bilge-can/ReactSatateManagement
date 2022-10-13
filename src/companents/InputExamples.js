import {useState} from "react";

function InputExamples(){
    const [name, setName] =useState('Bilge')
    const [surname, setSurname] =useState('Can')

    const onChangeName = (event) => setName(event.target.value)
    const onChangeSurname = (event) => setSurname(event.target.value)
    return(
        <div>
           name<br/>
        <input value={name} onChange={onChangeName}/>
            <br/>

            surname<br/>
            <input value={surname} onChange={onChangeSurname}/>
            <br/>
            {name}{surname}

        </div>
    );
}

export default InputExamples;