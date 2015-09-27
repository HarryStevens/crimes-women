//Google stuff


google.load("visualization", "1.1", {
	packages : ["bar"]
});

/*
google.load("visualization", "1", {
	packages : ["corechart"]
});
*/
google.setOnLoadCallback(drawChart);

function drawChart() {

	//default dataset and category name, which in this case is for All Crimes
	var categoryName = 'All crimes against women';
	var dataset = [['Year', 'Incidents'], ['2001', 143795], ['2002', 143034], ['2003', 140601], ['2004', 154333], ['2005', 155553], ['2006', 164765], ['2007', 185312], ['2008', 195857], ['2009', 203804], ['2010', 213585], ['2011', 228650], ['2012', 244270], ['2013', 309546]];

	function googleChart() {

		var data = google.visualization.arrayToDataTable(dataset);

		var view = new google.visualization.DataView(data);
		view.setColumns([0, 1, {
			calc : "stringify",
			sourceColumn : 1,
			type : "string",
			role : "annotation"
		}]);

		var options = {
			chart : {
				title : categoryName,
				subtitle : '2001-2012'
			},
			axes : {
				x : {
					0 : {
						side : 'bottom',
						label : 'Year'
					}
				},
				y : {
					0 : {
						side : 'left',
						label : 'Number of crimes reported'
					}
				},
			},
			legend : {
				position : 'none'
			},
		};

		var chart = new google.charts.Bar(document.getElementById('chart'));

		chart.draw(view, options);
	}

	googleChart();

	//Change object upon selecting different crimes
	$('#crime-select').change(function() {

		// Crime category will be the value of the selected option
		var category = this.value;

		if (category == 'all') {
			categoryName = "All crimes against women";
			dataset = [['Year', 'Incidents'], ['2001', 143795], ['2002', 143034], ['2003', 140601], ['2004', 154333], ['2005', 155553], ['2006', 164765], ['2007', 185312], ['2008', 195857], ['2009', 203804], ['2010', 213585], ['2011', 228650], ['2012', 244270], ['2013', 309546], ['2014', 329529]];
			googleChart();
		} else if (category == 'assault') {
			categoryName = "Assault on woman w/ intent to outrage her modesty";
			dataset = [['Year', 'Incidents'], ['2001', 34124], ['2002', 33943], ['2003', 32939], ['2004', 34567], ['2005', 34175], ['2006', 36617], ['2007', 38734], ['2008', 40413], ['2009', 38711], ['2010', 40613], ['2011', 42968], ['2012', 45351], ['2013', 70739], ['2014', 82235]];
			googleChart();
		} else if (category == 'sati') {
			categoryName = "Commission of Sati";
			dataset = [['Year', 'Incidents'], ['2001', 0], ['2002', 0], ['2003', 0], ['2004', 0], ['2005', 1], ['2006', 0], ['2007', 0], ['2008', 1], ['2009', 0], ['2010', 0], ['2011', 1], ['2012', 0], ['2013', 0], ['2014', 0]];
			googleChart();
		} else if (category == 'cruelty') {
			categoryName = "Cruelty by husband or his relatives";
			dataset = [['Year', 'Incidents'], ['2001', 49170], ['2002', 49237], ['2003', 50703], ['2004', 58121], ['2005', 58319], ['2006', 63128], ['2007', 75930], ['2008', 81344], ['2009', 89546], ['2010', 94041], ['2011', 99135], ['2012', 106527], ['2013', 118866], ['2014', 122877]];
			googleChart();
		} else if (category == 'dowry-death') {
			categoryName = "Dowry deaths";
			dataset = [['Year', 'Incidents'], ['2001', 6851], ['2002', 6822], ['2003', 6208], ['2004', 7026], ['2005', 6787], ['2006', 7618], ['2007', 8093], ['2008', 8172], ['2009', 8383], ['2010', 8391], ['2011', 8618], ['2012', 8233], ['2013', 8083], [2014, 8455]];
			googleChart();
		} else if (category == 'dowry-prohibition') {
			categoryName = "Dowry prohibition act";
			dataset = [['Year', 'Incidents'], ['2001', 3222], ['2002', 2816], ['2003', 2684], ['2004', 3592], ['2005', 3204], ['2006', 4504], ['2007', 5623], ['2008', 5555], ['2009', 5650], ['2010', 5182], ['2011', 6619], ['2012', 9038], ['2013', 10709], ['2014', 10050]];
			googleChart();
		} else if (category == 'traffic') {
			categoryName = "Immoral traffic";
			dataset = [['Year', 'Incidents'], ['2001', 8796], ['2002', 6598], ['2003', 5510], ['2004', 5748], ['2005', 5908], ['2006', 4541], ['2007', 3568], ['2008', 2660], ['2009', 2474], ['2010', 2499], ['2011', 2435], ['2012', 2563], ['2013', 2579], ['2014', 2070]];
			googleChart();
		} else if (category == 'importation') {
			categoryName = "Importation of girls from foreign country";
			dataset = [['Year', 'Incidents'], ['2001', 114], ['2002', 76], ['2003', 46], ['2004', 89], ['2005', 149], ['2006', 67], ['2007', 61], ['2008', 67], ['2009', 48], ['2010', 36], ['2011', 80], ['2012', 59], ['2013', 31], ['2014', 13]];
			googleChart();
		} else if (category == 'representation') {
			categoryName = "Indecent representation of women";
			dataset = [['Year', 'Incidents'], ['2001', 1052], ['2002', 2508], ['2003', 1043], ['2004', 1378], ['2005', 2917], ['2006', 1562], ['2007', 1200], ['2008', 1025], ['2009', 845], ['2010', 895], ['2011', 453], ['2012', 141], ['2013', 362], ['2014', 47]];
			googleChart();
		} else if (category == 'insult') {
			categoryName = "Insult to the modesty of women";
			dataset = [['Year', 'Incidents'], ['2001', 9746], ['2002', 10155], ['2003', 12325], ['2004', 10001], ['2005', 9984], ['2006', 9966], ['2007', 10950], ['2008', 12214], ['2009', 11009], ['2010', 9961], ['2011', 8570], ['2012', 9173], ['2013', 12589], ['2014', 9735]];
			googleChart();
		} else if (category == 'kidnapping') {
			categoryName = "Kidnapping and abduction";
			dataset = [['Year', 'Incidents'], ['2001', 14645], ['2002', 14506], ['2003', 13296], ['2004', 15578], ['2005', 15750], ['2006', 17414], ['2007', 20416], ['2008', 22939], ['2009', 25741], ['2010', 29795], ['2011', 35565], ['2012', 38262], ['2013', 51881], ['2014', 57311]];
			googleChart();
		} else if (category == 'rape') {
			categoryName = "Rape";
			dataset = [['Year', 'Incidents'], ['2001', 16075], ['2002', 16373], ['2003', 15847], ['2004', 18233], ['2005', 18359], ['2006', 19348], ['2007', 20737], ['2008', 21467], ['2009', 21397], ['2010', 22172], ['2011', 24206], ['2012', 24923], ['2013', 33707], ['2014', 36735]];
			googleChart();
		}
	});
}

