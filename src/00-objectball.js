const gameObject = () => {
    let gmObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ['Black', 'White'],
            players: {
        "Alan Anderson": {
                number: 0,
                shoe:   16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks:1,
        },
        "Reggie Evans": {
                number: 30,
                shoe:   14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks:7,
        },
        "Brook Lopez" : {
                number: 11,
                shoe:   17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks:15,
        },
        "Mason Plumlee" :{
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
        },
        "Jason Terry" : {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
        },    
    }
 },
        away : {
            teamName: "Charlotte Hornets",
            colors: ['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                  },
                  "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                  },
                  "DeSagna Diop": {
                    number: 2,
                    shoe: 21,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                  },
                  "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                  },
                  "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                  },
                },
              },
            };
            return gmObject;
        };
   
    
function numPointsScored (name) {
  let object = gameObject();
    if (name === object.home.players[name]) {
        for (let player in object.home.players[name]) {
          return object.home.players[player].points
        }
    } else if (name === object.away.players[name]) {
          for (let player in object.away.player[name]) {
            return object.away.players[player].points
      }
    } else 
    return object;
};

console.log(numPointsScored('Reggie Evans'));

// const shoeSize = (name) => {
//   let object = gameObject();
//   if (name === object.home.players) {
//     for (const key in object) {
//     return object.home.players[name].shoeSize
//   }
//  } else if (name === object.away.players) {
//     for (const key in object) {
//     return object.away.players[name].shoeSize
//   } 
// } else
//     return `${name} is not a player`
// };

// console.log(shoeSize("Jeff Adrien"));

// Build a function, teamColors, that takes in an argument of the team name,
// and returns an array of that teams colors.
function teamColors (name) {
  let object = gameObject()
  if (name === object.home.teamName) {
    return object.home.colors
  } else if (name === object.away.teamName){
    return object.away.colors
  } else 
    return `${name} does not exist.`
}
// console.log(teamColors("Brooklyn Nets"))

// Build a function, teamNames, that operates on the game object 
// to return an array of the team names.

const teamNames = () => {
  let object = gameObject();
  let ourTeams = [object.home.teamName, object.away.teamName];
  return ourTeams;
}
// console.log(teamNames());

// function playerNumbers that returns an array of the jersey numbers
 const playerNumbers = (name) => {
  let object = gameObject();
  let playersJersys = [];
  if (name === object.home.teamName) {
    for (let player in object.home.players) {
      playersJersys.push(object.home.players[player].number)
    }
  } else
    for (let player in object.away.players) {
      playersJersys.push(object.away.players[player].number)
    }
    return playersJersys
  } 
// console.log(playerNumbers("Brooklyn Nets"));
// console.log(playerNumbers("Charlotte Hornets"));

// function player stats
function playerStats (player) {
  let object = gameObject();
  if (player === object.home.players) {
    for(let key in object.home.players) {
        return player[key]
    }
  } else if (player === object.away.players){
    for(let key in object.away.players) {
      return player[key]
    }
  } else
      return false
}
console.log(playerStats("Alan Anderson"));

// returns the nuumber of rebounds associated with the player that has the largest shoe size
function bigShoeRebounds () {
  // finding the player with the largest shoe size
  let object = gameObject();
  

  // return the players's number of rebounds

  // 
}