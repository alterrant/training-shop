export const averageRatingReviews = (reviews) => reviews.map(item => item.rating).reduce((preRating, rating) => {
    return Math.round((+preRating + +rating) / 2)
  })