import React from 'react';
import FilterContainer from './FilterContainer';

const localType = [
  {
    id: 1,
    name: 'Restaurant'
  },
  {
    id: 2,
    name: 'Bar'
  },
  {
    id: 3,
    name: 'Pub'
  }
];
const kitchenType = [
  {
    id: 1,
    name: 'Internațională'
  },
  {
    id: 2,
    name: 'Românească'
  },
  {
    id: 3,
    name: 'Grecească'
  },
  {
    id: 4,
    name: 'Turcă'
  },
  {
    id: 5,
    name: 'Englezească'
  },
  {
    id: 6,
    name: 'Mediteraneană'
  }
];
const priceType = [
  {
    id: 1,
    name: 'Accesibil'
  },
  {
    id: 2,
    name: 'Moderat'
  },
  {
    id: 3,
    name: 'Premium'
  },
  {
    id: 4,
    name: 'Fine dining'
  }
];
const scoreType = [
  {
    id: 1,
    name: '5 stele'
  },
  {
    id: 2,
    name: '4 stele'
  },
  {
    id: 3,
    name: '3 stele'
  },
  {
    id: 4,
    name: '2 stele'
  },
  {
    id: 5,
    name: '1 stele'
  },
  {
    id: 6,
    name: 'Fară scor'
  }
];

/**
 * SidebarFilters component
 */
class SidebarFilters extends React.Component {
  render() {
    return (
      <div style={{ minWidth: '250px' }} className="sidebar">
        <FilterContainer filters={localType} title="Tip Local" />
        <FilterContainer filters={kitchenType} title="Bucătărie" />
        <FilterContainer filters={priceType} title="Preț" />
        <FilterContainer filters={scoreType} title="Scor" />
      </div>
    );
  }
}

export default SidebarFilters;
