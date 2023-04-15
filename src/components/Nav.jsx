import styles from './Nav.module.css'
import React from 'react'
import SearchBar from './SearchBar.jsx'
import {NavLink } from 'react-router-dom'

class Nav extends React.Component{

    render(){
        return(
            <div className={styles.nav}>
                <div className={styles.links}>
                    <NavLink to="/home" className={styles.link}>
                        Rick And Morty
                    </NavLink> 
                    <NavLink to="/about" className={styles.link}>
                       Favorites
                    </NavLink>                    
                    <NavLink to="/about" className={styles.link}>
                       About
                    </NavLink>  

             
                </div>
                                
                <SearchBar onSearch={this.props.onSearch} />    
                <button className={styles.logout} onClick={this.props.logout}>Logout</button>
            </div>            
        )

    }
}
export default Nav;