import React, { useState } from "react";
import { ScrollView, Button, Alert } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";

const MapComponent = () => {
    const [region, setRegion] = useState<Region>({
        latitude: -23.5505,
        longitude: -46.6333,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const [geolocation, setGeolocation] = useState<string>("");

    // Função chamada quando o usuário clica no mapa
    const handleMapPress = (event: any) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;

        setRegion({
            ...region,
            latitude,
            longitude,
        });

        setGeolocation(`${latitude},${longitude}`);
    };

    // Função chamada quando o usuário arrasta o marcador
    const handleMarkerDragEnd = (event: any) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;

        setRegion({
            ...region,
            latitude,
            longitude,
        });

        setGeolocation(`${latitude},${longitude}`);
    };

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <MapView
                style={{ flex: 1, height: 400, marginTop: 20 }}
                region={region}
                onRegionChangeComplete={setRegion}
                onPress={handleMapPress}
            >
                <Marker
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                    draggable
                    onDragEnd={handleMarkerDragEnd}
                />
            </MapView>

            <Button
                title="Salvar Localização"
                onPress={() => Alert.alert('Localização', `Latitude: ${geolocation.split(',')[0]}\nLongitude: ${geolocation.split(',')[1]}`)}
            />
        </ScrollView>
    );
};

export default MapComponent;
