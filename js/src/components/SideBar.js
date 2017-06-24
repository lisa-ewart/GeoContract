import React, {Component} from 'react'
import Dropdown from './Dropdown';

const style = {
	// display: 'inline-block',

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
        console.log(this.state.jobs)
    }

	render() {
		return(
			<div style={style}>
				<Dropdown 
					
					electricians={this.props.electricians} 
					plumbers={this.props.plumbers}
					func={this.func}
				/>
				{this.state.jobs === 'plumbers' ? 
					<div>
						{this.props.plumbers.map(one => {
							return(
							<div>
								{one.name}
							</div>)
						})}
					</div>
					: <div>
						{this.props.electricians.map(one => {
							return(
							<div>
								{one.name}
							</div>)
						})}
					</div>
			}

			</div>
		)
	}
}

export default SideBar