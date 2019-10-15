import React from 'react';
import ReactDOM from 'react-dom';
export default class Life extends React.Component{
    constructor(props){
        super(props)
        this.state={
            opacity: 1
        }
        this.distroyComponen=this.distroyComponent.bind(this)
    }
    //启用循环器，在rendor后运行
    componentDidMount(){
        this.intervalId=setInterval(function(){
            let {opacity}=this.state
            opacity=opacity-0.1
            if(opacity<=0){
                opacity=1
            }
            this.setState({opacity})
        }.bind(this),200)
    }
    //清理定时器
    componentWillUnmount(){
        clearInterval(this.intervalId)

    }
    distroyComponent(){
        ReactDOM.unmountComponentAtNode(document.querySelector('#root'))

    }

    render(){
        const {opacity}=this.state
        return (
            <div>
                <h2 style={{opacity:opacity}}>{this.props.message}</h2>
                <button onClick={this.distroyComponent} >Not Difficult</button>
            </div>
   )
    }
    
}