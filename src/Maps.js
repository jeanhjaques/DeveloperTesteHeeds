import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Dimensions} from 'react-native';
import MapView from 'react-native-maps';


export default function Maps({ navigation }){
    return(
    <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});