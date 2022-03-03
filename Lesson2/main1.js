//task1
for(let i=10;i<=50;i+=2){
}
//task2
const characterPeople ={
    name : 'Leon',
    firstName : 'Leontiev',
    age : 22,
    pets : true
};
//task3
const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал',
    'где должен был',
    'нужных вещей,',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]

let result = array[3] + ' ' + array[7] + ' '+ array[0] + ' ' + array[8] + ' '+ array[11] + ' ' + array[5] + ' '+ array[9] + ' ' + array[6] + ' '+ array[4] + ' ' + array[1] + ' '+ array[12] + ' '+ array[2] + ' ' + array[10];
console.log(result);


//task4 

function showTheData(firstName1 , lastName1 ){
    const fullName=`${firstName1} ${lastName1}`;
    console.log(fullName);
}

showTheData('Dimon','drive');

//task5

let firstNumber = 21;
while(firstNumber <= 67){
    if (firstNumber%2 !=0){
        console.log(firstNumber);
    }
    firstNumber++;
}