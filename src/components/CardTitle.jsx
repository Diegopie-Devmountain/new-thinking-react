import { useState } from "react"

export default function CardTitle(props) {

  const [title, setTitle] = useState(props.workshopName);

  return (
    <>
      {
        props.isEditable ?
          <input
            type="text"
            value={title}
            onChange={(e) => {
              console.log(e.target.value);
              setTitle(e.target.value)
            }}
          />
          :
          <h4>{title} {props.id + 1}</h4>
      }
    </>
  )
}