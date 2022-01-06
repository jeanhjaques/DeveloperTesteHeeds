import { StatusBar } from 'expo-status-bar';
import { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { ShopListContext } from './providers/ShopList';


export default function Maps({ navigation }) {
  //App bar settings
  useEffect(() => {
    navigation.setOptions({
      title: "Localizar Lojas"
    });
  }, []);

  //default region when opening the map
  const [region, setRegion] = useState(
    {
      latitude: -15.641977371365222,
      longitude: -50.897923548219204,
      latitudeDelta: 25.0922,
      longitudeDelta: 35.0421,
    },
  );

  const { shops, setShops } = useContext(ShopListContext);

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