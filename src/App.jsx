import { useState } from 'react'
import Review from './components/Review'
import data from './data'

const App = () => {
  const [reviews, setReviews] = useState(data)
  const [review, setReview] = useState(0)

  const prevReview = () => {
    if (review === 0) {
      setReview(reviews.length - 1)
      return
    }
    setReview(review - 1)
  }

  const nextReview = () => {
    if (review === reviews.length - 1) {
      setReview(0)
      return
    }
    setReview(review + 1)
  }

  const randomReview = () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max)
    }
    const number = getRandomInt(reviews.length - 1)
    if (number === review) {
      randomReview()
      return
    }
    setReview(number)
  }

  return (
    <main>
      <Review
        {...reviews[review]}
        prevReview={prevReview}
        nextReview={nextReview}
        randomReview={randomReview}
      />
    </main>
  )
}

export default App
