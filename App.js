import React from 'react';
import { FlatList, Platform, SafeAreaView, Text, View } from 'react-native';
import GetTopStories from './Services/GetTopStories';

class RollupArticle extends React.Component {
  render() {
    return (
      <View>
        <View style={{
          flexDirection: 'row',
          padding: 5
        }}>
          <View>
            <View style={{
              backgroundColor: 'orange',
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 10,
              width: 40
            }}>
              <Text style={{
                color: 'white'
              }}>{this.props.index}</Text>
            </View>
          </View>
          <View style={{
            marginLeft: 10
          }}>
            <Text>{this.props.item.title}</Text>
            <View style={{
              flexDirection: 'row'
            }}>
              <Text>
                {this.props.item.score} {this.props.item.score === 1 ? 'point' : 'points'}
                {' '} | {this.props.item.descendants} {this.props.item.descendants === 1 ? 'comment' : 'comments'}
                {' '} | 3 hours ago
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topStories: []
    };
  }

  async componentDidMount() {
    const topStories = await GetTopStories();

    this.setState({
      topStories
    });
  }

  render() {
    return (
      <SafeAreaView style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 50 : 0
      }}>
        <View>
          <FlatList
            data={this.state.topStories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => <RollupArticle key={item.id.toString()} index={index + 1} item={item} />}
          />
        </View>
      </SafeAreaView>
    );
  }
}
