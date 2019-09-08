import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './detail.css'
import movie from '../../images/movie.png'
import xinxin from '../../images/xinxin.png'
import morexinxin from '../../images/morexinxin.png'
import zan from '../../images/zan.png'
import xinji from '../../images/xinji.png'
import { AtLoadMore } from 'taro-ui'
export default class Detail extends Component {

  config = {
    navigationBarTitleText: '详情'
  }

  constructor(){
      this.state = {
        title:'哪吒传奇之喜羊羊与灰太狼',
        images:{small:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3246509238,1077330305&fm=58&s=DFD513C6886286D432620FBC0300301F'},
        genres:["动漫"],
        durations:["130分钟"],
        pubdates:["2019-8-20"],
        countries:["中国"],
        movieUrl:'',
        actors:[{avatars:{small:"http://imge.gmw.cn/attachement/jpg/site2/20190730/f44d305ea4881ea9fe7440.jpg"},name:"饺子"}],
        directors:[{avatars:{small:"http://imge.gmw.cn/attachement/jpg/site2/20190730/f44d305ea4881ea9fe7440.jpg"},name:"饺子"}],
        photos:[{thumb:"http://imge.gmw.cn/attachement/jpg/site2/20190730/f44d305ea4881ea9fe7440.jpg"}],
        popular_comments:[{author:{name:"谁带走了我的秀发",avatar:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=571610305,1553276443&fm=26&gp=0.jpg"},content:"啊大将军坚决打击急啊经济西安交大就多久啊第几集啊",created_at:"安徽"}],
        average: 10.0,
        status: 'more'
      }
  }
  seePhotos(e){
    // console.log(e)
    var preview = [];
    console.log(e.target)
    var current = e.target.dataset.src;
    // console.log(current)
    // console.log(this.data.photos);
    this.state.photos.map((item,index)=>{
      preview.push(item.thumb)
    }) 
    Taro.previewImage({
      current: current,
      urls: preview
    })
  }
  seeActors(e){
    // console.log(e)
    var preview = [];
    var current = e.target.dataset.src;
    this.state.actors.map((item,index)=>{
      preview.push(item.avatars.small)
    }) 
    Taro.previewImage({
      current: current,
      urls: preview
    })
  }

  componentWillMount () { }

  componentDidMount () {
    var that = this;
    // console.log('router',this.$router.params.movieId)
    // Taro.showLoading({
    //   title: '加载中',
    // })
    Taro.request({
        url:'https://douban.uieee.com/v2/movie/subject/' + this.$router.params.movieId,
        header: {
          "content-type": "json"//豆瓣要求header的ct类型是json
        },
        success:function(res){
          let actors = [];
          res.data.directors.map((item,index)=>{
            actors.push(item)  
          })
          res.data.casts.map((item,index)=>{
            actors.push(item)  
          })
          res.data.writers.map((item,index)=>{
            actors.push(item)  
          })
          that.setState({
            title: res.data.title,
            images: res.data.images,
            genres: res.data.genres,
            durations: res.data.durations,
            pubdates: res.data.pubdates,
            countries: res.data.countries,
            movieUrl: res.data.trailer_urls[0],
            actors: actors,
            directors: res.data.directors,
            writers: res.data.writers,
            photos:res.data.photos,
            popular_comments: res.data.popular_comments,
            average:res.data.rating.average
          })
          Taro.hideLoading({
            title: '加载中',
          })
          Taro.setNavigationBarTitle({ title: res.data.title + ' « 电影' });
        }
   })
}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick () {
    // 开始加载
    this.setState({
      status: 'loading'
    })
    // 模拟异步请求数据
    setTimeout(() => {
      // 没有更多了
      this.setState({
        status: 'noMore'
      })
    }, 2000)
  }
  render () {
    return (
      <View className='detail'>
        <View className="movie-pre">
            <Video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls  style={{width:'100%',height:'180px'}} >
            </Video>
        </View>
    <View className="bg-color">
      <View className="movie-detail">
          <View className="movie-detail-top">
              <View className="detail-image">
                <Image src={this.state.images.small} lazy-load/>
              </View>
              <View className="detail-des">
                  <View className="movie-title">
                    {this.state.title}
                  </View>
                  <View className="movie-type">
                    <View className="movie-type-pianzhong">
                    {this.state.genres[0]}/{this.state.countries[0]}/{this.state.durations[0]}
                    </View>
                    <View className="moavie-playtime">
                      {this.state.pubdates[1]}
                    </View>
                    <View className="movie-want">
                      120.1万人想看/大V推荐度92%
                      <Image src={movie} lazy-load/>
                    </View>
                  </View>
              </View>
          </View>
          <View className="movie-detail-down">
                <View className="movie-grades">
                  <View className="grades-top">
                    <View className="movie-number">{this.state.average}</View>
                    <image src={xinxin} />
                  </View>
                  <View className="grades-down">
                    毛票票评分 358.2万人评
                  </View>
                </View>    
                <View className="all-xinxin">
                  <Image src={morexinxin} />
                </View>    
          </View>
          <View className="movie-menu">
              <View className="want">
                <Image src={zan} />
                想看
              </View>
              <View className="watched">
                <Image src={xinji}/>
                看过
                </View>
          </View>
      </View>
      <View className="actors">
          <View className="actors-title">
              演职人员
          </View>
          <ScrollView className="hot" scrollX scrollWithAnimation>
            <View class="view-parent">
                {
                    this.state.actors.map((item,index)=>(
                        <View className="actors-detail" key={index}>
                            <View className="actors-icon">
                                <Image src={item.avatars.small} onClick={this.seeActors} lazyLoad dataSrc={item.avatars.small}/>
                            </View>
                            <View className="actors-name">
                            {item.name}
                            </View>
                            <View className="actors-work">
                            演员
                            </View>
                        </View>
                    ))
                }
            </View>
          </ScrollView>
      </View>
      <View class="movie-photos">
            <View class="actors-title">
                剧照
            </View>
            <ScrollView class="hot" scrollX scrollWithAnimation>
            <View class="view-parent">
                {
                    this.state.photos.map((item,index)=>(
                        <View class="actors-photos" key={index}>
                            <Image src={item.thumb} onClick={this.seePhotos} lazyLoad dataSrc={item.thumb}/>
                        </View>
                    )
                )
                }   
             </View>
            </ScrollView> 
      </View>
      <View className="comments">
            <View className="actors-title">
                观众热评
            </View>
            {
                this.state.popular_comments.map((item,index)=>(
                    <View class="comments-item" key={index}>
                      <View class="comments-head">
                          <View class="comments-head-icon">
                              <Image src={item.author.avatar}/>
                          </View>
                          <View class="comments-head-user">
                              <View className="username">{item.author.name}</View>
                              <View className="user-pingfen">
                                <View className="isbuy">购票</View>
                                <Image src={xinxin} />8.0
                              </View>
                          </View>
                      </View>
                      <View class="comments-content">
                          {item.content}
                      </View>
                    <View className="time">
                        <View className="time-left">{item.created_at}</View>
                        <View className="zan"> 
                            <Image src={zan}/>
                            123
                        </View>
                        <View className="msg">
                            <Image src={zan} />
                            123
                        </View> 
                </View>
              </View>
                ))
            }
           <AtLoadMore
            onClick={this.handleClick.bind(this)}
            status={this.state.status}
          />
      </View> 
    </View>
<View className="choose-tickit">
       选座购票
</View> 
</View>
    )
  }
}
