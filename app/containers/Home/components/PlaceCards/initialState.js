import { fromJS } from 'immutable';

export default fromJS({
  data: {},
  loading: false,
  filters: {
    placeType: [],
    kitchenType: [],
    priceType: [],
    ratingType: []
  },
  filteredData: {}
});
