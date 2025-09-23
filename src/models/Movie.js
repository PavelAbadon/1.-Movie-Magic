 const movies = [
    {
      "_id": "h001",
      "title": "Nosferatu",
      "genre": "Horror",
      "description": "In this unauthorized adaptation of Dracula, the vampire Count Orlok expresses interest in a new residence and real estate agent Hutter's young wife, Ellen.",
      "imageUrl": "https://posterspy.com/wp-content/uploads/2022/10/nosferatu-genzo-1280.jpg",
      "director": "F. W. Murnau",
      "year": "1922",
      "rating": 7.9,
      "category": "movie"
    },
    {
      "_id": "h002",
      "title": "Dracula",
      "genre": "Horror",
      "description": "The ancient vampire Count Dracula arrives in England and begins to prey upon the virtuous young Mina.",
      "imageUrl": "https://www.mmobomb.com/file/2024/8/castlevania-dead-by-daylight-feat.jpg",
      "director": "Tod Browning",
      "year": "1931",
      "rating": 7.5,
      "category": "movie"
    },
    {
      "_id": "h003",
      "title": "Frankenstein",
      "genre": "Horror",
      "description": "Dr. Frankenstein dares to tamper with life and death by creating a human monster out of lifeless body parts.",
      "imageUrl": "https://tse3.mm.bing.net/th/id/OIP.CT4v1JE2igzEQgEadI35XgHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3",
      "director": "James Whale",
      "year": "1931",
      "rating": 7.8,
      "category": "movie"
    },
    {
      "_id": "h004",
      "title": "Psycho",
      "genre": "Horror, Thriller",
      "description": "A secretary embezzles money and checks into a remote motel run by a young man under the domination of his mother.",
      "imageUrl": "https://tse2.mm.bing.net/th/id/OIP.uKhHHpiNnlCWsZ_jlWCyIgHaJ8?rs=1&pid=ImgDetMain&o=7&rm=3",
      "director": "Alfred Hitchcock",
      "year": "1960",
      "rating": 8.5,
      "category": "movie"
    },
    {
      "_id": "h005",
      "title": "Night of the Living Dead",
      "genre": "Horror",
      "description": "A group of people trapped in a farmhouse must fight to stay alive against a horde of flesh-eating ghouls.",
      "imageUrl": "https://th.bing.com/th/id/R.16013edf292e608ff7c4a441725baa7b?rik=PgTpGNMwq%2fkjrQ&pid=ImgRaw&r=0",
      "director": "George A. Romero",
      "year": "1968",
      "rating": 7.8,
      "category": "movie"
    },
    {
      "_id": "h006",
      "title": "The Exorcist",
      "genre": "Horror",
      "description": "When a young girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
      "imageUrl": "https://tse4.mm.bing.net/th/id/OIP.DKLvHNGtNgdEInrSFQLrmgHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3",
      "director": "William Friedkin",
      "year": "1973",
      "rating": 8.1,
      "category": "movie"
    },
    {
      "_id": "h007",
      "title": "Halloween",
      "genre": "Horror, Slasher",
      "description": "Fifteen years after murdering his sister, Michael Myers escapes from a mental hospital and returns to his hometown to kill again.",
      "imageUrl": "https://tse4.mm.bing.net/th/id/OIP.Sqvs0_xSBVZIsbKws5H6gwHaLO?rs=1&pid=ImgDetMain&o=7&rm=3",
      "director": "John Carpenter",
      "year": "1978",
      "rating": 7.7,
      "category": "movie"
    }
  ]

 
 export default class Movie{
    static find(){
        return movies.slice() 
    }
 }