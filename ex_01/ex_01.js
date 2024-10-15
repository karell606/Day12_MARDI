function display_weather_image(longitude, latitude) {
	
  const imageUrl = `https://www.7timer.info/bin/civil.php?lon=${longitude}&lat=${latitude}&ac=0&lang=en&unit=metric&output=internal&tzshift=0`;
 
    const img = document.createElement('img');
    img.src = imageUrl;
    document.body.appendChild(img);
  }
display_weather_image(44.833328, -0.56667);
