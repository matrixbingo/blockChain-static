import React, {Component /*,PropTypes*/} from 'react'
import {View} from 'ea-react-dm'
import {SelectPlus} from '../../utils/index'
import TestControl from '../../../../controller/test/TestControl'
import {Grid, Row, Col, Button, Select} from 'eagle-ui'
import '../../../styles/test.less'

@View(TestControl)
export default class SelectPulsTest extends Component {
    constructor(props) {
        super(props)
        //const list = this.props.testmodel.toJS().selectPlus.citys1
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
            },
            options: [
                <option value='bei' key="bei">北京</option>,
                <option value='shang' key="上海">上海</option>,
                <option value='nan' key="南京">南京</option>,
                <option value='3' key="杭州">杭州</option>,
                <option value='4' key="杭州西">杭州西</option>,
                <option value='5' key="杭州北站">杭州北站</option>,
                <option value='6' key="广州">广州</option>,
                <option value='7' key="深圳">深圳</option>,
                <option value='8' key="澳门">澳门</option>,
                <option value='10' key="太原">太原</option>,
                <option value='11' key="台湾">台湾</option>,
                <option value='12' key="香港">香港</option>
            ]
        }
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

    getValue(value, key, type) {
        window.console.log(value, key, type)
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
                            {this.props['testmodel'].get('selectPlus').get('selectId')}
                        </Row>
                        <Row>
                            {'disabled:' + this.state.radioPlus.disabled + ''}
                        </Row>
                        <Row>
                            {'viewOnly:' + this.state.radioPlus.viewOnly + ''}
                        </Row>
                    </Col>
                    <Col sm={7}>
                        <SelectPlus {...this.props} valueLink='testmodel.selectPlus.selectId'
                                    param={{id: 'cityId', name: 'city'}} defaultId="2" defaultName=""
                                    list={this.state.list}
                                    disabled={this.state.radioPlus.disabled}
                                    viewOnly={this.state.radioPlus.viewOnly} autoClear={false}/>
                    </Col>
                </Row>
                <Row>
                    <Select readOnly={true} defaultChecked='上海' getValueCallback={this.getValue.bind(this)} placeholder="请选择"
                            autoClear={false}>
                        {this.state.options}
                    </Select>

                </Row>
            </Grid>
        )
    }
}
