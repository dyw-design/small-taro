import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './cart.css'

export default class Cart extends Component {

  config = {
    navigationBarTitleText: '演出'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { 
    
  }

  componentDidHide () { }

  render () {
    return (
      <View className='cart'>
        <Text>cart</Text>
      </View>
    )
  }
}
