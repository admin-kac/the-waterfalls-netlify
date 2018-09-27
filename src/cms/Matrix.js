import React, { Component } from "react";
import styled from "styled-components";
import { WidgetPreviewContainer } from 'netlify-cms-ui-default';


const Input = styled.input`
  display: block;
  width: 100%;
  box-shadow: none;
  border: 2px solid #dfdfe3;
  border-radius: 0 5px 5px;
  padding: 16px 20px;
  font-size: 15px;
  transition: border-color 0.2s ease 0s;
  line-height: 1.5;

  &:focus {
    border-color: #3a69c7;
  }
`;

// This is the editing component
export class MatrixControl extends Component {
  handleChange(e) {
    console.log(
      // 'handleChange() - props:', this.props,
      'event:', e
    );
    this.props.onChange(e.target.value);
  }

  render() {
    const {
      value, // Current value of the field
      field, // the field object in the config.yml, as an Immutable.js Map. Can be used to allow specification of widget options in the config.
      forId, // the string ID of the field. Equivalent to `field.get('name')`. (Control component only.)
      onChange, // a function we call with the updated value of the field. (Control component only.).
      onAddAsset, // Adding assets
      onRemoveAsset, // Removing assets
      getAsset // Getting assets
    } = this.props;

    return <Input
      id={forId}
      value={value || ''}
      onChange={(e) => this.handleChange(e)}
    />;
  }
}

// This is the preview component
export const MatrixPreview = (props) => {
  const {
    value,
    field,
    metadata, // Immutable map of any available metadata for the current field
    getAsset, // Function for retrieving an asset url for image/file fields
    entry, // Immutable Map of all entry data
    fieldsMetaData // Immutable map of metadata from all fields.
  } = props;
  console.log('preview props: ', props);

  return <WidgetPreviewContainer>{value}</WidgetPreviewContainer>
};
