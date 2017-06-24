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
			licenseNumber: "XXXXXXXXX",
			location: {
				lat: 40.7099105, 
				lng: -74.0064832,
			},
			hereUntil: 3600,
			id: 1,
			rating: 0,
		}, {
			name: "Jose Marin",
			licenseNumber: "XXXXXXXXX",
			location: {
				lat: 40.7079205, 
				lng: -74.0084832,
			},
			hereUntil: 3600,
			id: 1,
			rating: 0,
		}],
		plumbers: [{
			name: "Richard Hill",
			licenseNumber: "XXXXXXXXX",
			location: {
				lat: 40.7089105, 
				lng: -74.0074832,
			},
			hereUntil: 3600,
			id: 1,
			rating: 0,
		}, {
			name: "Kirsi Ceballos",
			licenseNumber: "XXXXXXXXX",
			location: {
				lat: 40.7179105, 
				lng: -74.0164832,
			},
			hereUntil: 3600,
			id: 1,
			rating: 0,
		}]
	}
}

export const Store = {
    data: data,
    currentRoute: '/map',
}
