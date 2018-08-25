import React from 'react';
import { graphql, compose } from 'react-apollo';
import getDoseTypes from '../queries/getDoseTypes';
import addVaccine from '../queries/addVaccine';
import getAllVaccines from '../queries/getAllVaccines';

class AddVaccine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      doseType: 'unique'
    };
    this.onChange = this.onChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
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
      case 'doseTypes':
        state = { doseType: value };
        break;
    }
    this.setState(state);
  }

  onHandleSubmit(event) {
    event.preventDefault();
    const { title, description, doseType } = this.state;
    const { addVaccine } = this.props;
    addVaccine({
      variables: {
        title,
        description,
        doseType
      },
      refetchQueries: [{ query: getAllVaccines }]
    }).then(() => {
      this.props.history.push('/');
    });
  }

  renderForm() {
    const { doseTypes } = this.props;
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
          <select name="doseTypes" onChange={this.onChange}>
            {doseTypes.__type.enumValues.map((dt, idx) => (
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
    const { doseTypes } = this.props;
    return doseTypes.loading ? this.renderLoading() : this.renderForm();
  }
}

export default compose(
  graphql(addVaccine, { name: 'addVaccine' }),
  graphql(getDoseTypes, { name: 'doseTypes' })
)(AddVaccine);
