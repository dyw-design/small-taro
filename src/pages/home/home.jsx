import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Swiper,SwiperItem,Image,Navigator,ScrollView} from '@tarojs/components'
import './home.css'
import { AtSearchBar,AtGrid,AtCountdown ,AtNoticebar,AtCurtain,AtButton } from 'taro-ui'
import curtainPng from '../../images/adv.jpg';
export default class Home extends Component {
  
  config = {
    navigationBarTitleText: '首页'
  }
  
  constructor(){
    super(...arguments)
    this.state = {
      value: '',
      banners: [
        {"images":{"small":'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2565260369,2902266407&fm=26&gp=0.jpg'}},
        {"images":{"small":'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2777367841,1393292491&fm=26&gp=0.jpg'}},
        {"images":{"small":'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=463772127,3536237914&fm=111&gp=0.jpg'}}
      ],
      movies: [
        { "title": "挪吒之魔童降世", "images": { "small": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3246509238,1077330305&fm=58&s=DFD513C6886286D432620FBC0300301F" }}, {"title": "  挪 吒之魔童降世", "images":{"small": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2675930925,104864594&fm=58&s=328240A646F3CBDC0ABDBFBE0300000D"}}, {"title": "挪吒之魔童降世", "images":{ "small": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3504571197,860903245&fm=58&s=85E6F804DC3382D47C096C930300D093"}},{ "title": "挪吒之魔童降世", "images":{"small": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4063717411,2588265009&fm=58&s=5AB425C4C027C4EF4E9664190300809A" }},{"title":"挪吒之魔童降世", "images": {"small":"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3687880975,995972467&fm=58&s=AE9A6C875AD363F7143DA8860300C060"} }, {"title": "挪吒之魔童降世","images":{ "small": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=81238412,1007919128&fm=58&s=50E5B944CC0AD0D4449194880300D09B"}},{"title": "挪吒之魔童降世", "images": { "small": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2512763846,3067531314&fm=58&s=9102AEFBD3A7E4EE4437527303008074" }
        }
        ],    
      soonMovies: [
        { "title": "挪吒之魔童降世", "images": { "small": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3246509238,1077330305&fm=58&s=DFD513C6886286D432620FBC0300301F" }}, {"title": "  挪 吒之魔童降世", "images":{"small": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2675930925,104864594&fm=58&s=328240A646F3CBDC0ABDBFBE0300000D"}}, {"title": "挪吒之魔童降世", "images":{ "small": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3504571197,860903245&fm=58&s=85E6F804DC3382D47C096C930300D093"}},{ "title": "挪吒之魔童降世", "images":{"small": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4063717411,2588265009&fm=58&s=5AB425C4C027C4EF4E9664190300809A" }},{"title":"挪吒之魔童降世", "images": {"small":"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3687880975,995972467&fm=58&s=AE9A6C875AD363F7143DA8860300C060"} }, {"title": "挪吒之魔童降世","images":{ "small": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=81238412,1007919128&fm=58&s=50E5B944CC0AD0D4449194880300D09B"}},{"title": "挪吒之魔童降世", "images": { "small": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2512763846,3067531314&fm=58&s=9102AEFBD3A7E4EE4437527303008074" }
        }
        ], 
        isOpened: true,   
    }
  }
  
  componentWillMount () { }

  componentDidMount () {
    const that = this;
    Taro.showLoading({
      title: '加载中',
    })
    Taro.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      data: { start: 5, count:4},
      header: {
        "content-type": "json"//豆瓣要求header的ct类型是json
      },
      success: function (res) {
        // console.log('banners', res.data.subjects)
        that.setState({
          banners: res.data.subjects
        })
        Taro.hideLoading({
          title: '加载中',
        })
      }
    })
    Taro.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      data: { start: 0, count: 8 },
      header: {
        "content-type": "json"//豆瓣要求header的ct类型是json
      },
      success: function (res) {
        that.setState({
          movies: res.data.subjects
        })
        // console.log('success', res.data.subjects)
        Taro.hideLoading({
          title: '加载中',
        })
      }
    })
    Taro.request({
      url: 'https://douban.uieee.com/v2/movie/coming_soon',
      data: { start: 0, count: 8 },
      header: {
        "content-type": "json"//豆瓣要求header的ct类型是json
      },
      success: function (res) {
        // console.log('soon', res.data.subjects)
        that.setState({
          soonMovies: res.data.subjects
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
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }
  handleChange () {
    this.setState({
      isOpened: true
    })
  }
  onClose () {
    this.setState({
      isOpened: false
    })
  }
  render () {
    return (
      <View className='home'>
        <AtSearchBar
            showActionButton
            value={this.state.value}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
          />
      <Swiper indicator-dots="true"
      autoplay="true" interval="5000" duration="1000" circular>
      {
        this.state.banners.map((item,index)=>(
            <Navigator url={'/pages/detail/detail?movieId='+item.id} open-type='navigate' key={index}>
              <SwiperItem>
                  <Image src="{{item.images.small}}" lazy-load className="slide_image"/>
              </SwiperItem>
            </Navigator>  
        ))
      }
    </Swiper>
      <AtGrid columnNum={4} data={[
            {
              value: '领取中心',
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            },
            {
              value: '找折扣',
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png'
            },
            {
              value: '领会员',
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            },
            {
              value: '新品首发',
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            }
          ]} 
      />
    <View className="hot-movie-top">
      <View className="hot-play">热映影片></View>
      <View className="hot-movie-tickits">周票房榜</View>
    </View> 
    <ScrollView className="hot" scrollX scrollWithAnimation>
      <View className="view-parent">
        {
            this.state.movies.map((item,index)=>(
              <View className="hot-movie" key={index}>
                  <View className="hot-movie-item">
                      <Navigator url="/pages/detail/detail?movieId={{item.id}}" open-type='navigate'>
                        <Image src={item.images.small} lazy-load/>
                        <View className="movie-title">
                          {item.title}
                        </View>
                      </Navigator>
                      <View className="movie-rank">
                          国漫票房新纪录
                      </View>
                      <View className="buy-ticket">购票</View>  
                  </View>
              </View>
            ))
        }
      </View>
    </ScrollView>
    <AtNoticebar marquee>
      <View className="movie-time">
      距离《检查方的罪人》上映还有
      <AtCountdown
        isCard
        day={3}
        minutes={10}
        seconds={10}
      />
    </View>  
</AtNoticebar>
    <View className="hot-movie-top">
      <View className="hot-play">即将上映></View>
      <View className="hot-movie-tickits">more</View>
    </View>

    <ScrollView className="hot" scrollX scrollWithAnimation>
      <View className="view-parent">
        {
            this.state.soonMovies.map((item,index)=>(
              <View className="hot-movie" key={index}>
                  <View className="hot-movie-item">
                      <Navigator url="/pages/detail/detail?movieId={{item.id}}" open-type='navigate'>
                        <Image src={item.images.small} lazy-load/>
                        <View className="movie-title">
                          {item.title}
                        </View>
                      </Navigator>
                      <View className="movie-rank">
                          国漫票房新纪录
                      </View>
                      <View className="buy-ticket">购票</View>  
                  </View>
              </View>
            ))
        }
      </View>
    </ScrollView>
    <AtCurtain
        isOpened={this.state.isOpened}
        onClose={this.onClose.bind(this)}
      >
        <Image
          style='width:100%;height:250px'
          src={curtainPng}
        />
      </AtCurtain>
      <AtButton
        onClick={this.handleChange.bind(this)}>
        右上关闭幕帘
      </AtButton>
    </View>
    )
  }
}
