import {useState} from 'react';

function CambiaImagen () {

    const ANIMAL_IMAGES = {
        img1: "https://purr.objects-us-east-1.dream.io/i/img_6184.jpg",
        img2: "https://purr.objects-us-east-1.dream.io/i/wPD1T.jpg",
        img3: "https://purr.objects-us-east-1.dream.io/i/photo_2017-05-13_14-24-03.jpg",
      };

      const [image, setImage] = useState(null);

      const selectImage = (img) => {
        setImage(img);
      }

     

    return (
        <>
            <h1>CambiaImagen</h1>
            {
              image 
              ? <img src={image} width={100} height={100} alt="Imagen gatos"></img>
              : <p>No image selected</p>
            }
            <br />
            <button onClick={() => {selectImage(ANIMAL_IMAGES.img1)}}>Image 1</button>
            <button onClick={() => {selectImage(ANIMAL_IMAGES.img2)}}>Image 2</button>
            <button onClick={() => {selectImage(ANIMAL_IMAGES.img3)}}>Image 3</button>
            <br />
            
        </>
    )
}

export default CambiaImagen;