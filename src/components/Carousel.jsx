import Glider from 'react-glider';
import Card from './Card';
import generateId from '../utils/generateId.js';
import dummyData from '../data/workshops.js'
import { useRef, useState } from 'react';

export default function Carousel() {

  const [cardData, setCardData] = useState(dummyData);

  const addCard = () => {
    const newData = {...cardData};
    newData.categoryData.push({
      id: generateId(newData.categoryData),
      workshopName: 'new lorem',
      workshopDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis!',
      workshopShortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis!',
      workshopImage: "https://picsum.photos/id/237/300/200?grayscale",
    });
    setCardData(newData);
  };

  const deleteCard = (id) => {
    const newData = {...cardData};

    const index = newData.categoryData.findIndex((card) => card.id === id);

    newData.categoryData.splice(index, 1);

    setCardData(newData);
  };

  const gliderRef = useRef(null);
  return (
    <section className='App-Glide-Container'>
      <article>
      <h3>{cardData.categoryName}</h3>
      <button onClick={addCard}>Add Card</button>
      </article>
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
        {cardData.categoryData.map((workshop => {
          return (
            <Card 
              key={workshop.id} 
              data={workshop} 
              deleteCard={deleteCard}
              glider={gliderRef}
            />

          )
        }))}


      </Glider>
    </section>
  )
}