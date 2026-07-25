let heroes = [
    ["ironman","spiderman","thor"],
    ["superman","wonder woman", "flash"]
];

for(let i=0; i< heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length);

    for(let j=0; j<heroes[i].length; j++){
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}
let students =[["sakshi",95],["sonu",96],["shardha",100]];

for(let i=0; i<students.length; i++){
    console.log(`info of students #${i+1}`);
    for(let j=0; j<students[i].length; j++){
        console.log(students[i][j]);
    }
}