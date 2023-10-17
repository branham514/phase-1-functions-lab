function distanceFromHqInBlocks (dst) {
    if (dst > 42) {
    return  dst -42;
}
else if (42 - dst){
    return 8;
}
}
function distanceFromHqInFeet(distance){
return distanceFromHqInBlocks(distance) *264;
}
 function distanceTravelledInFeet(start, end){
    if(start < end) {
        return (end - start) *264
    }else{
        return (start - end) *264
    }
    }
function calculatesFarePrice(start, destination){
    const dst = distanceTravelledInFeet(start, destination)

    if(dst <= 400){
      return 0;
    }else if (dst > 400 && dst <= 2000){
        return (dst - 400) * 2/100
    }else if (dst > 2000 && dst < 2500){

    }else{
        "cannot travel that far"
    } 
}
 

   


