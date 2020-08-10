function rad2degr(rad) {
  return (rad * 180) / Math.PI;
}

function degr2rad(degr) {
  return (degr * Math.PI) / 180;
}

// "latLngInDegr" should be an array of coordinates objects
function getLatLngCenter(latLngInDegr) {
  var sumX = 0;
  var sumY = 0;
  var sumZ = 0;

  for (var i = 0; i < latLngInDegr.length; i++) {
    var lat = degr2rad(latLngInDegr[i].lat);
    var lng = degr2rad(latLngInDegr[i].lng);
    // sum of cartesian coordinates
    sumX += Math.cos(lat) * Math.cos(lng);
    sumY += Math.cos(lat) * Math.sin(lng);
    sumZ += Math.sin(lat);
  }

  var avgX = sumX / latLngInDegr.length;
  var avgY = sumY / latLngInDegr.length;
  var avgZ = sumZ / latLngInDegr.length;

  // convert average x, y, z coordinate to latitude and longtitude
  var convlng = Math.atan2(avgY, avgX);
  var convhyp = Math.sqrt(avgX * avgX + avgY * avgY);
  var convlat = Math.atan2(avgZ, convhyp);

  // return [rad2degr(lat), rad2degr(lng)];
  return { lat: rad2degr(convlat), lng: rad2degr(convlng) };
}

export { getLatLngCenter };
