import React from "react";
import styles from './Card.module.css'
import { Link } from "react-router-dom";
// class Card extends React.Component {
//    render() {
//       return (
//          <div className={styles.card}>
//             <button className={styles.boton} onClick={() => this.props.onClose(this.props.id)}>X</button>
//             <h2>{this.props.name}</h2>
//             <h2>{this.props.species}</h2>
//             <h2>{this.props.gender}</h2>
//             <img src={this.props.image} alt="" />
//          </div>
//       );
//    }
// }
// export default Card;


export default function Card({id,name,species,gender,image,onClose}) {
   return (
      <div className={styles.card}>
         <button className={styles.boton} onClick={()=>onClose(id)}>X</button>
         <br></br>
         <Link to={`/detail/${id}`}>
            <h2 className={styles.cardTitle}>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" />
         
      </div>
   );
}

// class Card extends React.Component {
//    constructor({id,name,species,gender,image,onClose}){
//       super();
//       this.id=id;
//       this.name = name;
//       this.species = species;
//       this.gender = gender;
//       this.image = image;
//       this.onClose = onClose;
//    }
//    render(){
//       return(
//          <div className={styles.card}>
//             <button className={styles.boton} onClick={()=>this.onClose(this.id)}>X</button>
//             <h2>{this.name}</h2>
//             <h2>{this.species}</h2>
//             <h2>{this.gender}</h2>
//             <img  src={this.image} alt="" />
//          </div>
//       )
//    }
// }



