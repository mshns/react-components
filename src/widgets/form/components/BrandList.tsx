import React from 'react';

import brands from '../constants/brands';

class BrandList extends React.Component {
  render() {
    return brands.map((item) => (
      <option value={item.value} key={item.id}>
        {item.name}
      </option>
    ));
  }
}

export default BrandList;
