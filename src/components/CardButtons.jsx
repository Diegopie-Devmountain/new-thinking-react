import { Delete, Pencil } from './Icons.jsx';

export default function CardButtons() {

  return (
    <>
      <button className='App-Icons'>
        <Pencil width='1.5rem' />
      </button>

      <button className='App-Icons'>
        <Delete width='1.5rem' />
      </button>
    </>
  )
}
