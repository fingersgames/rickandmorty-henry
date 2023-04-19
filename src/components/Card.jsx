import React, { useState,  useEffect } from "react";
import styles from './Card.module.css'
import { Link } from "react-router-dom";
// import { ADD_FAV,REMOVE_FAV } from "../redux/action-types";
import { connect } from "react-redux";
import { addFav,removeFav } from "../redux/actions";

function Card({id,name,species,gender,image,onClose,addFav,removeFav,myFavorites}) {
   const [isFav,setIsFav] = useState(false)
   const handleFavorite=()=>{
      if (isFav){
         setIsFav(false)
         removeFav(id)
      }
      else {
         setIsFav(true)
         addFav({id,name,species,gender,image})
      }
   }
   useEffect(()=>{
      myFavorites.forEach(fav => {
         if(fav.id===id){
            setIsFav(true)
         }
      });
   },[])
   return (
      <div className={styles.card}>
         <button className={isFav ? styles.botonFavoriteOn : styles.botonFavorite} onClick={()=>handleFavorite()}>♥️</button>
         <button className={styles.botonClose} onClick={()=>onClose(id)}>X</button>
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
const mapStateToProps=(state)=>{
   return{
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps=(dispatch)=>{
   return{
      addFav: (character)=>{dispatch(addFav(character))},
      revomeFav: ()=>{dispatch(removeFav())}
   }
}
export default connect (mapStateToProps,mapDispatchToProps)(Card);

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


