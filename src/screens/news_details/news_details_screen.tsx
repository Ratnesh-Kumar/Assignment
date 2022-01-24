import Typography from '../../typography/custom_text';
import React, {Component} from 'react';
import moment from 'moment';
import {View, Image, ScrollView} from 'react-native';

class NewDetailsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const news = this.props.route.params.news;

    console.log(news);
    return (
      <ScrollView>
        <View style={{padding: 8.0}}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1642887896814-0818d2d2ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80',
            }}
            style={{height: 220, borderRadius: 8.0}}
          />

          <Typography variant="h2" style={{marginTop:16.0}} >
            {news.title}
          </Typography>

          <Typography variant="body2" style={{marginTop:16.0}}>
          {news.content}
          </Typography>

          <View style={{flexDirection: 'row', marginTop: 16.0,marginBottom:16.0}}>
            <View style={{alignItems: 'flex-start', flex: 1}}>
              <Typography
                variant="caption"
                numberOfLines={1}
                ellipsizeMode="tail">
                 {news.author}
              </Typography>
            </View>

            <View style={{alignItems: 'flex-end', flex: 1}}>
              <Typography
                variant="caption"
                numberOfLines={1}
                ellipsizeMode="tail">
                {moment
                  .utc(news.publishedAt)
                  .local()
                  .startOf('seconds')
                  .fromNow()}
              </Typography>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default NewDetailsScreen;
