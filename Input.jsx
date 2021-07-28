import React from "react";
class Input extends React.Component{

    state = {task: []}

    render(){
        return(            
        <div className="inputcss">
        <input type="text" value={this.state.task} onChange={(e)=>{this.setState({task: e.currentTarget.value});
        }}></input>
        <button className="main-btn" onClick={() => {this.props.taskHandlerFunction(this.state.task);
        this.setState({ task : ""});
        }}>Submit</button>
        </div>
        )
    }
}

export default Input;