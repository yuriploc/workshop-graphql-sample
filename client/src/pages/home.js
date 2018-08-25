import React from 'react';
import { graphql } from 'react-apollo';
import getAllVaccines from '../queries/getAllVaccines';

class Home extends React.PureComponent {
  render() {
    console.log(this.props);
    return <div>Home!!!</div>;
  }
}

export default graphql(getAllVaccines, { name: 'vaccines' })(Home);
