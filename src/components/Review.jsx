import React from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = ({
  name,
  job,
  image,
  text,
  prevReview,
  nextReview,
  randomReview,
}) => {
  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='btn-container'>
        <button onClick={prevReview} className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button onClick={nextReview} className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomReview} className='btn btn-hipster'>
        Surprise me
      </button>
    </article>
  )
}

export default Review
