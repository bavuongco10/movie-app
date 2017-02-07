import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const loading = require('./img/loading3.gif')
import styles from './styles';
import { connect } from 'react-redux';
import { fetchNowPlaying, onSwiperScrollEnd } from '../../actions/imageSwiper';



// const Slide = ({loadHandle, loaded, uri, i}) => (
//   <View style={styles.slide}>
//     <Image onLoad={loadHandle.bind(null, i)} style={styles.image} source={{uri: uri}} />
//     {
//       !true
//       && <View style={styles.loadingView}>
//         <Image style={styles.loadingImage} source={loading} />
//       </View>
//     }
//   </View>
// );

// const getMovies = () => {
//   const movieUri = 'https://api.themoviedb.org/3/movie/19995?api_key=903aec734823b64427c405dec09fe3ee&append_to_response=casts,images,videos';
//   return axios.get(movieUri)
//     .then(res => {
//       const movies = res.data.images.backdrops.map(item => {
//         return path.join('https://image.tmdb.org/t/p/w780/', item.file_path);
//       });
//       movies.push('http://i.imgur.com/ALXSvL0.jpg');
//     });
// };
//
// export default () => (
//   <View>
//     <Swiper loadMinimal loadMinimalSize={1} style={styles.wrapper} loop={false}>
//       {
//         this.state.imgList.map((item, i) =>
//           <Slide
//             loadHandle={this.loadHandle}
//             loaded={!!this.state.loadQueue[i]}
//             uri={item}
//             i={i}
//             key={i}
//           />
//         )
//       }
//     </Swiper>
//   </View>
// );

// export default class extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       imgList: [],
//       loadQueue: [],
//     }
//     this.loadHandle = this.loadHandle.bind(this)
//   }
//
//   fetchMovies() {
//     const movieUri = 'https://api.themoviedb.org/3/movie/now_playing?api_key=903aec734823b64427c405dec09fe3ee';
//     axios.get(movieUri)
//       .then(res => res.data.results
//         .map(item => path.join('https://image.tmdb.org/t/p/w780/', item.poster_path)))
//       .then(items => this.setState({'imgList': items}));
//   }
//
//   componentDidMount() {
//     this.fetchMovies();
//   }
//
//   loadHandle(i) {
//     let loadQueue = this.state.loadQueue
//     loadQueue[i] = 1
//     this.setState({
//       loadQueue
//     })
//   }
//
//   render() {
//     return (
//       <View>
//         <Swiper loadMinimal loadMinimalSize={1} style={styles.wrapper} loop={false}>
//           {
//             this.state.imgList.map((item, i) =>
//               <Slide
//                 loadHandle={this.loadHandle}
//                 loaded={!!this.state.loadQueue[i]}
//                 uri={item}
//                 i={i}
//                 key={i}
//               />
//             )
//           }
//         </Swiper>
//       </View>
//     )
//   }
// }


const Slide = ({loadHandle, loaded, uri, i}) => (
  <View style={styles.slide}>
    <Image style={styles.image} source={{uri: uri}} />
    {
      !true
      && <View style={styles.loadingView}>
        <Image style={styles.loadingImage} source={loading} />
      </View>
    }
  </View>
);


class ImageSwiper extends Component {
  componentDidMount() {
    this.props.fetchNowPlaying();
  }

  render() {
    return (
      <View>
        <Swiper
          loadMinimal
          loadMinimalSize={1}
          style={styles.wrapper}
          loop={false} height={570}
          showsPagination={false}
          onMomentumScrollEnd = {this.props.onSwiperScrollEnd}
        >
          {
            this.props.items.map((item, i) =>
              <Slide
                uri={item}
                i={i}
                key={i}
              />
            )
          }
        </Swiper>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items,
  hasErrored: state.itemsHasErrored,
  isLoading: state.itemsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchNowPlaying: url => dispatch(fetchNowPlaying()),
  onSwiperScrollEnd: (e, state, context) => dispatch(onSwiperScrollEnd(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageSwiper);
