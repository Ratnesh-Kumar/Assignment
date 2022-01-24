import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import Typography from '../../typography/custom_text';

interface Props {}

const HomeScreen2 = (props: Props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=bitcoin&from=2021-12-23&sortBy=publishedAt&apiKey=5c01e048e22043f094838b86ef23e9a0',
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{flex: 1, padding: 8}}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data.articles}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                borderRadius: 8.0,
                backgroundColor: '#ffffff',
                margin: 4.0,
              }}
              onPress={() =>
                props.navigation.navigate('NewDetailsScreen', {news: item})
              }>
              <View style={{padding: 8.0, flexDirection: 'row'}}>
                <Image
                  source={{
                    uri: data.urlToImage,
                  }}
                  style={{height: 100, width: 100, borderRadius: 8.0}}
                />
                <View style={{margin: 16.0}}>
                  <Typography
                    variant="h2"
                    numberOfLines={2}
                    ellipsizeMode="tail">
                    {item.title ?? 'Not availabe'}
                  </Typography>

                  <View style={{flexDirection: 'row', marginTop: 8}}>
                    <View style={{alignItems: 'flex-start', flex: 1}}>
                      <Typography
                        variant="caption"
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        {item.author}
                      </Typography>
                    </View>

                    <View style={{alignItems: 'flex-end', flex: 1}}>
                      <Typography
                        variant="caption"
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        {moment
                          .utc(item.publishedAt)
                          .local()
                          .startOf('seconds')
                          .fromNow()}
                      </Typography>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen2;
