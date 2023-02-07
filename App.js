import {StyleSheet, View, FlatList, ToastAndroid, Button} from 'react-native';
import {useState} from 'react';
import Goalitem from './components/Goalitem';
import Input from './components/Input';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modv, setModv] = useState(false);
  const goalAdd = text => {
    setCourseGoals(currentCourseGoals => [
      ...courseGoals,
      {text: text, id: Math.random().toString()},
    ]);
    ToastAndroid.show('Item Added', ToastAndroid.SHORT);
  };

  function deletegoalitem(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
    ToastAndroid.show('Item Removed', ToastAndroid.SHORT);
  }

  function modvisible() {
    setModv(true);
  }

  function modclose() {
    setModv(false);
  }

  return (
    <View style={styles.containermain}>
      <View style={{width: '80%', marginLeft: 40}}>
        <Button title="Add New Goal" color="#a065ec" onPress={modvisible} />
      </View>
      <View style={{marginTop: 15}}></View>
      <Input onAddGoal={goalAdd} model={modv} closeit={modclose} />
      <View style={styles.goalscontainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <Goalitem
                oup={itemData.item.text}
                ondelete={deletegoalitem}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containermain: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },

  goalscontainer: {
    flex: 5,
  },
});
