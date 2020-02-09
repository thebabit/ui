import React from 'react';
import { getMovie } from "../remote/MovieApi";

interface IMovieState {
    title: string

}

export class MovieSearchComponent extends React.Component<any, IMovieState>{
    constructor(props: any) {
        super(props)
        this.state = {
            title: 'this is the title',
    
        }
    }



    async componentDidMount() {
        let movie = await getMovie()
        this.setState({
            ...this.state,
            title: movie,
           
        })
    }

    getNewMovie = async () =>{
        let movie = await getMovie()
        this.setState({
            ...this.state,
            title: movie,
           

        })
    }

    render() {
        return (
            <div>
                <p>This is the ChuckNorris Joke Component</p>
          
                <p>Current Joke</p>
                <p>{this.state.title}</p>
            </div>
        )
    }
}