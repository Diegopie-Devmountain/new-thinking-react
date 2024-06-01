import Glider from 'react-glider';
import Card from './Card';
import dummyData from '../data/workshops.js'
import { useRef } from 'react';

export default function Carousel() {

  const gliderRef = useRef(null);
  return (
    <section className='App-Glide-Container'>
      <h3>{dummyData.categoryName}</h3>
      <Glider
        ref={gliderRef}
        draggable
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