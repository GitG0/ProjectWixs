import React, {Component} from 'react';
import RichTextDisplay from "../RichTextDisplay";

export class RichTextBox extends Component {
  render() {
    return (
      <div {...this.props} className={[this.props.className].join(' ')}>
        {this.props.children}
        <RichTextDisplay content={this.props.content.value} />
      </div>
    );
  }
}

// legend information
export const SCHEMA = {
  type: RichTextBox,
  gridOptions: {h: 2, w: 4, minW: 2, minH: 2},     // grid options parameters: minW, maxW, minH, maxH, isDraggable, isResizable, static
  title: "Text Area",
  desc: "A text component that allows for bold, underline, bullet points and more",
  props: {
    content: {
      type: "RichText",
      name: "Content",
      value: null,
    }
  }
};