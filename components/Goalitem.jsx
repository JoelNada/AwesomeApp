import {View, Text, StyleSheet, Pressable} from 'react-native';

function Goalitem(props) {
  return (
    <View style={styles.goalsoutput}>
      <Pressable
        android_ripple={{color: '#5e0acc', borderRadius: 5}}
        onPress={props.ondelete.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={{color: '#fff', fontSize: 16}}> {props.oup} </Text>
      </Pressable>
    </View>
  );
}

export default Goalitem;

const styles = StyleSheet.create({
  goalsoutput: {
    backgroundColor: '#5e0acc',
    padding: 16,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 5,
    width: '90%',
    justifyContent: 'center',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
