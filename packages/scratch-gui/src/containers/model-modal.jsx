import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import ModelModalComponent from '../components/tm-model-modal/modal.jsx';


class TMModelModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'onOK',
            'onClose',
            'onChange',
            'onHelp'
        ]);
        this.state = {
            modelName: 'Model',
            modelUrl: 'https://teachablemachine.withgoogle.com/models/1MXQWotg9/'
        };
    }
    get id () {
        return 'tm-model-modal';
    }
    onHelp() {
        console.log("Help requested");
    }
    onClose() {
        console.log("Closing");
    }
    onOK() {
        console.log("onOK");
        console.log("Submitting");
        console.log("Closing");
    }
    onChange (e) {
        if (e.target.name == 'modelName')
            this.setState({'modelName': e.target.value});
        if (e.target.name == 'modelUrl')
            this.setState({'modelUrl': e.target.value})
            
        console.log("state: " + this.state['modelName']);
        console.log("state: " + this.state['modelUrl']);
    }
    onKeyPress (e) {
        if (e.key === 'Enter') console.log("Closing");
    }
    render () {
        return <ModelModalComponent
            contentLabel={"Add Teachable Machine Model"}
            fullScreen={false}
            onHelp={this.onHelp}
            onRequestClose={this.onClose}
            onRequestSubmit={this.onOK}
            onKeyPress={this.onKeyPress}
            onChange={this.onChange}
        />;
    }
}

TMModelModal.propTypes = {
    onRequestSubmit: PropTypes.func,
    onRequestClose: PropTypes.func,
    onRequestOpen: PropTypes.func,
    modelName: PropTypes.string,
    modelUrl: PropTypes.string
};

export default TMModelModal;