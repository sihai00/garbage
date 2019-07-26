import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Actions from '../../actions/action'
import './index.scss'

interface Props {
  test: number,
  list: Array<any>,
  change: (payload: { test: any }) => any,
  getTopics: (payload?: any) => any
}

const mapStateToProps = ({ index }) => ({
  test: index.test,
  list: index.list
})
const mapDispatchToProps = ({
  change: (num: any) => Actions('index/update', { test: num }),
  getTopics: () => Actions('index/getTopics')
})
@connect(mapStateToProps, mapDispatchToProps)

class Index extends Component<Props, any> {
  config: Config = {
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: '首页',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light'
  }
  componentWillReceiveProps (nextProps: any) {
    console.log(nextProps, 'list')
  }
  componentDidMount () {
    this.props.getTopics()
  }
  render () {
    const {test, list} = this.props
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.change.bind(this, this.props.test + 1)}>+</Button>
        <Button className='dec_btn' onClick={this.props.change.bind(this, this.props.test - 1)}>-</Button>
        <View><Text>{test}</Text></View>
        <View><Text>Hello, World</Text></View>
        {
          list.map(v => <View key={v.id}>{v.title}</View>)
        }
      </View>
    )
  }
}

export default Index
