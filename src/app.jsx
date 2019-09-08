import Taro, { Component } from '@tarojs/taro'
import Index from './pages/home/home'
import 'taro-ui/dist/style/index.scss'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/home/home',
      'pages/find/find',
      'pages/movieDetail/movieDetail',
      'pages/mov/mov',
      'pages/detail/detail',
      'pages/cart/cart',
      'pages/user/user'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '破电影',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "color": "#000",
      "selectedColor": "#ff4095",
      "backgroundColor": "#fff",
      "list": [
        {
          "pagePath": "pages/home/home",
          "text": "首页",
          "iconPath": "./images/home.png",
          "selectedIconPath": "./images/home_active.png"
        },
        {
          "pagePath": "pages/mov/mov",
          "text": "电影",
          "iconPath": "./images/movie.png",
          "selectedIconPath": "./images/movie_active.png"
        },
        {
          "pagePath": "pages/find/find",
          "text": "发现",
          "iconPath": "./images/find.png",
          "selectedIconPath": "./images/find_active.png"
        },
        {
          "pagePath": "pages/cart/cart",
          "text": "演出",
          "iconPath": "./images/show.png",
          "selectedIconPath": "./images/show_active.png"
        },
        {
          "pagePath": "pages/user/user",
          "text": "我的",
          "iconPath": "./images/user.png",
          "selectedIconPath": "./images/user_active.png"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
