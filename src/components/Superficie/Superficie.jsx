import {useState} from 'react';

function Superficie () {

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [area, setArea] = useState(0);

    const handleHeigth = (e) => {
        setHeight(e.target.value);
        console.log(height)
    }

    const handleWidth = (e) => {
        setWidth(e.target.value);
        console.log(width)
    }

    const handleArea = () => {
        setArea(Number(height) * Number(width));
        console.log(area)
    }

    return (
        <>
            <h1>Calcular la superficie de un rectangulo</h1>
            <input type="number" name= "width" onChange={handleWidth}/>
            <input type='number' name= "height" onChange={handleHeigth}/>
            <button onClick={handleArea}>Calcular</button>
            <p>
                La superficie del rectangulo es: {area};
            </p>
        </>
    )
}

export default Superficie;