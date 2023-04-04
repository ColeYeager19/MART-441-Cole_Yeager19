// JavaScript Document

		let car = {
                "manufacturer" : "Ford",
                "model" : " Boss 429",
                "year" : " 1969",
      
                "features" : [
                    "429 cu in (7.0 L) Ford 385-series V8",
                    "4-Speed Manual",
                    "375 BHP",
                    "450 lb⋅ft"
                ]
            }
        
        $(function () {
			
	
            $("button").click(function () {
                showCarInfo();
            });

        });
       
        function showCarInfo()
            {
                $("#carInformation").html("Manufacturer: " + car.manufacturer 
                + "<br>Model:" + car.model + "<br>Year:" + car.year + "<br>Features:<br>" +
               "Engine: " + car.features[0] + "<br>Transmission: " + car.features[1] + "<br>Horsepower: " + car.features[2] + "<br>Torque: " + car.features[3]);
            }