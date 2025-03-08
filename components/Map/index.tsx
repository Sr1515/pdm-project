import React, { useState, useEffect } from "react";
import { View } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from 'expo-location';

interface LocationType {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

interface MapComponentProps {
    onGeolocationChange: (geolocation: LocationType | null) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ onGeolocationChange }) => {
    const [region, setRegion] = useState<LocationType>({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });

    const [markerPosition, setMarkerPosition] = useState<{ latitude: number, longitude: number } | null>(null);

    useEffect(() => {
        const getLocation = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status === 'granted') {
                const loc = await Location.getCurrentPositionAsync({});
                setRegion({
                    latitude: loc.coords.latitude,
                    longitude: loc.coords.longitude,
                    latitudeDelta: region.latitudeDelta,
                    longitudeDelta: region.longitudeDelta,
                });

                setMarkerPosition({
                    latitude: loc.coords.latitude,
                    longitude: loc.coords.longitude,
                });

                const initialGeolocation: LocationType = {
                    latitude: loc.coords.latitude,
                    longitude: loc.coords.longitude,
                    latitudeDelta: region.latitudeDelta,
                    longitudeDelta: region.longitudeDelta,
                };
                onGeolocationChange(initialGeolocation);
            } else {
                alert("Permissão de localização negada");
            }
        };

        getLocation();
    }, []);

    const handleRegionChange = (newRegion: Region) => {
        setRegion({
            latitude: newRegion.latitude,
            longitude: newRegion.longitude,
            latitudeDelta: newRegion.latitudeDelta,
            longitudeDelta: newRegion.longitudeDelta,
        });

        setMarkerPosition({
            latitude: newRegion.latitude,
            longitude: newRegion.longitude,
        });

        const newGeolocation: LocationType = {
            latitude: newRegion.latitude,
            longitude: newRegion.longitude,
            latitudeDelta: newRegion.latitudeDelta,
            longitudeDelta: newRegion.longitudeDelta,
        };

        onGeolocationChange(newGeolocation);
    };

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                region={region}
                onRegionChangeComplete={handleRegionChange}
                showsUserLocation={true}
            >
                {markerPosition && (
                    <Marker
                        coordinate={markerPosition}
                    />
                )}
            </MapView>
        </View>
    );
};

export default MapComponent;
