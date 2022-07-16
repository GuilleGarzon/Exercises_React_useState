import {useState} from 'react';

function Grados () {

    const [value, setValue] = useState(0);
    const [result, setResult] = useState(0);

    const handleValue = (e) => {
        setValue(e.target.value);
        console.log(value);
    }   

    const handleResult = () => {
        setResult((Number(value) * 9/5) + 32);
        console.log(result);
    }
    

    return (
        <>
        <h1>Grados Centigrados</h1>
            <input type="number" name="value" onChange={handleValue}></input>
            <button onClick={handleResult}>Result</button>
            <p>
                {value} C es igual a {result} F;
            </p>
        </>
    )
}

export default Grados;