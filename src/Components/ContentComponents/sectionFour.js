import React from 'react'
import FirstName from '../ViewComponents/firstName'
import LastName from '../ViewComponents/lastName'
import Message from '../ViewComponents/message'
import Phone from '../ViewComponents/phone'
import Email from '../ViewComponents/email'
import Submitted from '../ViewComponents/submitted.js'


export default class SectionFour extends React.Component{

    state={
        formComponents: ["FirstName", "LastName", "Email", "Phone", "Message"],
        currentComponent: "FirstName",
        index: 0,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        error: "",
    }

    nextClick = () => {
        this.setState({
            currentComponent: this.state.formComponents[this.state.index + 1],
            index: this.state.index + 1,
            error: ""
        })
    }

    prevClick = () => {
        this.setState({
            currentComponent: this.state.formComponents[this.state.index - 1],
            index: this.state.index - 1,
            error: ""
        })
    }

    controlField = (ev) => {
        switch(ev.target.id){
            case "firstName" :
                this.setState({
                    firstName: ev.target.value
                })
                break;
            case "lastName" :
                    this.setState({
                        lastName: ev.target.value
                    })
                    break;
            case "email" :
                    this.setState({
                        email: ev.target.value
                })  
                break;
            case "phone" :
                    this.setState({
                        phone: ev.target.value
                    })
                    break;
            case "message" :
                    this.setState({
                        message: ev.target.value
                    })
                    break;
        }
    }

    submitClick = () =>{
        if(!this.state.firstName){
            this.setState({
                currentComponent: "FirstName",
                index: 0,
                error: "Your first name is required"
            })
        }
        else if(!this.state.lastName){
            this.setState({
                currentComponent: "LastName",
                index: 1,
                error: "Your last name is required"
            })
        }
        else if(!this.state.email){
            this.setState({
                currentComponent: "Email",
                index: 2,
                error: "An email address is required"
            })
        }
        else{
            this.setState({
                currentComponent: "Submitted"
            })
        }
    }

    render(){
        return(
            <div className="parallax Four" id="contact-div">
                <div className="content hidden" id="contact-content">
                    <h1>Contact Me!</h1>
                    <h4 id="error">{this.state.error}</h4>
                    <div id="formComponent">
                        {this.state.currentComponent === "FirstName" ? <FirstName next={this.nextClick} handleChange={this.controlField} handleValue={this.state.firstName}/>: null }
                        {this.state.currentComponent === "LastName" ? <LastName next={this.nextClick} prev={this.prevClick} handleChange={this.controlField} handleValue={this.state.lastName}/>: null }
                        {this.state.currentComponent === "Email" ? <Email next={this.nextClick} prev={this.prevClick} handleChange={this.controlField} handleValue={this.state.email}/>: null }
                        {this.state.currentComponent === "Phone" ? <Phone next={this.nextClick} prev={this.prevClick} handleChange={this.controlField} handleValue={this.state.phone}/>: null }
                        {this.state.currentComponent === "Message" ? <Message submit={this.submitClick} prev={this.prevClick} handleChange={this.controlField} handleValue={this.state.message}/>: null }
                        {this.state.currentComponent === "Submitted" ? <Submitted firstName={this.state.firstName} lastName={this.state.lastName} /> : null }
                    </div>
                </div>
            </div>
        )
    }
}
