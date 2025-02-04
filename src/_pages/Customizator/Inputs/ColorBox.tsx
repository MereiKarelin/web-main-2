import * as React from 'react';
import styled from 'react-css-styled';

import ColorPicker from '@/_pages/Customizator/Inputs/ColorPicker';
import Input from '@/_pages/Customizator/Inputs/Input';
import TextBox from '@/_pages/Customizator/Inputs/TextBox';
import { prefix } from '@/_pages/Customizator/utils';
import { IObject } from '@daybrush/utils';

const ColorBoxElement = styled(
  'div',
  `
.scena-color-input {
    position: relative;
}
.scena-color-picker {
    position: absolute;
    bottom: 110%;
    left: 45px;
    transform: translateY(10px) translateZ(1px);
    z-index: 10;
}

.scena-color-background {
    position: relative;
    width: 30px;
    height: 30px;
    background: #4af;
    border-radius: 5px;
    display: inline-block;
    vertical-align: top;
    margin-right: 5px;
}
.scena-color-background+.scena-input {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 40px);
}

`,
);

export default class ColorBox extends Input<object, object, HTMLDivElement> {
  protected inputAttributes: IObject<any> = {};
  protected colorInput = React.createRef<ColorPicker>();
  protected textInput = React.createRef<TextBox>();
  public state = {
    display: 'none',
    color: '#fff',
  };
  public render() {
    return (
      <ColorBoxElement
        className="shadow-black flex flex-row gap-1"
        ref={this.input}
        onBlur={this.onBlur}
      >
        <div
          className="h-8 w-8 rounded-md"
          style={{
            backgroundColor: this.state.color,
          }}
          onClick={this.onClick}
        ></div>
        <TextBox
          ref={this.textInput}
          onChange={this.onChange}
          inputProps={{
            onFocus: this.onFocus,
          }}
        ></TextBox>
        {this.renderPicker()}
      </ColorBoxElement>
    );
  }
  public renderPicker() {
    const { display } = this.state;

    if (display === 'none') {
      return;
    }
    return (
      <div
        className={prefix('color-picker')}
        onMouseDown={this.onDragStart}
        onTouchStart={this.onDragStart}
        style={{
          display,
        }}
      >
        <ColorPicker ref={this.colorInput} onChange={this.onChange} />
      </div>
    );
  }
  public setValue(v: string) {
    this.setState({
      color: v,
    });
    this.textInput.current?.setValue(v);
    this.colorInput.current?.setValue(v);
  }
  public getValue() {
    return this.textInput.current?.getValue();
  }
  public onFocus = () => {
    this.setState({
      display: 'block',
    });
  };
  public onBlur = (e: any) => {
    const relatedTarget = e.nativeEvent.relatedTarget;

    if (this.getElement().contains(relatedTarget)) {
      return;
    }
    this.setState({
      display: 'none',
    });
  };
  private onChange = (v: string) => {
    this.props.onChange(v);
  };
  private onDragStart = (e: any) => {
    if (e.target.tagName === 'INPUT') {
      return;
    }
    e.preventDefault();
  };
  private onClick = () => {
    this.textInput.current?.getElement().focus();
  };
}
