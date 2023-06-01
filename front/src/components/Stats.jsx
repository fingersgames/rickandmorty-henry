import React from "react"
import styles from './Stats.module.css'



class Stats extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log('montado')
    }
    componentDidUpdate(){
        console.log('actualizado')

    }
    componentWillUnmount(){
        console.log('desmontado')
    }
    render(){
        const aumentar=()=>{
            this.setState({count:this.state.count+1},()=>{console.log(this.state.count)})   
            console.log('sin cb: '+this.state.count)
        }

        const disminuir=()=>{
            this.setState({count:this.state.count-1})   
        }
        return(
            <div className={styles.count}>
                <h1>{this.state.count}</h1>
                <div>
                    <button onClick={disminuir}>menos</button>                    
                    <button onClick={aumentar}>mas</button> 
               </div>

            </div>
        )
    }

}
export default Stats;