import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import MapView  from 'react-native-maps';
import {Marker} from 'react-native-maps';


export default function Maps({ navigation }) {
  const [region, setRegion] = useState(
    {
      latitude: -15.641977371365222,
      longitude: -50.897923548219204,
      latitudeDelta: 25.0922,
      longitudeDelta: 35.0421,
    },
  );

  const shops = [
    {
      id: 1,
      name: 'Filial Paulista',
      description: 'Loja localizada em São Paulo - SP',
      localization: {
        latitude: -23.505971822962312,
        longitude: -46.657144177170075,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    },
    {
      id: 2,
      name: 'Filial Sul Matogrossensse',
      description: 'Loja localizada em Campo Grande - MS',
      localization: {
        latitude: -20.457402700586332, 
        longitude: -54.60018379341746,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    }
  ]

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
      {shops.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker.localization}
          title={marker.name}
          description={marker.description}
        />
      ))}
      </MapView>
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