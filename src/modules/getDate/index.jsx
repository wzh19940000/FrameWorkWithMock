import React from 'react'
import connect from '@connect'
import styled from 'styled-components'
import { bar } from './a'
import { bar as bar2} from './b'

// 如果文件a，b  export的组件名称相同(例如都是name)，可使用 import { name as name1 } from 'xxx' 来规避重复声明的错误

const Root = styled.div``

@connect('getDate')
export default class GetDate extends React.Component {
    async componentDidMount() {
        await this.props.loadDate()
    }

    render() {
        console.log('num+++++++++++++++')
        console.log(bar())
        console.log(bar2())
        return (
            <Root>
                <span>{this.props.nowDate}</span>
                <br/>
                <button onClick={this.props.loadDate}>Load nowDate</button>
            </Root>            
        )
    }
}