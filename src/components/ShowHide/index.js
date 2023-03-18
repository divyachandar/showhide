import {Component} from "react"
import "./index.css"

class ShowHide extends Component{
state={
    isFirstName:false,
    isLastName:false,
}

onClickFirstName=()=>{
    const {isFirstName}=this.state
    this.setState((prevState)=>({isFirstName:!prevState.isFirstName}))
}

onClickLastName=()=>{
    const {isLastName}=this.state
    this.setState((prevState)=>({isLastName:!prevState.isLastName}))
}

render(){
    const {isFirstName,isLastName}=this.state
    return(
        <div className="showHide-container">
            <h1 className="header">
                Show/Hide
            </h1>
            <div className="btn-Container">
                <div className="firstName-btn">
                    <button className="showHide-btn" type="button" onClick={this.onClickFirstName}>Show/Hide Firstname</button>
                    {isFirstName&&<p className="name">Joe</p>}
                </div>
                <div className="lastName-btn">
                    <button className="showHide-btn" type="button" onClick={this.onClickLastName}>Show/Hide Lastname</button>
                    {isLastName&&<p className="name">Jonas</p>}
                </div>
            </div>
        </div>
    )
}
}

export default ShowHide
