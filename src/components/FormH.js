import React, { Component } from 'react'
import {Form, FormGroup, Input, Label} from 'reactstrap'
import axios from 'axios'     
import jwt_decode from 'jwt-decode'

 class FormH extends Component {
     constructor(props) {
         super(props)
         
         this.state = {      //se initializeaza state pentru obiecte
              hotel:this.props.history.location.state.foo,
              name: null,
              date: null,
              nights: null,
              message: '',
              email: ''
            
         }
         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this) 
         this.handleKeypress = this.handleKeypress.bind(this)
        
     }
     
     handleChange = e => {
         this.setState({[e.target.name]: e.target.value})  // trimite valoarea introdusa in state cu onchange
        
     }
     

     async handleSubmit(e) {   //eventul in care datele sunt trimise spre backend cu onsubmit
         e.preventDefault()
        

         const {hotel,name, date, nights, message, email} = this.state
          if (name && date && nights !=null){ 
            alert('Order sent!')
         const form = await axios.post('/api/form', {  //cu axios se trimit datele spre server
             hotel,
             name,
             date,
             nights,
             message,
             email
         })
         } else{
           alert ('Complete the form!')}
     }
      
	handleKeypress (e) {    // un event pentru a facilita introducerea corecta de integer
    const characterCode = e.key
    if (characterCode === 'Backspace') return

    const characterNumber = Number(characterCode)
    if (characterNumber >= 0 && characterNumber <= 9) {
      if (e.currentTarget.value && e.currentTarget.value.length) {
        return
      } else if (characterNumber === 0) {
        e.preventDefault()
      }
    } else {
			e.preventDefault()
    }
  }
  
  
    render() { // formularul unde sunt introduse datele
      const {foo} = this.props.history.location.state
      const {nights} = this.state
      const {lei} = 'lei'
        return (  
          <div className="wrapper">
          <div className="form-wrapper">
          <Form onSubmit={this.handleSubmit} style={{ width:'600px'}}>       
          <FormGroup>
          <Label for="hotel">Hotel</Label>
        <Input readOnly
        type="text" 
        name="hotel"
        value={foo}
        onChange={this.handleChange}
        >
            </Input>
            </FormGroup>

              <FormGroup>
                  <Label for="name">Name:</Label>
                  <Input
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                  onChange={this.handleChange}/>
                  
              </FormGroup>

              <FormGroup>
                  <Label for="name">CheckIn:</Label>
                  <Input
                  type="date"
                  name="date"
                  onChange={this.handleChange}/>
              </FormGroup>
              
              <FormGroup>
                  <Label for="name">Nights:</Label>
                  <Input
                  type="number" 
                  onKeyDown={this.handleKeypress}
                  onBlur={this.handleBlur}
                  min='1' step='1'
                  name="nights"
                  placeholder="Enter how many nights you're staying...."
                  onChange={this.handleChange}/>
              </FormGroup>

              <FormGroup>
              
                  <Label for="name">Price:</Label>
                  <Input readOnly
                  type="text" 
                  name="price" 
                  value={nights * 75 + ' lei'}
                 />
              </FormGroup>
              <FormGroup>
                  <Label for="name">Message:</Label>
                  <Input
                  type="textarea"
                  name="message"
                  placeholder="Optional…"
                  onChange={this.handleChange}/>
              </FormGroup>
              <div className="submitForm">
              <button>Submit</button>
              </div>
          </Form>
          </div>
          </div>
        )
    }
}

export default FormH
