function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks-42)
}




function distanceFromHqInFeet(blocks) {
  return (distanceFromHqInBlocks(blocks) * 264)
}


function distanceTravelledInFeet(start, end) {
  return Math.abs((start - end) * 264)
}




function calculatesFarePrice(start, end) {
  const feet = distanceTravelledInFeet(start, end);
  if (feet < 400) {
    return 0;
  }
  else if (feet <= 2000) {
    return (feet - 400) * 0.02;
  }
  else if (feet <= 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far'
  }
}
