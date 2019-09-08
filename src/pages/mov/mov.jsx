import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Navigator,ScrollView} from '@tarojs/components'
import './mov.css'
import { AtTabs, AtTabsPane } from 'taro-ui'
export default class Mov extends Component {
  config = {
    navigationBarTitleText: '电影列表'
  }
  constructor(){
    super(...arguments);
    this.state = {
      active: 0,
      movies:[],
      address:"",
      show: false,
      current: 0,
    }
  }
  componentWillMount () { 
    console.log("willMount")
  }

  componentDidMount () { 
    var that = this;
    Taro.showLoading({
      title: '加载中',
    })
    Taro.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      data: { start: 0, count: 20 },
      header: {
        "content-type": "json"//豆瓣要求header的ct类型是json
      },
      success: function (res) {
        console.log('movie',res.data.subjects)
        that.setState({
          movies: res.data.subjects
        })
        Taro.hideLoading({
          title: '加载中',
        })
      }
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (value) {
    this.setState({
      current: value
    })
  }
  render () {
    return (
      <View className='movie'>
        <View className="content">
            <AtTabs
              animated={false}
              current={this.state.current}
              tabList={[{ title: '正在热映' },{ title: '即将上映' }]}
              onClick={this.handleClick.bind(this)}
            >
              <AtTabsPane current={this.state.current} index={0} >
                <View style='background-color: #FAFBFC;' >
                <ScrollView scrollY scrollWithAnimation>
                  {
                    this.state.movies.map((item,index)=>(
                      <View className="movie-detail" key={index}>
                          <View className="movie-detail-top">
                          <Navigator url="/pages/detail/detail?movieId={{item.id}}" open-type='navigate'>
                              <View className="detail-image">
                                <Image src={item.images.small}/>
                              </View>
                          </Navigator>    
                              <View className="detail-des">
                                  <View className="movie-title">
                                    {item.title}
                                  </View>
                                  <View className="movie-style">
                                    <View className="pinfen">
                                      <View className="movie-tao">淘票票评分</View>
                                      <View className="movie-num">8.5</View>
                                    </View>
                                    <View className="director">导演：{item.directors[0].name}</View>
                                    <View className="actors">主演：{item.casts[0].name}</View>
                                    <View className="movie-type">
                                      <View className="movie-type-pianzhong">
                                      {item.genres[0]}/{item.durations[0]}
                                      </View>
                                      <View className="movie-playtime">
                                        {item.pubdates[1]}
                                      </View>
                                    </View>
                                  </View>
                              </View>
                              <View className="isbuy">购票</View>
                          </View>
                      </View>
                    ))
                  }
                </ScrollView> 
            </View> 
          </AtTabsPane> 
              <AtTabsPane current={this.state.current} index={1}> 
                 <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
              </AtTabsPane> 
             </AtTabs> 
         </View>  
      </View>
    )
  }
}
