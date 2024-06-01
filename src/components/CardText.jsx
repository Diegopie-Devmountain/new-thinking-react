
export default function CardText(props) {

  return (
    <>
      {props.isEditable ?
        <input />
        :
        <p>
          {props.workshopShortDescription}
        </p>
      }
    </>
  )
}