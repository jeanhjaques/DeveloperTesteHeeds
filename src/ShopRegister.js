import { StatusBar } from 'expo-status-bar';
import { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ShopListContext } from './providers/ShopList';

export default function ShopRegister({ navigation }) {
    //App bar settings
    useEffect(() => {
        navigation.setOptions({
            title: "Cadastrar nova Loja"
        });
    }, []);

    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);
    
    //latitudeDelta and longitudeDelta default
    const latitudeDelta = 0.01;
    const longitudeDelta = 0.01;

    const { shops, setShops } = useContext(ShopListContext);

    //registers a new shop using the data stored in the state
    function shopToRegister() {
        let acctualyShopList = shops;
        const newShop = {
            id: 3,
            name: name,
            description: description,
            localization: {
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }
        }
        acctualyShopList.push(newShop)
        console.log(acctualyShopList)

        setShops(acctualyShopList)
        navigation.navigate('Maps')
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <TextInput mode="outlined" label="Nome" style={styles.input} onChangeText={setName} value={name}></TextInput>
                <TextInput mode="outlined" label="Descrição" style={styles.input} onChangeText={setDescription} value={description}></TextInput>
                <TextInput mode="outlined" label="Longitude" style={styles.input} onChangeText={setLongitude} value={longitude} keyboardType="numeric"></TextInput>
                <TextInput mode="outlined" label="Latitude" style={styles.input} onChangeText={setLatitude} value={latitude} keyboardType="numeric"></TextInput>
            </SafeAreaView>

            {name != null && description != null && longitude != null && latitude != null ?
                <View style={styles.buttonView}>
                    <Button title="Salvar" accessibilityLabel="Clique aqui para salvar um novo marker" onPress={() => shopToRegister()}></Button>
                </View>
                :
                <View style={styles.buttonView}>
                    <Button disabled title="Salvar" accessibilityLabel="Clique aqui para salvar um novo marker"></Button>
                </View>
            }

            <View style={styles.hint}>
                <Text style={{ textAlign: 'center' }}>É recomendado buscar a latitude e longitude utilizando o site latlong.net</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        height: 50,
        margin: 12,
    },
    buttonView: {
        marginHorizontal: 40,
    },
    hint: {
        marginHorizontal: 20,
        marginVertical: 20,
    }
})