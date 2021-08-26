import React from 'react';
import {FormattedMessage} from 'react-intl';

import poseBodyBlocksIconURL from './posenet/pose-body.png';
import poseHandBlocksIconURL from './posenet/pose-hand.png';
import poseFaceBlocksIconURL from './posenet/pose-face.png';
import teachableMachineBlocksIconURL from './teachable-machine-blocks/teachable-machine-logo.png';
import teachableMachineBlocksInsetIconURL from './teachable-machine-blocks/teachable-machine-blocks-small.svg';


import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

// import posenetIconURL from './posenet/video-sensing.png';
import poseHandInsetIconURL from './posenet/pose-hand-small-3.svg';
import poseFaceInsetIconURL from './posenet/pose-face-small.svg';
import poseBodyInsetIconURL from './posenet/pose-body-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import microbitRobotIconURL from './microbot/microbot.png';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="Microbit Robot"
                description="Name for the 'Microbit Robot' Extension"
                id="gui.extension.microbit-robot.name"
            />
        ),
        extensionId: 'microbitRobot',
        iconURL: microbitRobotIconURL,
        insetIconURL: microbitInsetIconURL,
		bluetoothRequired: true,
        description: (
            <FormattedMessage
                defaultMessage="Use Scratch to program a Microbit smart car robot"
                description="PRG Microbit Robot description"
                id="gui.extension.microbit-robot.description"
            />
        ),
        featured: true
    },
	{
        name: (
            <FormattedMessage
                defaultMessage="Teachable Machine"
                description="Teachable Machine name"
                id="gui.extension.teachable-machine.name"
            />
        ),
        extensionId: 'teachableMachine',
        iconURL: teachableMachineBlocksIconURL,
        insetIconURL: teachableMachineBlocksInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Use Google Teachable Machine models in your Scratch project."
                description="Teachable Machine Description"
                id="gui.extension.teachable-machine.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Virtual Agent"
                description="Agent Name"
                id="gui.extension.avatar.name"
            />
        ),
        hidden: true,
        extensionId: 'avatar',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Program a Virtual Agent"
                description="Teachable Machine Description"
                id="gui.extension.avatar.description"
            />
        ),
        featured: true
    },
    {
        name: "Hand Sensing",
        extensionId: 'poseHand',
        iconURL: poseHandBlocksIconURL,
        insetIconURL: poseHandInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense hand movement with the camera."
                description="PoseNet Description"
                id="gui.extension.pose_hand.description"
            />
        ),
        featured: true
    },
    {
        name: "Face Sensing",
        extensionId: 'poseFace',
        iconURL: poseFaceBlocksIconURL,
        insetIconURL: poseFaceInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense face movement with the camera."
                description="PoseNet Description"
                id="gui.extension.pose_face.description"
            />
        ),
        featured: true
    },
    {
        name: "Body Sensing",
        extensionId: 'poseBody',
        iconURL: poseBodyBlocksIconURL,
        insetIconURL: poseBodyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense body position with the camera."
                description="PoseNet Description"
                id="gui.extension.pose_body.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    }
];
