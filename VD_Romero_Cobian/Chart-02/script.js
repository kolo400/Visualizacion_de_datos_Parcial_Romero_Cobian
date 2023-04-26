const mapaFetch = d3.json('barrios-caba.geojson');
const dataFetch = d3.dsv(';', '147_ruidos_molestos.csv', d3.autoType);

Promise.all([mapaFetch, dataFetch]).then(([barrios, data]) => {
  
  /* Agrupamos reclamos x barrio */
  const reclamosPorBarrio = d3.group(data, d => d.domicilio_barrio); // crea un Map
  console.log('reclamosPorBarrio', reclamosPorBarrio);
  
  /* Filtramos los datos por barrio */
  const filteredData = data.filter(d => d.domicilio_barrio === "PALERMO");
  
  /* Mapa Coroplético */
  let chartMap = Plot.plot({
    // https://github.com/observablehq/plot#projection-options
    marginBottom:50,
    marginRight:50,
    marginLeft:50,
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      // Quantize continuo (cant. denuncias) -> discreto (cant. colores)
      type: 'linear', 
      n: 10,
      scheme: 'rdpu',
      label: 'Cantidad de denuncias',
      legend: true , marginLeft:10,
      domain: [0,10]
    },
    legend:{
      marginLeft:50,
    },
    marks: [
      Plot.density(filteredData.filter(item => item.subcategoria == 'RUIDOS MOLESTOS, EMANACIONES O DERRAMES'), { 
        x: 'lon', 
        y: 'lat', 
        fill: 'density',
        bandwidth: 15, 
        thresholds: 30 
      }),
      Plot.geo(barrios, {
        stroke: 'gray',
        title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
      }),
    ],
  })

  /* Agregamos al DOM la visualización chartMap */
  d3.select('#chart1').append(() => chartMap);
})



const palermoFetch = d3.json('palermo.geojson');

Promise.all([palermoFetch, dataFetch]).then(([barrios, data]) => {
  
  /* Agrupamos reclamos x barrio */
  const reclamosPorBarrio = d3.group(data, d => d.domicilio_barrio); // crea un Map
  console.log('reclamosPorBarrio', reclamosPorBarrio);
  
  /* Filtramos los datos por barrio */
  const filteredData = data.filter(d => d.domicilio_barrio === "PALERMO");
  
  /* Mapa Coroplético */
  let chartMap = Plot.plot({
    // https://github.com/observablehq/plot#projection-options
    marginBottom:50,
    marginRight:50,
    marginLeft:50,
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      // Quantize continuo (cant. denuncias) -> discreto (cant. colores)
      type: 'quantize', 
      n: 10,
      scheme: 'rdpu',
      label: 'Cantidad de denuncias',
      legend: true , marginLeft:10,
      domain: [0,2]
    },
    marks: [
      Plot.density(filteredData.filter(item => item.subcategoria == 'RUIDOS MOLESTOS, EMANACIONES O DERRAMES'), { 
        x: 'lon', 
        y: 'lat', 
        fill: 'density',
        bandwidth: 15, 
        thresholds: 30 
      }),
      Plot.geo(barrios, {
        stroke: 'gray',
        title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
      }),
    ],
  })

  /* Agregamos al DOM la visualización chartMap */
  d3.select('#chart2').append(() => chartMap);
})



const callespalermoFetch = d3.json('callesPalermo.geojson');

Promise.all([callespalermoFetch, dataFetch]).then(([barrios, data]) => {
  
  /* Agrupamos reclamos x barrio */
  const reclamosPorBarrio = d3.group(data, d => d.domicilio_barrio); // crea un Map
  console.log('reclamosPorBarrio', reclamosPorBarrio);
  
  /* Filtramos los datos por barrio */
  const filteredData = data.filter(d => d.domicilio_barrio === "PALERMO");
  
  /* Mapa Coroplético */
  let chartMap = Plot.plot({
    // https://github.com/observablehq/plot#projection-options
    marginBottom:50,
    marginRight:50,
    marginLeft:50,
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      // Quantize continuo (cant. denuncias) -> discreto (cant. colores)
      type: 'quantize', 
      n: 10,
      scheme: 'rdpu',
      label: 'Cantidad de denuncias',
      legend: true , marginLeft:10,
      domain: [0,2]
    },
    marks: [
      Plot.density(filteredData.filter(item => item.subcategoria == 'RUIDOS MOLESTOS, EMANACIONES O DERRAMES'), { 
        x: 'lon', 
        y: 'lat', 
        fill: 'density',
        bandwidth: 15, 
        thresholds: 30 
      }),
      Plot.geo(barrios, {
        stroke: 'gray',
        title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
      }),
    ],
  })

  /* Agregamos al DOM la visualización chartMap */
  d3.select('#chart3').append(() => chartMap);
})