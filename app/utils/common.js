export const evalRating = (rating, totalReviews) => Math.floor(parseFloat(rating / totalReviews) * 2) / 2 || 0;
