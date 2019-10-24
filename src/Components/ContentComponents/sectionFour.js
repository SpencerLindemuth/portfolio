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
    }

    nextClick = () => {
        this.setState({
            currentComponent: this.state.formComponents[this.state.index + 1],
            index: this.state.index + 1
        })
    }

    controlField = (ev) => {
        switch(ev.target.id){
            case "firstName" :
                this.setState({
                    firstName: ev.target.value
                })
            case "lastName" :
                    this.setState({
                        lastName: ev.target.value
                    })
            case "email" :
                    this.setState({
                        email: ev.target.value
                })  
            case "phone" :
                    this.setState({
                        phone: ev.target.value
                    })
            case "message" :
                    this.setState({
                        message: ev.target.value
                    })
        }
    }

    submitClick = () =>{
        this.setState({
            currentComponent: "Submitted"
        })
    }

    render(){
        return(
            <div className="parallax Four" id="contact-div">
                <div className="content hidden" id="contact-content">
                    <h1>Contact Me!</h1>
                    <div id="formComponent">
                        {this.state.currentComponent === "FirstName" ? <FirstName next={this.nextClick} handleChange={this.controlField} handleValue={this.state.firstName}/>: null }
                        {this.state.currentComponent === "LastName" ? <LastName next={this.nextClick} handleChange={this.controlField} handleValue={this.state.lastName}/>: null }
                        {this.state.currentComponent === "Email" ? <Email next={this.nextClick} handleChange={this.controlField} handleValue={this.state.email}/>: null }
                        {this.state.currentComponent === "Phone" ? <Phone next={this.nextClick} handleChange={this.controlField} handleValue={this.state.phone}/>: null }
                        {this.state.currentComponent === "Message" ? <Message submit={this.submitClick} handleChange={this.controlField} handleValue={this.state.message}/>: null }
                        {this.state.currentComponent === "Submitted" ? <Submitted firstName={this.state.firstName} lastName={this.state.lastName} /> : null }
                    </div>
                </div>
            </div>
        )
    }
}
