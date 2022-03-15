import { Component } from "react";
import './card-list.style.css'
import Card from "../card/card.component";
class CardList extends Component {
    
    render() {
        const {monsters} = this.props;
        return (
            <div className="card-list" >
          { 
            monsters.map(({id,name,email}) => (
               <Card id = {id} name={name} email= {email}/>
            ))
           }     
            </div>
        )
    }
}
export default CardList;