import React, { Component } from 'react';
import './CardContainer.css';
import Card from './Card.js';
import Rating from './rating.js';
import Search from './Search.js';
import NewFilm from './NewFilm.js';

// const Movie = [
//     {
//         title:'Creed II',
//         img:"https://img.yts.am/assets/images/movies/creed_ii_2018/medium-cover.jpg",
//         rating:'4',  
//     },
//     { 
//         title:'Ralph Breaks the Internet',
//         img:"https://img.yts.am/assets/images/movies/ralph_breaks_the_internet_2018/medium-cover.jpg",
//         rating:'3',   
//     },
//     { 
//         title:'Robin Hood',
//         img:"https://img.yts.am/assets/images/movies/robin_hood_2018/medium-cover.jpg",
//         rating:'3',    
//     }
// ]
class CardContainer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        rate:0,
        movieName: '',
        listOfMovies: [
            {
                title:'Dachra',
                img:"https://p1.cineserie.com/www.cineserie.com/wp-content/uploads/2018/09/1112760.jpg?resize=212%2C318&ssl=1&ver=1",
                rating:4,  
            },
            { 
                title:'the djinn',
                img:"https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Djinn_poster.jpg/215px-Djinn_poster.jpg",
                rating:3,   
            },
            { 
                title:'Timbuktu',
                img:"https://www.cncd.be/IMG/evenementon736.jpg",
                rating:3,    
            }
        ]
      }
    }
    //search bar
    searchMovie = (event) =>
     {
         this.setState ({ movieName : event.target.value})
     }
     //add movies
     addMovie = (data) =>
     {
            // Movie = Movie.concat(data);
            //add movie this.setstate
         this.setState ({ listOfMovies : this.state.listOfMovies.concat(data)})
     }
     //search using rate
     searchRateMovie = (rate) =>
     {
            // Movie = Movie.concat(data);
         this.setState ({ rate : rate})
     }

  render() {
    return (
        <div>
            
        <div className="container">
                <div className="search">
                    <Search searched={this.searchMovie}  />
                    <NewFilm newmovies={this.addMovie} /> 
                    <Rating
                        number={this.state.rate}
                        onClickStar={i => this.searchRateMovie(i)} />
                    {/* <Rating star={this.state.listOfMovies.rating} /> */}
                </div>
            
              <div className="row">
                      {this.state.listOfMovies.filter(el => el.title.toLowerCase().includes(this.state.movieName.toLowerCase()) && (el.rating >= this.state.rate)).map((el) =>
                      <div className="col">
                          <Card movie={el}/>
                      </div> 
                      )}
                     
              </div>
          </div>

      </div>
    );
  }
}

export default CardContainer