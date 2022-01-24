import React, {Component, Image} from 'react';
import axios from 'axios';
import moment from 'moment';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Typography from '../../typography/custom_text';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      fromAxios: false,
      dataSource: [],
      axiosData: null,
    };
  }

  goForAxios = () => {
    this.setState({
      fromFetch: false,
      loading: true,
    });
    axios
      .get(
        'https://newsapi.org/v2/everything?q=bitcoin&from=2021-12-23&sortBy=publishedAt&apiKey=5c01e048e22043f094838b86ef23e9a0',
      )
      .then(response => {
        console.log('getting data from axios', response.data['articles']);
        setTimeout(() => {
          this.setState({
            loading: false,
            axiosData: response.data['articles'],
          });
        }, 2000);
      })
      .catch(error => {
        console.log(error);
      });
  };

  FlatListSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
    );
  };
  renderItem = data => {
    return (
      <TouchableOpacity
        style={{borderRadius: 8.0, backgroundColor: '#ffffff', margin: 4.0}}
        onPress={() =>
          this.props.navigation.navigate('NewDetailsScreen', {news: data.item})
        }>


<View style={{padding: 8.0, flexDirection:'row'}} >

{/* <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1642887896814-0818d2d2ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80',
            }}
            style={{height: 100, width:100, borderRadius: 8.0}}
          />  */}

<View style={{padding: 8.0}}>
          <Typography variant="h2" numberOfLines={1} ellipsizeMode="tail">
            {data.item.title ?? 'Not availabe'}
          </Typography>

          <View style={{flexDirection: 'row', marginTop: 8}}>
            <View style={{alignItems: 'flex-start', flex: 1}}>
              <Typography
                variant="caption"
                numberOfLines={1}
                ellipsizeMode="tail">
                {data.item.author}
              </Typography>
            </View>

            <View style={{alignItems: 'flex-end', flex: 1}}>
              <Typography
                variant="caption"
                numberOfLines={1}
                ellipsizeMode="tail">
                {moment
                  .utc(data.item.publishedAt)
                  .local()
                  .startOf('seconds')
                  .fromNow()}
              </Typography>
            </View>
          </View>
        </View>

</View>

      
      </TouchableOpacity>
    );
  };

  componentWillMount() {
    this.goForAxios();
  }

  render() {
    const {dataSource, fromAxios, loading, axiosData} = this.state;
    return (
      <View style={{flex: 1, padding: 8}}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={axiosData}
            renderItem={item => this.renderItem(item)}
          />
        )}
      </View>
    );
  }
}

export default HomeScreen;
