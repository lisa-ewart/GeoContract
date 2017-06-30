import React, { Component, PropTypes } from 'react';
import GoogleMapReact, {InfoWindow} from 'google-map-react';

const K_SIZE = 30;


const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '2px solid #A7D0FF',
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
		height: '700px',
		display: 'inline-block'
	}
}


// export {greatPlaceStyle, greatPlaceStyleHover, K_SIZE};
//onClick={console.log("hi")}

const ConsumrFlag = () => <div style={greatPlaceStyle}>C</div>;
// const ProviderFlag = ({text, color, border}) => <div onClick={()=>"hi"} style={{...greatPlaceStyle, color, border}}>
// 	{text}
// </div>;





class ProviderFlag extends Component {
	state = {
		infoWindowShowing: false,
	}
	toggleWindow() {
		this.setState({
			infoWindowShowing: !this.state.infoWindowShowing
		})
	}
	render() {
		const {text, color, border} = this.props
		return <div onClick={()=>this.toggleWindow()} style={{...greatPlaceStyle, color, border, position: 'relative'}}>
			{text}
			{this.renderInfo()}
		</div>
	}
	renderInfo() {
		if (!this.state.infoWindowShowing) {
			return null;
		}
		const {provider} = this.props

		//console.log(provider.hereUntil)
		return <div style={{position: 'absolute', minWidth: '200px', minHeight: '250px', border:'2px solid grey', backgroundColor: 'white', zIndex: '5'}}>
			<button>x</button><br/>
			<p>License#: </p>
			<p style={{color: 'green'}}>{provider.licenseNumber}</p>
			{provider.name}<br/>
			{provider.hereUntil} 
			<button>Send me a request</button>
			
			
		</div>
	}
}



export default class Gmaps extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 16,
    scrollwheel: false,
  };

  render() {
  	console.log('GMAPS',this.props.type)
  	const providers = this.props.data.serviceProviders[this.props.type] || [];
  	console.log('here')
    return (
    	<div style={styles.container}>
	      <GoogleMapReact apiKey={"AIzaSyATYry8EYxN0doyvmyEDPcfKnz2X6s7hjE"}  defaultCenter={this.props.center} defaultZoom={this.props.zoom}>

	      	{providers.map((provider, index) => {
		  		return <ProviderFlag 
		  			key={index}
			  		lat={provider.location.lat}
			      	lng={provider.location.lng}
			     	text={provider.id}
			     	color={"grey"}
			     	border={"2px solid green"}
			     	provider={provider}
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




