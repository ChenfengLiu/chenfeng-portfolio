import React, { Component } from "react";
import colors from "./colors";
import tinycolor from "tinycolor2";

const styles = {
  colors: {
    display: "flex",
    flexWrap: "wrap"
  },
  colorGroup: {
    flex: "auto",
    minWidth: "35%",
    maxWidth: "35%",
    padding: "2em"
  },
  block: {
    width: "100%",
    display: "flex",
    height: 60,
    padding: "1em",
    fontSize: "1em"
  },
  blockLG: {
    display: "flex",
    height: 120
  }
};

class ColorDisplay extends Component {

  renderTitle() {
    return (
      <div>
        <h1> Portfolio Style Guide </h1>
      </div>
    );
  }

  renderColorGroup() {
    return colors.map((colorsGroups, index) => {

      const group = colorsGroups.map((color, colorIndex) => {
        const isLight = tinycolor(color.color).isLight();

        return (
          <div
            key={colorIndex}
            style={Object.assign({}, {backgroundColor: color.color}, styles.block, (colorIndex === 0) ? styles.blockLG : undefined)}
          >
            <span
              style={{
                flex: "auto",
                color: isLight ? "black" : "white"
              }}
            >
              {color.name}
            </span>
            <span
              style={{
                flex: "auto",
                textAlign: "right",
                color: isLight ? "black" : "white"
              }}>
                {color.color}
              </span>
          </div>
        )

      });

      return (
        <div key={index} style={styles.colorGroup}>
          {group}
        </div>
      )
    });
  }

  render() {
    return (
      <div title="Colors">
        {this.renderTitle()}
        <div style={styles.colors}>
          {this.renderColorGroup()}
        </div>
      </div>
    )
  }
}


export default ColorDisplay;
