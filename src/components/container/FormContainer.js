import React, { Component } from 'react';
import Input from '../presentational/Input';

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {
        const { title } = this.state;
        return (
          <form id="article-form">
              <Input
                  handleChange={this.handleChange}
                  id="title"
                  label="title"
                  text="Title"
                  type="text"
                  value={title}
              />
          </form>
        );
    }
}

export default FormContainer;