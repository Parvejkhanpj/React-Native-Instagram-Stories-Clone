// @flow
import * as React from 'react';
import {
  StyleSheet, View, Image, Text, Platform,    // platform is a use when we update our app on multiple platfrom 
} from 'react-native';
import { Constants } from 'expo';              //contants usse for device details ex. cureent heigh
import type { ImageSourcePropType } from 'react-native/Libraries/Image/ImageSourcePropType';   // normal prop of image 

type AvatarProps = {                                                // define the prop of avtar is string and image is a proptype 
  user: string,
  avatar: ImageSourcePropType,
};
 
export default class Avatar extends React.PureComponent<AvatarProps> {                        //define the class component for avtar 
  render(): React.Node {
    const { user, avatar: source } = this.props;                   // props 
    return (
      <View style={styles.container}>                        // make a view view container under view create image and text component 
        <Image {...{ source }} style={styles.avatar} />     // source definee use a pros
        <Text style={styles.username}>{user}</Text>          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    marginRight: 16,
  },
  username: {
    color: 'white',
    fontSize: 16,
  },
});
