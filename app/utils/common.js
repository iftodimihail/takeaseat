export const evalRating = (rating, totalReviews) => Math.floor(parseFloat(rating / totalReviews) * 2) / 2 || 0;

export const rangeArray = (start, end) => Array((end - start) + 1).fill().map((_, idx) => start + idx);

export const hours = rangeArray(0, 23);
