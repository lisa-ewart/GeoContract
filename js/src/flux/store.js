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
			type: "E",
			id: 1,
			rating: 0,
		}, 
		{
			name: "Pete Sand",
			licenseNumber: "XXXXXXXXX",
			location: {
				lat: 40.7091105, 
				lng: -74.0065832,
			},
			hereUntil: 3600,
			type: "E",
			id: 1,
			rating: 0,
		},
		{
			name: "Karen Jo",
			licenseNumber: "XXXXXXXXX",
			location: {
				lat: 40.7092105, 
				lng: -74.0064832,
			},
			hereUntil: 3600,
			type: "E",
			id: 1,
			rating: 0,
		}, 
		{
			name: "John Smith",
			licenseNumber: "XXXXXXXXX",
			location: {
				lat: 40.7099105, 
				lng: -74.0064832,
			},
			hereUntil: 3600,
			type: "E",
			id: 1,
			rating: 0,
		},  
		{
			name: "Fizal Man",
			licenseNumber: "XXXXXXXXX",
			location: {
				lat: 40.7092105, 
				lng: -74.0074832,
			},
			hereUntil: 3600,
			type: "E",
			id: 1,
			rating: 0,
		},
		{
			name: "Jose Marin",
			licenseNumber: "XXXXXXXXX",
			location: {
				lat: 40.7079205, 
				lng: -74.0084832,
			},
			hereUntil: 3600,
			type: "E",
			id: 1,
			rating: 0,
		}],
		plumbers: [{
			name: "George Glass",
			licenseNumber: "XXXXXXXXX",
			location: {
				lat: 40.7089105, 
				lng: -74.0074832,
			},
			hereUntil: 3600,
			type: "P",
			id: 1,
			rating: 0,
		}, {
			name: "Michael Bene",
			licenseNumber: "XXXXXXXXX",
			location: {
				lat: 40.7088905, 
				lng: -74.0070832,
			},
			hereUntil: 3600,
			type: "P",
			id: 1,
			rating: 0,
		},{
			name: "Richard Hill",
			licenseNumber: "XXXXXXXXX",
			location: {
				lat: 40.7090105, 
				lng: -74.0074832,
			},
			hereUntil: 3600,
			type: "P",
			id: 1,
			rating: 0,
		},{
			name: "Kirsi Ceballos",
			licenseNumber: "XXXXXXXXX",
			location: {
				lat: 40.7092105, 
				lng: -74.0074832,
			},
			hereUntil: 3600,
			id: 1,
			type: "P",
			rating: 0,
		}]
		
	}
}

export const Store = {
    data: data,
    currentRoute: '/map',
}
