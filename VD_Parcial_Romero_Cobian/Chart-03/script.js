d3.dsv(";",'147_ruidos_molestos.csv', d3.autoType).then(data => {
  let parseDate = d3.timeParse('%d/%m/%Y');
  console.log(data.filter(d => d.domicilio_barrio === 'PALERMO' && d3.timeMonth(parseDate(d.fecha_ingreso)).getMonth() === 11));


  let chart = Plot.plot({
    marks: [
      Plot.line(
        data.filter(d => d.domicilio_barrio === 'PALERMO'),
        Plot.groupX(
          { y: "count" },
          { x: d => d3.timeMonth(parseDate(d.fecha_ingreso)), strokeWidth: 1, stroke: "#864ddf", curve: d3.curveCatmullRom.alpha(0.5) }
        )
      )
    ],
    y: {
      grid: true,
      label: "Cantidad de llamados",
      domain:[20,100],
      fontFamily: "Poppins",
    },
    x: {
      label: "Meses",
      tickFormat: d3.utcFormat("%b %y"), 
      domain: [new Date(2020, 11), new Date(2021, 11)],
      fontFamily: "Poppins",
    },
    
    height: 300,
    marginLeft: 50,
    width: 700
  });

  d3.select('#chart').append(() => chart);
});



