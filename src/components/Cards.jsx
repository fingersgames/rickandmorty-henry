import React from "react";
import styles from './Cards.module.css';
import Card from './Card.jsx'

const Cards=(props)=> {
   const { characters,onClose } = props;
   return <div className={styles.cards}>
      {
         characters.length !== 0?<>
         {characters.map((e)=>
            <Card 
               key={e.id}
               id={e.id}
               name={e.name}
               species={e.species}
               gender={e.gender}
               image={e.image}
               onClose={onClose} 
            />
         )}
         </>: <p>Nada por aqui...</p>
      }
   </div>;
}

// class Cards extends React.Component {
//    constructor(props){
//       super();
//       this.props=props;
//    }
//    render(){
//       return(
//          <div className={styles.cards}>
//             {
//                this.props.characters.map((e)=>
//                   <Card 
//                      id={e.id}
//                      name={e.name}
//                      species={e.species}
//                      gender={e.gender}
//                      image={e.image}
//                      onClose={this.props.onClose} 
//                   />
//                )
//             }
//          </div>
//       )
//    }
// }

export default Cards;


