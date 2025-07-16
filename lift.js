let defaultFloorLiftOne = 0
let defaultFloorLiftTwo = 0
document.getElementById("liftOneFloor").innerHTML = defaultFloorLiftOne
document.getElementById("liftTwoFloor").innerHTML = defaultFloorLiftTwo
let liftOneState = 'Default';
let liftTwoState = 'Default';
function liftFloor(liftNumber,type) {
    console.log("lift----",liftNumber,type);
    let floorNumber = prompt("Enter floor");
    console.log("floor---",+floorNumber);
    let liftOneDiff = +floorNumber - defaultFloorLiftOne;
    let liftTwoDiff = +floorNumber - defaultFloorLiftTwo;

    if(liftOneDiff === liftTwoDiff) {
        if(liftNumber === 'liftOne') {
            document.getElementById("liftOneFloor").innerHTML = +floorNumber;
        } else {
            document.getElementById("liftTwoFloor").innerHTML = +floorNumber;
        }
    } else if(liftOneDiff > liftTwoDiff) {
        document.getElementById("liftTwoFloor").innerHTML = +floorNumber;
    } else {
        document.getElementById("liftOneFloor").innerHTML = +floorNumber;
    }
    console.log("floor---",+floorNumber);    
}
