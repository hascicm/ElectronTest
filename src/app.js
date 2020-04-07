import React from 'react';
import FileSelection from './components/FileSelection';
import Navigation from './components/Navigation';

export default class App extends React.Component {
    dummy = () => {
        // Just to test arrow functions
    }

    render() {

        return (
            <div className={'hello'}>
                <Navigation></Navigation>
            </div>
        );
    }
}
