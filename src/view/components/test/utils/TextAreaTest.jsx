import React, { Component /*,PropTypes*/} from 'react'
import {View} from 'ea-react-dm'
import {TextArea} from '../../utils/index'
import TestControl from '../../../../controller/test/TestControl'
import {Grid, Row, Col, Button} from 'eagle-ui'
import '../../../styles/test.less'

@View(TestControl)
export default class TestTestArea extends Component{
    constructor(props) {
        super(props)
        this.state = {
            textArea: {
                disabled: false,
                viewOnly: false
            }
        }
    }

    clickTextArea(type) {
        if (type === 1) {
            this.setState({
                textArea: {
                    disabled: !this.state.textArea.disabled
                }
            })
        }
        if (type === 2) {
            this.setState({
                textArea: {
                    viewOnly: !this.state.textArea.viewOnly
                }
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
                                <Button onClick={this.clickTextArea.bind(this, 1)}>textArea disabled</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={this.clickTextArea.bind(this, 2)}>TextArea viewOnly</Button>
                            </Col>
                        </Row>
                        <Row>
                            {this.props['testmodel'].get('textArea').get('value')}
                        </Row>
                    </Col>
                    <Col sm={7}>
                         <TextArea {...this.props} valueLink='testmodel.textArea.value'
                                   disabled={this.state.textArea.disabled}
                                   viewOnly={this.state.textArea.viewOnly} />
                    </Col>
                    <Col sm={1} />
                </Row>
            </Grid>
        )
    }
}
