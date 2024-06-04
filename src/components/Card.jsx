// import { useEffect } from 'react';
import CardText from './CardText';
import CardTitle from './CardTitle';
import { Delete, Pencil } from './Icons';

export default function Card(props) {

  const { workshopImage, workshopShortDescription, workshopName, id } = props.data;

  // useEffect(()=>{
  //   // this aint working so skip for now
  //   console.log(props.glider.current.updateControls);
  //   props.glider.current.updateControls()
  // }, [])

  return (

    <article className='App-Card-Wrapper'>
      <div className='App-Card-Body'>
        <img
          className="App-Item-Card-Img"
          src={workshopImage}
          alt="lorem picusm placeholder" loading="lazy"
        />
        <CardTitle workshopName={workshopName} id={id} />
      </div>
      <CardText workshopShortDescription={workshopShortDescription} />
      <button className='App-Icons'>
        <Pencil width='1.5rem' />
      </button>
      <button className='App-Icons'>
        <Delete width='1.5rem' />
      </button>
    </article>
  )
}