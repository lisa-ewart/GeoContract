import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// import { friendOptions } from '../common'
let friendOptions = [
  {
    text: 'Electricians',
    value: 'electricians',
    image: { avatar: true, src: 'http://www.freepngimg.com/download/light_bulb/10-2-light-bulb-png-file.png' }
  },
  {
  	text: 'Plumbers',
  	value: "plumbers",
    image: { avatar: true, src: 'http://toolsandmore.us/images/products/detail/87622.jpeg' }
  }
]

const DropdownExampleSelection = (props) => (
	<div>
	  
	<Dropdown 
	  	placeholder='Select Job'
	  	fluid 
	  	selection 
	  	options={friendOptions}
	  	onChange={(e, opts) => props.func(e, opts)}
	  />

  </div>
)

export default DropdownExampleSelection



	// {props.electricians.map(one => {
	// 	friendOptions.push(
	// 		{
	// 			text: one.name, 
	// 			value: one.licenseNumber, 
	// 			image: {
	// 				avatar: true, 
	// 				src: 'http://az616578.vo.msecnd.net/files/2016/06/13/6360139435793044861461393096_Donald-Trump-prune-face.jpg'
	// 			}
	// 		}
	// 	)
	// })}