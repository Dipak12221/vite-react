import './card.css'
import '../assets/img.png'

const Card = (props) => {
  return (
    <div className="Card">
        <img src="https://images.unsplash.com/photo-1615531068122-80040baba3bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile img" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus natus id architecto quae placeat veritatis, nobis sit. Iusto </p>
        <h2>View Profile</h2>
    </div>
  )
}
export default Card;
