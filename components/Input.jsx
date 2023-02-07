import {
  TextInput,
  View,
  Button,
  StyleSheet,
  Modal,
  Image,
  Alert,
} from 'react-native';
import {useState} from 'react';
function Input(props) {
  const [text, setText] = useState('');

  const textSet = textentered => {
    setText(textentered);
  };
  function goalAdd() {
    if (text != '') {
      props.onAddGoal(text);
      setText('');
      props.closeit();
    } else {
      Alert.alert('Alert !', 'Input cannot be empty', [
        {text: 'Okay', style: 'cancel'},
      ]);
    }
  }

  return (
    <Modal visible={props.model} animationType="slide">
      <View style={styles.container1}>
        <Image
          style={styles.image}
          source={require('../android/app/src/res/goal.png')}
        />
        <TextInput
          placeholder="Your course goal !"
          style={styles.goalinput}
          onChangeText={textSet}
          value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.closeit} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              style={styles.addgoal}
              onPress={goalAdd}
              color="#5e0acc"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default Input;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
  },
  goalinput: {
    borderColor: '#e4d0ff',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    padding: 10,
    color: '#f31282',

    marginRight: 8,
    backgroundColor: '#e4d0ff',
  },

  buttonContainer: {flexDirection: 'row', marginTop: 25},
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
