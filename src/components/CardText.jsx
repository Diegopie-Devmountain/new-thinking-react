import { useState } from "react"

export default function CardText(props) {

  const [text, setText] = useState(props.workshopShortDescription);

  return (
    <>
      {props.isEditable ?
        <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        :
        <p>
          {text}
        </p>
      }
    </>
  )
}