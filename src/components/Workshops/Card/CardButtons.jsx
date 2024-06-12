import { Save, Delete, Pencil } from '../../Icons.jsx';

export default function CardButtons(props) {

  const { isEditable, setIsEditable } = props.isEditableState
  const { id, index, workshopName, workshopShortDescription } = props.buttonData;

  return (
    <>
      {
        isEditable ?
          // Save Button
          <button className='App-Icons' onClick={() => {
            // * Add Edit card on refactor
            // * Highlight that we are selecting the keys we want to update and the values we want it to have (Postgres setup)
            props.editCard(index, { workshopShortDescription, workshopName });
            setIsEditable(false);
          }}>
            <Save width='1.2rem' />
          </button>
          :
          // Edit Button
          <button onClick={() => setIsEditable(true)} className='App-Icons'>
            <Pencil width='1.2rem' />
          </button>
      }
      {/* Delete Button */}
      <button className='App-Icons' onClick={() => props.deleteCard(id)}>
        <Delete width='1.2rem' />
      </button>
    </>
  )
}