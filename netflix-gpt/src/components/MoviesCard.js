import React from 'react'
import { Movie_Poster_URL } from '../utils/constants'

const MoviesCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt='MoviePoster' src={Movie_Poster_URL + posterPath}></img>
    </div>
  )
}

export default MoviesCard