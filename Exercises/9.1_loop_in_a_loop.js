// 9.1 
const listOfNeighbours = [ 
    ["Canada", "Mexico"], // 0
    ["Spain"], // 1
    ["Norway", "Sweden", "Russia"], // 2
    ];
    
    for (let i = 0; i < listOfNeighbours.length; i++) {
        const neighbours = listOfNeighbours[i];
    for (let x = 0; x < neighbours.length; x++) {
        console.log(`Neighbour: ${neighbours[x]}`);
    }
      }