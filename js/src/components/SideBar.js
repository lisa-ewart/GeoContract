import React, {Component} from 'react'
import Dropdown from './Dropdown';

const style = {
		padding: '50px',
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
					func={this.func}
				/>
				
					<div style={style}>
						<h1>{this.state.jobs}</h1>
						{jobName ? this.props[jobName].map(one => {
							return(
							<div>
								{one.name}
							</div>)
						}) : null}
					</div>

			</div>
		)
	}
}







			// {this.state.jobs === 'plumbers' ? 
			// 		<div style={style}>
			// 			<h1>{this.state.jobs}</h1>
			// 			{this.props[jobName].map(one => {
			// 				return(
			// 				<div style3>
			// 					{one.name}
			// 				</div>)
			// 			})}
			// 		</div>
			// 		: <div style={style}>
			// 			<h1>{this.state.jobs}</h1>
			// 			{this.props.electricians.map(one => {
			// 				return(
			// 				<div style3>
			// 					{one.name}
			// 				</div>)
			// 			})}
			// 		</div>
			// }

export default SideBar