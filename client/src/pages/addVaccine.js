import React from 'react';
import { graphql } from 'react-apollo';
import getDoseType from '../queries/getDoseType';

class AddVacine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      doseType: 'unique'
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    let state = {};
    switch (name) {
      case 'title':
        state = { title: value };
        break;
      case 'description':
        state = { description: value };
        break;
      case 'doseType':
        state = { doseType: value };
        break;
    }
    this.setState(state);
  }

  renderForm() {
    const { doseType } = this.props;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            onChange={this.onChange}
            value={this.state.description}
          />
        </label>
        <br />
        <label>
          Dose Type:
          <select name="doseType" onChange={this.onChange}>
            {doseType.__type.enumValues.map((dt, idx) => (
              <option key={idx}>{dt.name}</option>
            ))}
          </select>
        </label>
        <br />
        <input type="submit" value="Save" />
      </form>
    );
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  render() {
    const { doseType } = this.props;
    return doseType.loading ? this.renderLoading() : this.renderForm();
  }
}

export default graphql(getDoseType, { name: 'doseType' })(AddVacine);
