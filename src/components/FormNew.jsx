import styles from "./FormNew.module.css"
import { useState } from "react" 
import validation from "./validation.js"
const FormNew =(props)=>{

    const [errors,setErrors]=useState(
        {
            username:'',
            password:''
        }
    )
    const [userData,setUserData]=useState(
        {
            username:'',
            password:''
        }
    )

       
        // else setErrors({username:'invalido', password:'invalido'})
    const submitHandler=(event)=>{
        event.preventDefault();
         props.login(userData)
    }
    const handleChange=(event)=>{
        setUserData(
            {
                ...userData,
                [event.target.name]:event.target.value
            }
        )
        setErrors(validation({...userData,[event.target.name]:event.target.value}))

    }


    return(
        <div className={styles.form}>
          
                <img src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty-500x281.png" alt="" />
   
            <form  onSubmit={submitHandler} >
                <label htmlFor="">Username: </label>
                { <input onChange={handleChange} placeholder='Enter your username...' type="email" name="username" value={userData.username} /> }
                {errors.username? <p>{errors.username}</p>: <p></p> }
                
                <label htmlFor="">Password: </label>
                <input  type="password" name="password" placeholder='Enter your password...' value={userData.password} onChange={handleChange} />
                {errors.password? <p>{errors.password}</p>: <p></p> }
                
                <button disabled ={errors.password || errors.username} onChange={handleChange} className={styles.formBtn} type="submit">LOGIN</button>
                
            </form>
        </div>
    )
    
}
export default FormNew;