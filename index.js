function distanceFromHqInBlocks(bStart){
    if (bStart > 42)
        return bStart - 42
    else (bStart < 42)
        return 42 - bStart
}

function distanceFromHqInFeet(fStart){
    if (fStart > 42)
        return (fStart-42) * 264;
    else (fStart < 42)
        return (42-fStart) * 264
}

function distanceTravelledInFeet(fLocation, dLocation){
    if (fLocation > dLocation)
        return (fLocation - dLocation) * 264
    else (fLocation < dLocation)
        return (dLocation - fLocation) * 264
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return 0.02 * (distanceInFeet - 400);
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    return 25;

  } else {
    return "cannot travel that far";
  }
}
