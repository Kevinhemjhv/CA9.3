import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React from 'react';

class PopUp extends React.Component {
    constructor(props)
    {
        super(props);
        this.state ={show: true}
    }

    dismiss = () => {
        this.setState({show: false});
    } 

render(){
    
  return(
    <>
    <Modal show = {this.state.show} onClose = {this.dismiss}>
      <Modal.Header>
      <Button onClick={this.dismiss}> Close
      </Button>
        <Modal.Title>{this.props.text}</Modal.Title>
      </Modal.Header>
      {this.props.choices.map((v, idx) => (
        <Button className="me-2" onClick={this.dismiss}>
          Full screen {v}
        </Button>
      ))}
    </Modal>
  </>
  
  );
}
  }


  export default PopUp;