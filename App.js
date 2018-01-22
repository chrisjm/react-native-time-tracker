import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import uuidv4 from 'uuid/v4'
import EditableTimer from './components/EditableTimer'
import ToggleableTimerForm from './components/ToggleableTimerForm'

export default class App extends React.Component {
  state = {
    timers: [
      {
        title: 'Study React Native',
        project: 'Education',
        id: uuidv4(),
        elapsed: 5456009,
        isRunning: true,
      },
      {
        title: 'Write blog post',
        project: 'Writing',
        id: uuidv4(),
        elapsed: 3246,
        isRunning: false,
      }
    ]
  }

  render() {
    const { timers } = this.state

    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timers</Text>
        </View>
        <ScrollView style={styles.timerList}>
          <ToggleableTimerForm />
          {timers.map(({ title, project, id, elapsed, isRunning }) => (
            <EditableTimer
              key={id}
              id={id}
              title={title}
              projects={project}
              elapsed={elapsed}
              isRunning={isRunning}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 15,
  },
});
