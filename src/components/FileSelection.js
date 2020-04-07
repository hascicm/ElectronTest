import { remote } from 'electron';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class FileSelection extends Component {

    state = {
        fileLocation: '',
        openBtnDisabled: true
    }

    handleClick = () => {
        this.setState((oldState) => {
            return {
                openBtnDisabled: false,
                fileLocation: remote.dialog.showOpenDialog({
                    properties: ['openFile'],
                    filters: [{ name: 'Excel', extensions: ['xlsx'] }]
                })
            }
        });
    }

    openFile = () => {
        console.log('history');
        this.props.history.push({ pathname: '/file', query: { 'file': this.state.fileLocation } });
    }

    render() {

        return (
            <div>
                <label htmlFor="fname">File:  </label>
                <input type="text" id="fname" name="fname" value={this.state.fileLocation} readOnly></input>
                <button onClick={this.handleClick}>Select file</button>
                <br></br>
                <button onClick={() => { this.openFile() }} disabled={this.state.openBtnDisabled}>Open document</button>

            </div>
        )
    }
}
export default withRouter(FileSelection)