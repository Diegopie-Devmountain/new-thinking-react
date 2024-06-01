import Glider from 'react-glider';
import './App.css';
import { Close, Pencil } from './components/Icons';

export default function App() {

  return (
    <section>
      <header className='App-Category-Header'>
        <article>
          <h2>Workshop Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptas ea quas. Blanditiis et cumque sequi hic reiciendis earum at, quos quae natus rerum recusandae nesciunt cupiditate deserunt aliquid laboriosam tenetur neque nulla. Ipsa reiciendis odit similique temporibus nulla rerum eaque exercitationem vitae dolorum sapiente. Voluptatibus id labore sunt itaque.</p>
        </article>
        <img src='https://picsum.photos/id/237/300/300'/>
      </header>
      <section className='App-Glide-Container'>
        <Glider
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

          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <div className="text-center">
                <img
                  className="App-Item-Card-Img"
                  src="https://picsum.photos/id/237/300/200"
                  alt="lorem picusm placeholder" loading="lazy"
                />
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum quis leo vehicula congue.
              </p>
            </div>
            <button className='App-Icons'>
              <Pencil width='1.5rem' />
            </button>
            <button className='App-Icons'>
              <Close width='1.5rem' />
            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <div className="text-center">
                <img
                  className="App-Item-Card-Img"
                  src="https://picsum.photos/id/237/300/200"
                  alt="lorem picusm placeholder" loading="lazy"
                />
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum quis leo vehicula congue.
              </p>
            </div>
            <button className='App-Icons'>
              <Pencil width='1.5rem' />
            </button>
            <button className='App-Icons'>
              <Close width='1.5rem' />
            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <div className="text-center">
                <img
                  className="App-Item-Card-Img"
                  src="https://picsum.photos/id/237/300/200"
                  alt="lorem picusm placeholder" loading="lazy"
                />
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum quis leo vehicula congue.
              </p>
            </div>
            <button className='App-Icons'>
              <Pencil width='1.5rem' />
            </button>
            <button className='App-Icons'>
              <Close width='1.5rem' />
            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <div className="text-center">
                <img
                  className="App-Item-Card-Img"
                  src="https://picsum.photos/id/237/300/200"
                  alt="lorem picusm placeholder" loading="lazy"
                />
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum quis leo vehicula congue.
              </p>
            </div>
            <button className='App-Icons'>
              <Pencil width='1.5rem' />
            </button>
            <button className='App-Icons'>
              <Close width='1.5rem' />
            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <div className="text-center">
                <img
                  className="App-Item-Card-Img"
                  src="https://picsum.photos/id/237/300/200"
                  alt="lorem picusm placeholder" loading="lazy"
                />
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum quis leo vehicula congue.
              </p>
            </div>
            <button className='App-Icons'>
              <Pencil width='1.5rem' />
            </button>
            <button className='App-Icons'>
              <Close width='1.5rem' />
            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <div className="text-center">
                <img
                  className="App-Item-Card-Img"
                  src="https://picsum.photos/id/237/300/200"
                  alt="lorem picusm placeholder" loading="lazy"
                />
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum quis leo vehicula congue.
              </p>
            </div>
            <button className='App-Icons'>
              <Pencil width='1.5rem' />
            </button>
            <button className='App-Icons'>
              <Close width='1.5rem' />
            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <div className="text-center">
                <img
                  className="App-Item-Card-Img"
                  src="https://picsum.photos/id/237/300/200"
                  alt="lorem picusm placeholder" loading="lazy"
                />
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum quis leo vehicula congue.
              </p>
            </div>
            <button className='App-Icons'>
              <Pencil width='1.5rem' />
            </button>
            <button className='App-Icons'>
              <Close width='1.5rem' />
            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <div className="text-center">
                <img
                  className="App-Item-Card-Img"
                  src="https://picsum.photos/id/237/300/200"
                  alt="lorem picusm placeholder" loading="lazy"
                />
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum quis leo vehicula congue.
              </p>
            </div>
            <button className='App-Icons'>
              <Pencil width='1.5rem' />
            </button>
            <button className='App-Icons'>
              <Close width='1.5rem' />
            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <div className="text-center">
                <img
                  className="App-Item-Card-Img"
                  src="https://picsum.photos/id/237/300/200"
                  alt="lorem picusm placeholder" loading="lazy"
                />
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum quis leo vehicula congue.
              </p>
            </div>
            <button className='App-Icons'>
              <Pencil width='1.5rem' />
            </button>
            <button className='App-Icons'>
              <Close width='1.5rem' />
            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <div className="text-center">
                <img
                  className="App-Item-Card-Img"
                  src="https://picsum.photos/id/237/300/200"
                  alt="lorem picusm placeholder" loading="lazy"
                />
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum quis leo vehicula congue.
              </p>
            </div>
            <button className='App-Icons'>
              <Pencil width='1.5rem' />
            </button>
            <button className='App-Icons'>
              <Close width='1.5rem' />
            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <div className="text-center">
                <img
                  className="App-Item-Card-Img"
                  src="https://picsum.photos/id/237/300/200"
                  alt="lorem picusm placeholder" loading="lazy"
                />
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum quis leo vehicula congue.
              </p>
            </div>
            <button className='App-Icons'>
              <Pencil width='1.5rem' />
            </button>
            <button className='App-Icons'>
              <Close width='1.5rem' />
            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <div className="text-center">
                <img
                  className="App-Item-Card-Img"
                  src="https://picsum.photos/id/237/300/200"
                  alt="lorem picusm placeholder" loading="lazy"
                />
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum quis leo vehicula congue.
              </p>
            </div>
            <button className='App-Icons'>
              <Pencil width='1.5rem' />
            </button>
            <button className='App-Icons'>
              <Close width='1.5rem' />
            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <div className="text-center">
                <img
                  className="App-Item-Card-Img"
                  src="https://picsum.photos/id/237/300/200"
                  alt="lorem picusm placeholder" loading="lazy"
                />
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum quis leo vehicula congue.
              </p>
            </div>
            <button className='App-Icons'>
              <Pencil width='1.5rem' />
            </button>
            <button className='App-Icons'>
              <Close width='1.5rem' />
            </button>
          </article>

        </Glider>
      </section>
    </section>
  )
}


