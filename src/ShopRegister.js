import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function ShopRegister({ navigation }) {
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);

    const latitudeDelta = 0.01;
    const longitudeDelta = 0.01;

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <TextInput label="Nome" style={styles.input} onChangeText={setName} value={name}></TextInput>
                <TextInput label="Descrição" style={styles.input} onChangeText={setDescription} value={description}></TextInput>
                <TextInput label="Longitude" style={styles.input} onChangeText={setLongitude} value={longitude} keyboardType="numeric"></TextInput>
                <TextInput label="Latitude" style={styles.input} onChangeText={setLatitude} value={latitude} keyboardType="numeric"></TextInput>
            </SafeAreaView>
            <View style={styles.buttonView}>
                <Button title="Salvar" accessibilityLabel="Clique aqui para salvar um novo marker" ></Button>
            </View>
            <Text>{latitude}</Text>
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
        borderWidth: 1,
    
    },
    buttonView:{
        marginHorizontal: 40,
    }
})