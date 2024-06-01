// import { useEffect } from 'react';
import { Close, Pencil } from './Icons';

export default function Card(props) {

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
          <h4>{workshopName} {id + 1}</h4>
        </div>
        <p>
          {workshopShortDescription}
        </p>
      </div>
      <button className='App-Icons'>
        <Pencil width='1.5rem' />
      </button>
      <button className='App-Icons'>
        <Close width='1.5rem' />
      </button>
    </article>

  )
}