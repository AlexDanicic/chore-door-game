let doorImage1 = document.getElementById('#door1');

let doorImage2 = document.getElementById('#door2');

let doorImage3 = document.getElementById('#door3');


let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

door1.onclick = () => {
    // console.log('test');
    door1.src = botDoorPath;
};

door2.onclick = () => {
    door2.src = beachDoorPath;
};

door3.onclick = () => {
    door3.src = spaceDoorPath;
};