import React, {Component} from 'react'
import Dropdown from './Dropdown';
import Popup from 'react-popup';


const style = {
		padding: '50px',
		backgroundColor: '#E6E6E3',
		height: '700px',
		overflow: 'scroll',
}

const style2 = {
	marginTop: '25px',
}
const style3 = {
	margin: '5px',
}


class SideBar extends Component {


    constructor(props) {
        super(props)
        this.state = {
            jobs: ''
        }
    }

    func = (e, opts) => {
        this.setState({
            jobs: opts.value
        })
        console.log(this.state.jobs, 'tes', opts.value)
        this.props.dispatch('PROVIDER_TYPE',{
        	type: opts.value
        })
    }

    

  
  



	render() {

		const jobName = this.state.jobs;
		console.log('job',jobName)



  
		return(
			<div style={style}>
				<Dropdown 
					electricians={this.props.electricians} 
					plumbers={this.props.plumbers}
					//movers={this.props.movers}
					func={this.func}
				/>
				
					<div style={style}>
						<h1 className = "font">Available {this.state.jobs}</h1>
						{jobName ? this.props[jobName].map(one => {
							return(
							<div>
								<div className = "profilesidediv">
								<p className = "frame">{one.id}</p>
								{one.name}<br/>
								{one.licenseNumber}<br/>
								<button>Send {one.name} a message</button>
								</div>
							</div>)
						}) : null}
					</div>

			</div>
		)
	}
}







			

export default SideBar