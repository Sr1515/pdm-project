import React, { useState, useEffect } from "react";
import { View } from "react-native";
import MapView, { Marker, Region, LatLng } from "react-native-maps";

interface LocationType {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

interface MapComponentProps {
    onGeolocationChange: (geolocation: LocationType) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ onGeolocationChange }) => {
    const [region, setRegion] = useState<LocationType>({
        latitude: -23.5505,
        longitude: -46.6333,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const [markerPosition, setMarkerPosition] = useState<LatLng | null>(null);

    const handleMapPress = (event: { nativeEvent: { coordinate: LatLng } }) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;

        const newRegion: LocationType = {
            latitude,
            longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
        };
        setRegion(newRegion);

        const newGeolocation: LocationType = {
            latitude,
            longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
        };
        setMarkerPosition({ latitude, longitude });

        onGeolocationChange(newGeolocation);
    };

    const handleMarkerDragEnd = (event: { nativeEvent: { coordinate: LatLng } }) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;

        const newRegion: LocationType = {
            latitude,
            longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
        };
        setRegion(newRegion);

        const newGeolocation: LocationType = {
            latitude,
            longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
        };
        setMarkerPosition({ latitude, longitude });

        onGeolocationChange(newGeolocation);
    };

    useEffect(() => {
        if (!markerPosition) {
            setMarkerPosition({ latitude: region.latitude, longitude: region.longitude });
        }
    }, [region, markerPosition]);

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1, height: 400 }}
                region={region}
                onRegionChangeComplete={setRegion}
                onPress={handleMapPress}
            >
                {markerPosition && (
                    <Marker
                        coordinate={markerPosition}
                        draggable
                        onDragEnd={handleMarkerDragEnd}
                    />
                )}
            </MapView>
        </View>
    );
};

export default MapComponent;
