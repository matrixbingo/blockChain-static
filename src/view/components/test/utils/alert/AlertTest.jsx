import React from 'react'
import Component from '../../../utils/base/ComponentMsg'
import buttonsStyles from './buttons.less'
import styles from './home.css'
import Alert from 'react-s-alert'

import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import 'react-s-alert/dist/s-alert-css-effects/flip.css'
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css'


export default class AlertTest extends Component {
    // positions
    handleTop(e) {
        e.preventDefault()
        Alert.success('Test message top!', {
            position: 'top'
        })
    }
    // effects
    handleSlide(e) {
        e.preventDefault()
        Alert.success('Test message slide effect!', {
            position: 'top-right',
            effect: 'slide'
        })
    }

    handleScale(e) {
        e.preventDefault()
        Alert.info('Test message scale effect!', {
            position: 'top-right',
            effect: 'scale'
        })
    }
    // offset
    handleOffset(e) {
        e.preventDefault()
        Alert.warning('Test message offset!', {
            position: 'top-right',
            effect: 'flip',
            offset: 80
        })
    }
    // HTML
    handleHtml(e) {
        e.preventDefault()
        Alert.info('<h4>Test message with HTML!</h4><ul><li>List item 1!</li><li>List item 2!</li></ul>', {
            position: 'top-right',
            effect: 'slide',
            html: true
        })
    }
    // beep
    handleBeep(e) {
        e.preventDefault()
        Alert.error('Test message with beep!', {
            position: 'top-right',
            effect: 'flip',
            beep: 'http://s-alert-demo.meteorapp.com/beep.mp3'
        })
    }
    // callbacks
    handleOnShow(e) {
        e.preventDefault()
        Alert.success('Test message onShow callback!', {
            position: 'top-right',
            effect: 'stackslide',
            onShow: function () {
                alert('onShow callback fired!')
            }
        })
    }
    handleOnClose(e) {
        e.preventDefault()
        Alert['error']('Test message onClose callback!', {
            position: 'top-right',
            effect: 'slide',
            onClose: function () {
                alert('onClose callback fired!')
            }
        })
    }
    // close all
    handleCloseAll(e) {
        e.preventDefault()
        Alert.closeAll()
    }
    render() {
        return (
            <div className={styles.cf}>
                <div className={styles.cf}>
                    <h3>Different positions: </h3>
                    <a href="#" className={buttonsStyles.buttonSuccess} onClick={this.handleTop}>top</a>
                </div>
                <div className={styles.cf}>
                    <h3>Different effects <small>(All here are 'top-right' - could be changed)</small>:</h3>
                    <a href="#" className={buttonsStyles.buttonSuccess} onClick={this.handleSlide}>slide</a>
                    <a href="#" className={buttonsStyles.buttonInfo} onClick={this.handleScale}>scale</a>
                </div>
                <div className={styles.cf}>
                    <h3>Offset demo <small>(Offset 80px from the top)</small>:</h3>
                    <a href="#" className={buttonsStyles.buttonSuccess} onClick={this.handleOffset}>offset 80px</a>
                </div>
                <div className={styles.cf}>
                    <h3>HTML demo <small>(Message with HTML formating)</small>:</h3>
                    <a href="#" className={buttonsStyles.buttonInfo} onClick={this.handleHtml}>message with HTML</a>
                    <a href="#" className={buttonsStyles.buttonDefault} onClick={this.handleCloseAll}>Close All</a>
                </div>
                <div className={styles.cf}>
                    <h3>Alert with audio: </h3>
                    <a href="#" className={buttonsStyles.buttonError} onClick={this.handleBeep}>Beep alert</a>
                    <a href="#" className={buttonsStyles.buttonDefault} onClick={this.handleCloseAll}>Close All</a>
                </div>
                <div className={styles.cf}>
                    <h3>Alert callbacks demo: </h3>
                    <a href="#" className={buttonsStyles.buttonSuccess} onClick={this.handleOnShow}>onShow callback</a>
                    <a href="#" className={buttonsStyles.buttonError} onClick={this.handleOnClose}>onClose callback</a>
                    <a href="#" className={buttonsStyles.buttonDefault} onClick={this.handleCloseAll}>Close All</a>
                </div>
                <Alert stack={true} timeout={3000} />
            </div>
        )
    }
}