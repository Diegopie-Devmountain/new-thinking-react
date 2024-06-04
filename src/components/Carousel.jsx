import Glider from 'react-glider';
import Card from './Card';
import dummyData from '../data/workshops.js'
import { useRef } from 'react';
import { Add } from './Icons.jsx';

export default function Carousel() {

  const gliderRef = useRef(null);
  return (
    <section className='App-Glide-Container'>
      <header>
        <h3>{dummyData.categoryName}</h3>
        <button><Add width='1.5rem' /></button>
      </header>
      <Glider
        ref={gliderRef}
        // draggable
        hasArrows
        hasDots
        slidesToShow={3}
        slidesToScroll={2}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5
            }
          }
        ]}
      >
        {dummyData.categoryData.map((workshop => {
          return (
            <Card key={workshop.id} data={workshop} glider={gliderRef}/>

          )
        }))}


      </Glider>
    </section>
  )
}