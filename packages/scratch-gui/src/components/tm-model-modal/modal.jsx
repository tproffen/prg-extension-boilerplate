import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import {FormattedMessage} from 'react-intl';

import Box from '../box/box.jsx';
import Button from '../button/button.jsx';
import CloseButton from '../close-button/close-button.jsx';

import backIcon from '../../lib/assets/icon--back.svg';
import helpIcon from '../../lib/assets/icon--help.svg';


import styles from './model-modal.css';

const ModelModalComponent = props => (
    <ReactModal
        isOpen
        className={classNames(styles.modalContent, props.className, {
            [styles.fullScreen]: props.fullScreen
        })}
        contentLabel={props.contentLabel}
        overlayClassName={styles.modalOverlay}
        onRequestClose={props.onRequestClose}
    >
        <div className={classNames(styles.header, props.headerClassName)}>
            {props.onHelp ? (
                <div
                    className={classNames(
                        styles.headerItem,
                        styles.headerItemHelp
                    )}
                >
                    <Button
                        className={styles.helpButton}
                        iconSrc={helpIcon}
                        onClick={props.onHelp}
                    >
                        <FormattedMessage
                            defaultMessage="Help"
                            description="Help button in modal"
                            id="gui.modal.help"
                        />
                    </Button>
                </div>
            ) : null}
            <div
                className={classNames(
                    styles.headerItem,
                    styles.headerItemTitle
                )}
            >
                {props.contentLabel}
            </div>
            <div
                className={classNames(
                    styles.headerItem,
                    styles.headerItemClose
                )}
            >
            </div>
        </div>
        <Box className={styles.body}>
            <Box className={styles.label}>
                Enter model name:
            </Box>
            <Box>
                <input
                    autoFocus
                    className={styles.variableNameTextInput}
                    defaultValue='TM Classifer'
                    name='modelName'
                    onChange={props.onChange}
                    onKeyPress={props.onKeyPress}
                />
            </Box>
            
            <Box className={styles.label}>
                Enter model URL:
            </Box>
            <Box>
                <input
                    autoFocus
                    className={styles.variableNameTextInput}
                    defaultValue='https://teachablemachine.withgoogle.com/models/1MXQWotg9/'
                    name='modelUrl'
                    onChange={props.onChange}
                    onKeyPress={props.onKeyPress}
                />
            </Box>

            <Box className={styles.buttonRow}>
                <button
                    className={styles.cancelButton}
                    onClick={props.onRequestClose}
                >
                    <FormattedMessage
                        defaultMessage="Cancel"
                        description="Button in prompt for cancelling the dialog"
                        id="gui.prompt.cancel"
                    />
                </button>
                <button
                    className={styles.okButton}
                    onClick={props.onRequestSubmit}
                >
                    <FormattedMessage
                        defaultMessage="OK"
                        description="Button in prompt for confirming the dialog"
                        id="gui.prompt.ok"
                    />
                </button>
            </Box>
        </Box>
    </ReactModal>
);

ModelModalComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    contentLabel: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    headerClassName: PropTypes.string,
    onHelp: PropTypes.func,
    onRequestClose: PropTypes.func,
    onRequestSubmit: PropTypes.func,
    onKeyPress: PropTypes.func
};

export default ModelModalComponent;