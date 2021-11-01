import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoundsMode  from './RoundsMode.js';
import RoundsTable from './RoundsTable.js';
import RoundForm from './RoundForm.js';
import FloatingButton from './FloatingButton.js'
import NotificationToast from './NotificationToast.js'
import PopUp from './PopUp.js'

class RoundsPage extends React.Component {
    constructor(props) {
            super(props);
            
            this.state = {mode: RoundsMode.ROUNDSTABLE,
                          deleteId: -1,
                          editId: -1,
                          message: "test message",
                          backgroundColor: 'secondary',
                          textColor: 'text-black',
                          show: true,
                          text: "DEFAULT TEXT",
                        };    

                            
    }

            choice1TextString = "choice1TextString"
            choice2TextString = "choice2TextString"
            choices = [this.choice1TextString,
                this.choice2TextString
            ]

    choice1Function= () =>
    {
        alert("choice1TextString")
    }

    choice2Function= () =>
    {
        alert("choice2TextString")
    }


    dismiss= () =>
    {
  this.setState({show: false})
    }

    initiateEditRound = (val) => {
        this.setState({editId: val,
                       mode: RoundsMode.EDITROUND}, 
                       this.props.toggleModalOpen);
    }
    
    initiateDeleteRound = (val) => {
        this.setState({deleteId: val},
        () => alert("Confirm delete goes here!"));
    }

    render() {
        switch (this.state.mode) {
        case RoundsMode.ROUNDSTABLE: 
            return (
                <>
                    <RoundsTable rounds={this.props.rounds}
                                initiateDeleteRound={this.initiateDeleteRound}
                                deleteRound={this.props.deleteRound} 
                                deleteId={this.state.deleteId}
                                initiateEditRound= {this.initiateEditRound}
                                updateRound= {this.props.updateRound}
                                setMode={this.setMode} 
                                toggleModalOpen={this.props.toggleModalOpen}
                                menuOpen={this.props.menuOpen} /> 
                    <FloatingButton
                        icon="calendar"
                        label={"Log Round"}
                        menuOpen={this.props.menuOpen}
                        action={()=>this.setState({mode: RoundsMode.LOGROUND},
                                    this.props.toggleModalOpen)} />
            </>
            );
        case RoundsMode.LOGROUND:
            
            return (
                <div>
            <NotificationToast
            message = {this.state.message}
            backgroundColor = {this.state.backgroundColor}
            textColor = {this.state.textColor}
            show = {this.state.show}
            dismiss = {this.dismiss}
            />
            <PopUp
                text = {this.state.text}
                choices = {this.choices}
            />
                
            <RoundForm mode={this.state.mode}
                    roundData={null}
                    saveRound={this.props.addRound}
                    setMode={this.setMode}
                    toggleModalOpen={this.props.toggleModalOpen} />
                    </div>
            );
        case RoundsMode.EDITROUND:
            let i;
            for (i = 0; i < this.props.rounds.length; ++i) {
                if (this.props.rounds[i].roundNum === this.state.editId) {
                    break;
                }
            }
            return (
            <RoundForm mode={this.state.mode}
                roundData={this.props.rounds[i]}
                saveRound={this.props.updateRound}
                setMode={this.setMode}
                toggleModalOpen={this.props.toggleModalOpen} />
            );
        }
    }  

}

export default RoundsPage;