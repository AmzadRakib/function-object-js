function getAvarage(assingment1, assingment2, assingment3) {
    const totalNumber = assingment1 + assingment2 + assingment3;
    const avarage = totalNumber / 3;
    return avarage;
}

const assingment1Marks = 60;
const assingment2Marks = 58;
const assingment3Marks = 59;
var myAvarage = getAvarage(assingment1Marks, assingment2Marks, assingment3Marks);
console.log('My avarage so far:', myAvarage);