function generatePosition() {
    let positions = ["Frontend Developer", "Backend Developer", "Quality Engineer", "Data Scientist"]
    return positions[Math.floor(Math.random() * positions.length)];
}

function generateNum() {
    let Num = ""
    for (let i = 0; i < 10; i++) {
        Num += (Math.floor(Math.random() * 9).toString());
    }
    return Num;
}

// no use so far
function generateRandomName() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let name = '';
    for (let i = 0; i < 5; i++) {
        name += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return name;
}

function generateSalary() {
    return "$" + Math.floor(Math.random() * 9 + 1) + "00000";
}

// no use so for
function generateMail() {
    return generateRandomName() + "@email.com";
}

function generateRandomValidName() {
    let names = [
        "Isabella Mann",
        "Nehemiah Hamilton",
        "Mackenzie Kim",
        "Roman Goodwin",
        "Shiloh Barr",
        "Harley Donovan",
        "Azariah Cortez",
        "Zayn Matthews",
        "Lila Buck",
        "Jon Vang",
        "Madisyn Gonzalez",
        "Ethan Lowe",
        "Amari Vazquez",
        "Jesse Carr",
        "Rowan McCall",
        "Kiaan Ray",
        "Ruth Barajas",
        "Brennan Hester",
        "Zendaya Preston",
        "Vincenzo Kennedy",
        "Brianna Abbott",
        "Kohen Hubbard",
        "Rosie Beck",
        "Eduardo Frazier",
        "Octavia Schneider",
        "Raymond Fleming",
        "Fatima Frye",
        "Franco Conrad",
        "Bexley Enriquez",
        "Elisha Charles",
        "Jenna Bonilla",
        "Aden Reyna",
        "Luella Cantrell",
        "Harris Weeks",
        "Karen David",
        "Alonso Pierce",
        "Arabella Wang",
        "Cohen Vaughn",
        "Reign Merritt",
        "Colten Flores",
        "Emilia Jaramillo",
        "Riggs Perkins",
        "Sage Avery",
        "Jakari Perkins",
        "Sage Calderon",
        "Oakley Sawyer",
        "Marina O’brien",
        "Riley Mills",
        "June Holmes",
        "King Leal",
        "Murphy Acosta",
        "Jensen Vaughn",
        "Reign Pollard",
        "Jad Howe",
        "Persephone Rice",
        "Graham Welch",
        "Amira Molina",
        "Prince Douglas",
        "Aniyah Johnson",
        "Noah O’Donnell",
        "Bellamy Castillo",
        "Kai O’Neill",
        "Kenna Avila",
        "Jaylen Potter",
        "Rory Carey",
        "Watson Porter",
        "Ryleigh McClain",
        "Mitchell Summers",
        "Frankie Drake",
        "Jalen Kirby",
        "Skyla Shaffer",
        "Dexter James",
        "Quinn Newman",
        "Anderson Singh",
        "Vivienne Pruitt",
        "Gatlin Bauer",
        "Haley Robinson",
        "Matthew Harper",
        "Ana Rivas",
        "Damon Schneider",
        "Delaney Pearson",
        "Gunner Schmitt",
        "Queen Costa",
        "Kenji Mullen",
        "Shay Bean",
        "Mccoy Perez",
        "Eleanor McFarland",
        "Dane Golden",
        "Giuliana Hood",
        "Brixton Bernard",
        "Barbara Hull",
        "Salem Gaines",
        "Aya Fisher",
        "Gael Yates",
        "Charley Ibarra",
        "Asa Barron",
        "Anya Cox",
        "Connor Webb",
        "Ariella Pruitt",
        "Gatlin Pena",
        "Rachel Lin",
        "Conor Barr",
        "Noemi Boyd",
        "Dean Leon",
        "Amora Lane",
        "Matias Conley",
        "Salem McKay",
        "Joey Santana",
        "Myra Khan",
        "Kendrick Mosley",
        "Zaniyah Weber",
        "Crew Bernal",
        "Emmeline Donaldson",
        "Canaan Duarte",
        "Kynlee Mejia",
        "Atticus Hurst",
        "Adalee Griffin",
        "Ayden Chen",
        "Valeria Estes",
        "Hakeem Vargas",
        "Andrea Hayes",
        "Legend Dorsey",
        "Addyson Mathis",
        "Gustavo Conway",
        "Ryann Tanner",
        "Bruno O’Neal",
        "Treasure Mitchell",
        "Jaxon Wallace",
        "Arianna McCarty",
        "Blaise Anthony",
        "Macy Soto",
        "Barrett Powell",
        "Vivian Howell",
        "Bradley Fowler",
        "Lennon Crosby",
        "Tristen Spence",
        "Aislinn Lopez",
        "Michael Buck",
        "Livia Maddox",
        "Lyric Farmer",
        "Madelynn Wang",
        "Cohen Booth",
        "Zariyah Pennington",
        "Bobby Davidson",
        "Jayla Ingram",
        "Tripp Gonzalez",
        "Abigail Hunter",
        "Archer Morton",
        "Mallory Rodriguez",
        "Henry Owens",
        "Amaya Washington",
        "Juan Shaw",
        "Emersyn Lam",
        "Bodie Livingston",
        "Milena Chavez",
        "Ian Melendez",
        "Bethany Salinas",
        "Edgar Atkins",
        "Mina Richmond",
        "Mordechai Green",
        "Zoe Parker",
        "Caleb Austin",
        "Alivia Neal",
        "Kane Mack",
        "Nadia Cummings",
        "Raiden Blackwell",
        "Saoirse Villegas",
        "Clyde Hansen",
        "Hope Malone",
        "Ruben O’Neal",
        "Treasure Fields",
        "Clayton Pollard",
        "Marisol Rosario",
        "Jedidiah McKenzie",
        "Briar Person",
        "Moses Herrera",
        "Ximena Blevins",
        "Avi Harrell",
        "Kara Guerrero",
        "Bryce Parrish",
        "Tiana Lane",
        "Matias Corona",
        "Marianna Brandt",
        "Damir Espinoza",
        "Lucille Shaffer",
        "Dexter Person",
        "Dylan Warner",
        "Jaxton Phan",
        "Elsa Knapp",
        "Boden Boyle",
        "Aliya Larson",
        "Rafael Shepherd",
        "Katalina Cook",
        "Ezekiel Savage",
        "Louise Guzman",
        "Jude Franklin",
        "Angela Nixon",
        "Cory Hartman",
        "Kennedi Blackburn",
        "Zahir French",
        "Lorelai Leonard",
        "Ricardo Hahn",
        "Fallon Briggs",
        "Case Richards",
        "Trinity Tang",
        "Rogelio Baker",
        "Isla Peters",
        "Patrick Whitney",
        "Madalynn Walter",
        "Lochlan Rice",
        "Ada Corona",
        "Darian Ryan",
        "Morgan Valentine",
        "Demetrius Boone",
        "Mariam Kramer",
        "Kylan Trujillo",
        "Danielle Gonzales",
        "Brayden Munoz",
        "Kehlani Roberts",
        "Josiah McIntyre",
        "Rebekah Lozano",
        "Boone Crane",
        "Della Holloway",
        "Sutton Hayden",
        "Avayah Parsons",
        "Lewis Pham",
        "Raelyn Simpson",
        "Elliott Yates",
        "Charley English",
        "Junior Marin",
        "Celia Schroeder",
        "Izaiah Morse",
        "Kairi McKinney",
        "Romeo Beil",
        "Itzel Lamb",
        "Kaysen Patterson",
        "Kaylee Baldwin",
        "Jaiden Ibarra",
        "Madilynn Barrera",
        "Makai Lucero",
        "Ila Stone",
        "Finn Mitchell",
        "Willow Bryan",
        "Jaxtyn Huff",
        "Karsyn Farley",
        "Graysen Newton",
        "Braelynn Ramos",
        "Angel Walters",
        "Samara Walker",
        "Luke Stanton",
        "Jaycee Winters",
        "Deandre Lang",
        "Amirah Rice",
        "Graham Booth",
        "Zariyah Cardenas",
        "Johnathan Rich",
        "Sunny Pacheco",
        "Erik Figueroa",
        "Lilith Cordova",
        "Vicente Adkins",
        "Emelia Blackwell",
        "Marcellus Goodwin",
        "Shiloh Bond",
        "Roger Mack",
        "Nadia Garza",
        "Judah Johnson",
        "Emma Sharp",
        "Royce O’Neal",
        "Treasure Romero",
        "Bryson Barrett",
        "Kendall Hines",
        "Uriel Mercado",
        "Mckinley Rollins",
        "Wes Hayes",
        "Iris Mullins",
        "Allen Hayden",
        "Avayah Warner",
        "Jaxton Hogan",
        "Kathryn Valentine",
        "Demetrius Owens",
        "Amaya Ford",
        "Luis Arellano",
        "Faye Poole",
        "Quincy Guevara",
        "Teresa Meyers",
        "Julien Summers",
        "Frankie Jensen",
        "Cash Hutchinson",
        "Jamie Frost",
        "Dario Roman",
        "Astrid Booth",
        "Chaim Mathis",
        "Anne Sullivan",
        "Evan Vaughn",
        "Reign Trevino",
        "Jaime Giles",
        "Bailee Fernandez",
        "Bentley Montes",
        "Roselyn Palacios",
        "Thaddeus Harding"
    ];
    return names[Math.floor(Math.random() * 300)]
}

// making up data
var data = [];
for (let i = 0; i < 300; i++) {
    let randomName = generateRandomValidName();
    data.push({
        id: i + 1,
        name: randomName,
        number: generateNum(),
        mail: randomName.replace(' ', '').toLowerCase() + "@email.com",
        position: generatePosition(),
        salary: generateSalary(),
    })
}

console.log(data)


