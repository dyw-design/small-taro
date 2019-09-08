import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './find.css'
import { AtCard } from "taro-ui"
export default class Find extends Component {

  config = {
    navigationBarTitleText: '发现'
  }
  state = {
        moviess:[],
        rank:null
    }
  componentWillMount () { }

  componentDidMount () { 
    Taro.request({
      url: 'https://douban.uieee.com/v2/movie/weekly',
      header: {
        'content-type': 'json'
      }
    }).then(
      res => {
        // console.log('data',res.data.subjects)
        // console.log(this)
        this.setState({
          rank:res.data.subjects.rank,
          moviess:res.data.subjects
      })
    }
      )
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log('moviess',this.state.moviess[0]);
    return (
      <View>
            <View>
              <Text className="week">本周电影口碑榜TOP10</Text>
            </View>
            <View>
              {
                this.state.moviess && this.state.moviess.map((item,index)=>(
                  <View key={index}>  
                    <AtCard 
                        extra={'NO '+item.rank}
                        title={'剧名：'+item.subject.title}
                        isFull
                      >
                        <View>
                          <Navigator url={'/pages/movieDetail/movieDetail?movieId='+ item.subject.id} open-type='navigate'>
                              <Image src={item.subject.images.small} className="movie-average"/>
                          </Navigator>
                        </View>
                    </AtCard>
                  </View>
                ))
              }
            </View>
      </View>
  )
  }
}
