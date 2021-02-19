
L.mapquest.key = 'mLLByhIm0nm1zG3WI41YrGVGKALwhzqU';

// 'map' refers to a <div> element with the ID map
L.mapquest.map('map', {
  center: [37.7749, -122.4194],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});

L.mapquest.directions().route({
          start: '32 London Bridge St, London SE1 9SG',
          end: 'Riverside Building, County Hall, South Bank, London SE1 7PB'
        });


