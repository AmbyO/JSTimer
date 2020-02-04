function clock(){
	
	//creating the container for the whole thing
	var container = document.createElement("div");

	//adding a class to it
	container.classList.add("container");

	//appending it to the body
	document.body.appendChild(container);
	
	//creating the container for the clock
	var innerContainer = document.createElement("div");

	//adding a class to it
	innerContainer.classList.add("inner-container");

	//appending it to the container
	container.appendChild(innerContainer);
	
	//creating the digits
	var hour = 0;
	var minutes = 0;
	var seconds = 0;
		
	//inserting the dots
	
	//create the hour box
	var hourBox = document.createElement("div");
	hourBox.classList.add("box");	
	
	innerContainer.appendChild(hourBox); 
	
	//create the minute box
	
	var minuteBox = document.createElement("div");
	minuteBox.classList.add("mbox");	
	
	var sign = document.createElement("div");
	sign.classList.add("sign");
	sign.innerHTML = "&copy; DNEwb";
	
	innerContainer.appendChild(sign);
	innerContainer.appendChild(minuteBox);
		
	//create the second box

	var secondBox = document.createElement("div");
	secondBox.classList.add("box");	
	
	innerContainer.appendChild(secondBox);

	//inner HTML Textz
	
	setInterval(function(){
			
			seconds++;
			
			if (seconds < 10 ){
				
					secondBox.innerHTML = "0" + seconds;

				
				}else{
	
			secondBox.innerHTML = seconds;

			}
			
			if (minutes < 10 ){
				
					minuteBox.innerHTML = "0" + minutes;

				
				}else{
	
			minuteBox.innerHTML = minutes;

			}
			
			if (hour < 10 ){
				
					hourBox.innerHTML = "0" + hour;

				
				}else{
	
			hourBox.innerHTML = hour;

			}
			
			
			if(seconds == 59){
				
				seconds = 0;
				minutes++;
				
				}
			
			if(minutes == 60){
				
				minutes = 0;
				hour++;
				
				}
			
			if(hour == 25){
				
				hour = 0;
				
				}
			
							
			},1000);
		
}

clock();
