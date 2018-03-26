import React from 'react'
import AlertContainer from 'react-alert'
import Component from '../../utils/base/ComponentMsg'

export default class AlertContainerTest extends Component {
    render () {
        return (
            <div>
                <AlertContainer ref={a => this.msg = a} {...this.msgOptions} />
                <button onClick={this.showMsg.bind(this, 'error', '阿萨飒飒是')}>Show Alert</button>
            </div>
        )
    }
}