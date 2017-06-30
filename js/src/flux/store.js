const data = {
	consumer: {
		name: "Lisa Ewart",
		location: {
			lat: 40.7079105, 
			lng: -74.0074832,
		},
		id: 3,
	},
	serviceProviders: {
		electricians: [{
			name: "John Smith",
			licenseNumber: "NY143578",
			location: {
				lat: 40.7069542, 
				lng: -74.0096729,
			},
			hereUntil: "Available now!",
			type: "E",
			id: 1,
			rating: 0,
		}, 
		{
			name: "Pete Sand",
			licenseNumber: "NY143578",
			location: {
				lat: 40.7091105, 
				lng: -74.0065832,
			},
			hereUntil: "Available now!",
			type: "E",
			id: 2,
			rating: 0,
		},
		{
			name: "Karen Jo",
			licenseNumber: "NY143578",
			location: {
				lat: 40.7092105, 
				lng: -74.0064832,
			},
			hereUntil: "Available now!",
			type: "E",
			id: 3,
			rating: 0,
		},  
		{
			name: "Fizal Man",
			licenseNumber: "NY143578",
			location: {
				lat: 40.7069542, 
				lng: -74.0096729,
			},
			hereUntil: "Available now!",
			type: "E",
			id: 4,
			rating: 0,
		}],
		plumbers: [{
			name: "George Glass",
			licenseNumber: "NY143578",
			location: {
				lat: 40.7069542, 
				lng: -74.0096729,
			},
			hereUntil: "Available now!",
			type: "P",
			id: 1,
			rating: 0,
		}, {
			name: "Michael Bene",
			licenseNumber: "NY143578",
			location: {
				lat: 40.7092105, 
				lng: -74.0064832,
			},
			hereUntil: "Available now!",
			type: "P",
			id: 2,
			rating: 0,
		},{
			name: "Richard Hill",
			licenseNumber: "NY143578",
			location: {
				lat: 40.7090105, 
				lng: -74.0074832,
			},
			hereUntil: "Available now!",
			type: "P",
			id: 3,
			rating: 0,
		},{
			name: "Kirsi Ceballos",
			licenseNumber: "NY143578",
			location: {
				lat: 40.7089542, 
				lng: -74.0106729,
			},
			hereUntil: "Available now!",
			id: 4,
			type: "P",
			rating: 0,
		}]
		
	}
}

export const Store = {
    data: data,
    currentRoute: '/map',
}
