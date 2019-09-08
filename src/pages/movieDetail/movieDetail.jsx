import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './movieDetail.css'

export default class movieDetail extends Component {

  config = {
    navigationBarTitleText: '周榜详情'
  }

  constructor(){
    super(...arguments)
    this.state = {
      title:'',
      director:"",
      pubdate:'',
      image:'',
      summary:''
    }
  }
  componentWillMount () { }

  componentDidMount () {
    // console.log('i love you'); 
    // console.log('hello',this.$router.params)
    Taro.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + this.$router.params.movieId,
      header: {
        'content-type': 'json'
      }
    }).then(res =>
        {
          // console.log('movie-detail',res.data)
          let data = res.data
          this.setState({
            title:data.title,
            director:data.directors[0].name,
            pubdate:data.pubdate,
            image:data.images.large,
            summary:data.summary
          })
        } 
      )
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='find'>
        <View className='at-article'>
          <View className='at-article__h1'>
            {/* {this.state.title} */}
          </View>
          <View className='at-article__info'>
            导演:{this.state.director}
          </View>
          <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='at-article__h2'>上映时间:{this.state.pubdate}</View>
            <View className='at-article__p'>
                {this.state.summary}
            </View>
            <Image 
              className='at-article__img' 
              src={this.state.image} 
              mode='widthFix' />
          </View>
  </View>
        </View>
      </View>
    )
  }
}
