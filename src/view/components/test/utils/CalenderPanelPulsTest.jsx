import React, {Component /*,PropTypes*/} from 'react'
import {View} from 'ea-react-dm'
import {CalendarPanelPlus} from '../../utils/index'
import TestControl from '../../../../controller/test/TestControl'
import {Grid, Row, Col, Button} from 'eagle-ui'
import '../../../styles/test.less'

@View(TestControl)
export default class CalenderPanelPulsTest extends Component {
    constructor(props) {
        super(props)
        //const list = this.props.testmodel.toJS().selectPlus.citys1
        this.state = {}
    }

    clickSelectPlus(type) {
        if (type === 1) {
            this.setState({
                radioPlus: {
                    disabled: !this.state.radioPlus.disabled
                }
            })
        }
        if (type === 2) {
            this.setState({
                radioPlus: {
                    viewOnly: !this.state.radioPlus.viewOnly
                }
            })
        }
    }

    changetList(type) {
        const citys1 = this.props.testmodel.toJS().selectPlus.citys1
        const citys2 = this.props.testmodel.toJS().selectPlus.citys2
        if (type == 1) {
            this.setState({
                list: citys1
            })
        }
        if (type == 2) {
            this.setState({
                list: citys2
            })
        }
    }

    render() {
        //window.console.log(this.state.list)
        return (
            <Grid fluid>
                <Row>
                    <Col sm={3}>
                        <Row>
                            <Col>
                                <Button onClick={this.clickSelectPlus.bind(this, 1)}>radioPlus disabled</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={this.clickSelectPlus.bind(this, 2)}>radioPlus viewOnly</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={this.changetList.bind(this, 1)}>List-1</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={this.changetList.bind(this, 2)}>List-2</Button>
                            </Col>
                        </Row>
                        <Row>
                            {this.props['testmodel'].get('calenderPanelPuls').get('bin')}
                        </Row>
                    </Col>
                    <Col sm={7}>
                        <CalendarPanelPlus  {...this.props}
                                            startDate="1900-01-01"
                                            valueLink='testmodel.calenderPanelPuls.bin'
                                            placeholder="开始时间"/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
