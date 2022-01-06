import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { IconButton } from 'react-native-paper';

export default function Home({ navigation }){
    return(
      <View style={styles.container}>
          <TouchableOpacity style={styles.buttonWithIcon} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => navigation.navigate('Maps')}>
            <View>
              <View style={styles.buttonIconVertical}>
                <IconButton icon="map-marker" color="#03a9f4" size={50}/>
                <Text>Localizar Lojas Cadastradas</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWithIcon} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => navigation.navigate('ShopRegister')}>
            <View style={styles.buttonIconVertical}>
              <IconButton icon="plus-circle-outline" color="#03a9f4" size={50}/>
              <Text>Adicionar novas lojas</Text>
            </View>
          </TouchableOpacity>

          <StatusBar style="auto" />
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
    buttonWithIcon:{
      borderRadius: 5,
      borderStyle: 'solid',
    },
    buttonIconVertical:{
      alignItems: 'center',
      justifyContent: 'center'
    }
});
  