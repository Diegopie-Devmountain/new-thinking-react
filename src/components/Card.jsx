import { useState } from 'react';
import CardText from './CardText';
import CardTitle from './CardTitle';
import { Close, Pencil } from './Icons';

export default function Card(props) {

  const [isEditable, setIsEditable] = useState(false);

  const { workshopImage, workshopShortDescription, workshopDescription, workshopName, id } = props.data;

  // useEffect(()=>{
  //   // this aint working so skip for now
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
          <CardTitle workshopName={workshopName} id={id} isEditable={isEditable} />
        </div>
        <CardText workshopShortDescription={workshopShortDescription} isEditable={isEditable} />
      </div>
      {
        isEditable ?
          <button className='App-Icons' onClick={() => setIsEditable(false)}>Save</button>
          :
          <button onClick={() => setIsEditable(true)} className='App-Icons'>
            <Pencil width='1.5rem' />
          </button>
      }
      <button className='App-Icons' onClick={() => props.deleteCard(id)}>
        <Close width='1.5rem' />
      </button>
    </article>

  )
}