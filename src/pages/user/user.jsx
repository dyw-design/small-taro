import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './user.css'
import { AtList, AtListItem ,AtAvatar} from "taro-ui"
import setting from '../../images/setting.png'
export default class User extends Component {
  config = {
    navigationBarTitleText: '我的'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='user'>
        <View className='at-row user-info'>
          <View className='at-col at-col-3'>
            <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
          </View>
          <View className='at-col at-col-6 user-name'>购到钱包瘪</View>
          <View className='at-col at-col set'>设置<View className="f-setting"><Image src={setting} className="setting"/></View></View>
        </View>
        <AtList>
            <AtListItem
              title='会员中心'
              arrow='right'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
            <AtListItem
              title='我的记录'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
            <AtListItem
              title='我的优惠'
              extraText='详细信息'
              arrow='right'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
            <AtListItem
              title='我的服务'
              extraText='详细信息'
              arrow='right'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
            <AtListItem
              title='消息推送'
              iconInfo={{ size:25, color: '#78A4FA', value: 'message', }}
              isSwitch
              onSwitchChange={this.handleChange}
            />
        </AtList>
      </View>
    )
  }
}
