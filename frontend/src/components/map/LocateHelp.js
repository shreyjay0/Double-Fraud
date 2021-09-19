/*global google */
import React from "react";
import { compose, withProps, withHandlers, withState } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  GoogleMapLoader,
} from "react-google-maps";

const apiKey = "KEY_HERE";
const LocateHelp = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `90%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  withState("places", "updatePlaces", ""),
  withHandlers(() => {
    const refs = {
      map: undefined,
    };

    return {
      onMapMounted: () => (ref) => {
        refs.map = ref;
      },
      fetchPlaces: ({ updatePlaces }) => {
        let places;
        const bounds = refs.map.getBounds();

        const request = {
          bounds: bounds,
          type: ["police", "local_government_office"],
        };

        const service = new google.maps.places.PlacesService(
          refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        );

        service.nearbySearch(request, (results, status) => {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            console.log(results);
            updatePlaces(results);
          }
        });
      },
    };
  })
)((props) => {
  let newMarker = new window.google.maps.MarkerImage(
    "https://img.icons8.com/windows/32/000000/policeman-male--v1.png",
    null,
    null,
    null,
    new window.google.maps.Size(32, 32)
  );
  return (
    <GoogleMap
      ref={props.onMapMounted}
      onTilesLoaded={props.fetchPlaces}
      onBoundsChanged={props.fetchPlaces}
      defaultZoom={16}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
      style={{ height: "350px !important" }}
    >
      {props.places &&
        props.places.map((place, i) => (
          <Marker
            key={i}
            icon={newMarker}
            position={{
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            }}
          />
        ))}
    </GoogleMap>
  );
});

export default LocateHelp;
