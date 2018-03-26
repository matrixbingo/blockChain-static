import React, {Component /*,PropTypes*/} from 'react'
import {Panel, Tabset, Tab} from 'eagle-ui'
import TradeList from './list/TradeList'
import Alert from 'react-s-alert'
import './Index.less'

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabIndex: 0
        }
    }

    callback() {
        //window.console.log('i', index)
    }

    render() {
        return (
            <div>
                <Alert stack={true} timeout={4000}/>
                <Panel className="ea-Panel-margin ea-Panel-width ea-Panel-border ea-Panel-background">
                    <Tabset disableHoverAnimation={true} activeTab={this.state.tabIndex}
                            tabCallback={::this.callback}>
                        <Tab heading='主力列表'>
                            {<TradeList />}
                        </Tab>
                    </Tabset>
                </Panel>
            </div>
        )
    }
}