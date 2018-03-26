import React, {Component /*,PropTypes*/} from 'react'
import {View} from 'ea-react-dm'
import {RadioPlus} from '../../utils/index'
import TestControl from '../../../../controller/test/TestControl'
import {Grid, Row, Col, Button} from 'eagle-ui'
import '../../../styles/test.less'

@View(TestControl)
export default class RadioPulsTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: {
                1: '上海',
                2: '北京',
                3: '广东'
            },
            list2: [
                {
                    'cityId': 1,
                    'city': '上海'
                },
                {
                    'cityId': 2,
                    'city': '北京'
                },
                {
                    'cityId': 3,
                    'city': '广东'
                }
            ],
            radioPlus: {
                disabled: false,
                viewOnly: false
            }
        }
    }

    clickRadioPlus(type) {
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
        return (
            <Grid fluid>
                <Row>
                    <Col sm={3}>
                        <Row>
                            <Col>
                                <Button onClick={this.clickRadioPlus.bind(this, 1)}>radioPlus disabled</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={this.clickRadioPlus.bind(this, 2)}>radioPlus viewOnly</Button>
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
                            {this.props['testmodel'].get('radioPlus').get('selectId')}
                        </Row>
                        <Row>
                            disabled:{this.state.radioPlus.disabled + ''}
                        </Row>
                        <Row>
                            viewOnly:{this.state.radioPlus.viewOnly + ''}
                        </Row>
                    </Col>
                    <Col sm={7}>
                        <RadioPlus {...this.props} valueLink='testmodel.radioPlus.selectId'
                                   param={{id: 'cityId', name: 'city'}} defaultId="2"
                                   list={this.state.list}
                                   disabled={this.state.radioPlus.disabled}
                                   viewOnly={this.state.radioPlus.viewOnly} />
                    </Col>
                    <Col sm={1}/>
                </Row>
            </Grid>
        )
    }
}
