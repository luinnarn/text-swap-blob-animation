import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  width: 50%;
  margin: 20px auto;
  overflow: hidden;
  form {
  padding: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
  hr {
    width: 100%;
    border: none;
  }
  label {
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 2px 20px;
    flex: 1 1 160px;
    input {
      width: 100%;
      margin: 10px auto;
      padding: 5px;
      &[type="submit"] {
        width: 150px;
      }
    }
    span {
      position: absolute;
      right: 40px;
    }
    textarea {
      flex-grow: 1;
      margin: 10px auto;
      width: 100%;
    }
  }
`;

class ConfigPanel extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.apply = this.apply.bind(this);
    this.state = {};
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  apply = e => {
    this.props.apply(this.state);
    e.preventDefault();
  };

  addText = (index, text) => {
    const textArray = text.trim().split(/\r?\n/);
    let totalText = this.state.text ? [...this.state.text] : [];
    text === '' ? totalText.splice(index, 1) : totalText[index] = textArray;
    this.setState({text: totalText});
    console.log(this.state.text);
  };

  render() {
    const numberOfTextEntries = this.state.text && this.state.text.length > 0 ? this.state.text.length + 1 : 1;

    return (
      <Panel>
          <form onSubmit={this.apply}>
            <label htmlFor="height">Height
              <input type="number" name="height" id="height" placeholder="Height" onChange={this.handleChange} />
            </label>

            <label htmlFor="duration">Duration
              <input type="number" name="duration" id="duration" placeholder="Duration" onChange={this.handleChange} />
            </label>

            <label htmlFor="blend">Blend<span>{this.state.blend || '0.1'}</span>
              <input type="range" min="0.1" max="1" step="0.05" name="blend" id="blend" placeholder="Blend" onChange={this.handleChange} />
            </label>
            <hr />

            {Array.apply(null, Array(numberOfTextEntries)).map((t, i) =>
                (<React.Fragment>
                  <label key={i} htmlFor="text">Text {i+1}
                    <textarea rows="4" cols="40" name="text" id="text" placeholder="Text" onChange={e => setTimeout(this.addText(i, e.target.value),300)} />
                  </label>
                  <hr />
                </React.Fragment>)
            )}

            <label>
            <input type="submit" value="Apply"/>
            </label>
          </form>
      </Panel>
    )
  }

}

export default ConfigPanel;