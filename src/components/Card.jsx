import { useState } from 'react';
import CardText from './CardText';
import CardTitle from './CardTitle';
import CardButtons from './CardButtons.jsx';

export default function Card(props) {

  const { workshopImage, workshopShortDescription, workshopName, id } = props.data;

  const [isEditable, setIsEditable] = useState(false);

  const [text, setText] = useState(workshopShortDescription);

  const [title, setTitle] = useState(workshopName);


  // useEffect(()=>{
  //   // Glider pagination feels like it wants to work or not, this is supposed to fix it but doesn't
  //   console.log(props.glider.current.updateControls);
  //   props.glider.current.updateControls()
  // }, [])

  return (

    <article className='App-Card-Wrapper'>
      <div className='App-Card-Body'>
        <div className="text-center">
          <img
            className="App-Item-Card-Img"
            src={workshopImage}
            alt="lorem picusm placeholder" loading="lazy"
          />
          <CardTitle 
          // workshopName={workshopName} 
          titleState={{title, setTitle}}
          id={id} 
          isEditable={isEditable} />
        </div>
        <CardText 
          // workshopShortDescription={workshopShortDescription} 
          textState={{text, setText}}
          isEditable={isEditable} />
      </div>
      <CardButtons 
        buttonData={{ id, text, title }}
        isEditableState={{ isEditable, setIsEditable }}
      />
    </article>

  )
}