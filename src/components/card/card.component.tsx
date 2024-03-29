import { Monster } from '../../App';
import { CardSelectorProps } from '../card-selector/card-selector.component';
import './card.styles.css';


type CardProps = {
  monster: Monster;
  selectedMonster: CardSelectorProps;
}

const Card = ({monster,selectedMonster}: CardProps) =>{
  const {id, name, email, username} = monster;
  return[
    <div className='card-container' key={id}>
      <img 
        className='image-robot'
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set${selectedMonster}&size=180x180`}
      />
      <div className='card-text'>
        <div className='inline-card'><h6 className='labels-card'>Name:</h6><h2>{name}</h2></div>
        <div className='inline-card'><h6 className='labels-card'>Username:</h6><h3>{username}</h3></div>
        <div className='inline-card'><h6 className='labels-card'>email:</h6><p>{email}</p></div>
      </div>
    </div>
  ]
}

export default Card;