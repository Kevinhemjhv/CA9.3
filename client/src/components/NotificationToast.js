import { text } from '@fortawesome/fontawesome-svg-core';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
//import ToastContainer from 'react-bootsrap/toast'

class NotificationToast extends React.Component {
    constructor(props)
    {
        super(props);
        this.state ={show: true}
        
    }

    dismiss = () => {
      this.setState({show: false});
  } 

    render() {
       
        return(

<ToastContainer >
<Toast className="d-inline-block m-1" bg= {this.props.backgroundColor} show = {this.state.show} onClose = {this.dismiss}>
    <Toast.Header>
      <button className="me-auto" onclick= {this.props.dismiss}></button>

    </Toast.Header>
    <Toast.Body className={'Dark' && this.props.textColor}>
      {this.props.message}
    </Toast.Body>
  </Toast>
  </ToastContainer>
);}   
}

export default NotificationToast;