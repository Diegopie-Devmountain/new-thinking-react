
export default function Header(props) {
console.log(props);
  return (
    <header className='Workshops-Category-Header'>
      <article>
        <h2>{props.categoryName}</h2>
        <p>{props.categoryDescription}</p>
      </article>
      <img src={props.categoryImg} />
    </header>
  )
}