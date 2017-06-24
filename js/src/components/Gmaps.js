import React, { Component, PropTypes } from 'react';
import GoogleMapReact from 'google-map-react';

const K_SIZE = 40;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '5px solid #f44336',
  borderRadius: K_SIZE,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
};

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  border: '5px solid #3f51b5',
  color: '#f44336'
};

const styles = {
	container: {
		width: '70vw',
		height: '500px',
		// display: 'inline-block'
	}
}

// export {greatPlaceStyle, greatPlaceStyleHover, K_SIZE};

const ConsumrFlag = () => <div style={greatPlaceStyle}>C</div>;
const ProviderFlag = ({text, color, border}) => <div style={{...greatPlaceStyle, color, border}}>
	{text}
</div>;

export default class Gmaps extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 15
  };

  render() {
  	console.log(this.props)

    return (
    	<div style={styles.container}>
	      <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>

	      	{this.props.data.serviceProviders.electricians.map((electrician, index) => {
		  		return <ProviderFlag 
		  			key={index}
			  		lat={electrician.location.lat}
			      	lng={electrician.location.lng}
			     	text={'E'}
			     	color={"blue"}
			     	border={"5px solid #ccc"}
			    />
		  	})}

		  	{this.props.data.serviceProviders.plumbers.map((plumbers, index) => {
		  		return <ProviderFlag 
		  			key={index}
			  		lat={plumbers.location.lat}
			      	lng={plumbers.location.lng}
			     	text={'P'}
			     	color={"red"}
			     	border={"5px solid #fff"}
			    />
		  	})}
		
	        <ConsumrFlag
	          lat={this.props.data.consumer.location.lat}
	          lng={this.props.data.consumer.location.lng}
	          text={'C'}
	        />
	      </GoogleMapReact>
      </div>
    );
  }
}