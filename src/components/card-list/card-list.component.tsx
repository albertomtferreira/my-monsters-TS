import { Monster } from '../../App';
import { CardSelectorProps } from '../card-selector/card-selector.component';
import Card from "../card/card.component";
import './card-list.style.css';

type CardListProps = {
  monsters: Monster[],
  selectedMonster: Monster;
}

const CardList = ({monsters, selectedMonster}:CardListProps) =>{
  return[
    <div key={'CardListComponent'} className='card-list'>
      {monsters.map((monster)=>{
        return(
          <Card monster={monster} selectedMonster={selectedMonster}/>
        )
      })}
    </div>
  ]
}

export default CardList;