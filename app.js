let doorImage1 = document.getElementById('#door1');

let doorImage2 = document.getElementById('#door2');

let doorImage3 = document.getElementById('#door3');

const numClosedDoors = 3;

let openDoor1;

let openDoor2;

let openDoor3;



let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

door1.onclick = () => {
    // console.log('test');
    door1.src = openDoor1;
};

door2.onclick = () => {
    door2.src = openDoor2;
};

door3.onclick = () => {
    door3.src = openDoor3;
};

const randomChoreDoorGenerator = () => {
    //const numClosedDoors = Math.floor(Math.random() * 3);  
    const choreDoor = Math.floor(Math.random() * numClosedDoors);

    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
};

randomChoreDoorGenerator();

