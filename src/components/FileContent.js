import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';

class FileContent extends Component {

    state = { tableHtml: "" }

    read = () => {
        const fileName = this.props.location.query.file[0];
        console.log(fileName);
        var xlsx = require('xlsx');
        var obj = xlsx.readFile(fileName); // parses a file
        console.log(xlsx.utils.sheet_to_json(obj.Sheets[obj.SheetNames[0]]));
        this.setState(oldState => {
            return {
                tableHtml: xlsx.utils.sheet_to_html(obj.Sheets[obj.SheetNames[0]])
            }
        })
    }
    write = () => {
        
    }
    goBack = () => {
        this.props.history.push('/');
    }

    render() {

        return (
            <div>
                <div>
                    <button onClick={() => { this.read() }}>Read</button>
                    <button onClick={() => { this.write() }}>Write</button>

                    <br></br>
                    <button onClick={() => { this.goBack() }}>Back</button>
                </div>
                <br></br>
                {ReactHtmlParser(this.state.tableHtml)}
            </div>
        )
    }
}
export default withRouter(FileContent)