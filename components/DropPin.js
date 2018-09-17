import React, { Component } from 'react';
import { MapView } from 'expo';
import { View, Image } from 'react-native';
import { Button, Text } from 'native-base';
import style from '../public/style';
import Geocoder from 'react-native-geocoding';


export default class DropPin extends Component {

    state = {
        region: {lat: 0 ,lng: 0},
    }


    handleSubmit = () => {
        Geocoder.init('AIzaSyBXFcIJtLv7CMy1SLKQgkdlwByYVTxpXq0');
        // here we just need to return this.state.region to LotSubmissionForm..
        // I'm not really sure how I want that to happen.. If it should just be something that pops up and then closes, or if we navigate there and then navigate back (and use that thing where we pass props on a navigation)
        // I think it'd look cooler if it could like slide up on opening, and then down when it closes, but I don't know how that happens
        Geocoder.from(this.state.region).then(json => {
            var fullAddress = json.results[0].formatted_address;
        });

    }

    render () {
        return (
			<View style={[style.containerMain, {justifyContent: 'center', alignItems: 'center'}]}>
                <MapView
                    style={style.mapMain}
                    onRegionChangeComplete={(region) => { this.setState({ region: {lat: region.latitude, lng: region.longitude }}); }}
                    showsUserLocation={true}
                    followsUserLocation={true} />
                                            {/** Also, this needs to be a better picture... */}
		        <Image source={require('../public/images/marker.png')} style={{
                    zIndex: 30,
                    height: 20,
                    width: 20,
                }} />


                <View style={style.matchMain}>
                    <Button rounded info large onPress={this.handleSubmit}>
                        <Text>Use this Location</Text>
                    </Button>
                </View>
            </View>
        );
    }
}
