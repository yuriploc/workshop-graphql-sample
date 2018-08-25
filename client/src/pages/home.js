import React from 'react';
import { graphql } from 'react-apollo';
import getAllVaccines from '../queries/getAllVaccines';

class Home extends React.PureComponent {
  renderLoading() {
    return <div>Loading...</div>;
  }

  renderVaccinesList() {
    const { vaccines } = this.props;
    return (
      <div>
        <div>List:</div>
        <ul>
          {vaccines.getAllVaccines.map((v, idx) => (
            <li key={v.idx}>
              {v.title} - {v.description} - {v.doseType}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { vaccines } = this.props;

    return vaccines.loading ? this.renderLoading() : this.renderVaccinesList();
  }
}

export default graphql(getAllVaccines, { name: 'vaccines' })(Home);
