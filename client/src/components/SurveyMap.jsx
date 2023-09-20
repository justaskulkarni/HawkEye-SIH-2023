import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const SurveyMap = () => {
    const thaneLatLng = [19.2183, 72.9781];
    return (
        <>
            <MapContainer center={thaneLatLng} zoom={13} style={{ width: '80%', height: '600px' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={thaneLatLng}>
                    <Popup>Thane</Popup>
                </Marker>
            </MapContainer>
        </>
    );
};

export default SurveyMap;
