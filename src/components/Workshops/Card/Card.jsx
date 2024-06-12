import { useState } from 'react';
import CardText from './CardText.jsx';
import CardTitle from './CardTitle.jsx';
import CardButtons from './CardButtons.jsx';

import './Card.css'

export default function Card(props) {

  const { workshopImage, workshopShortDescription, workshopName, id, index } = props.data;

  const [isEditable, setIsEditable] = useState(false);

  const [text, setText] = useState(workshopShortDescription);

  const [title, setTitle] = useState(workshopName);

  return (

    <article className='Card-Wrapper'>
      <div className='Card-Body'>
        <img
          src={workshopImage}
          alt={title + "Image"} loading="lazy"
        />
        <CardTitle
          // workshopName={workshopName} 
          titleState={{ title, setTitle }}
          id={id}
          isEditable={isEditable} />
        <CardText
          // workshopShortDescription={workshopShortDescription} 
          textState={{ text, setText }}
          isEditable={isEditable} />
      </div>
      <CardButtons
        buttonData={{
          id,
          index,
          workshopName: title, workshopShortDescription: text
        }}
        isEditableState={{ isEditable, setIsEditable }}
        deleteCard={props.deleteCard}
        editCard={props.editCard}
      />
    </article>

  )
}