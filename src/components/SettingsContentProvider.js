import React from "react";
export const SettingsContext = React.createContext(null);

class SettingsContentProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "day"
    };
  }

  changeMode = () => {
    if (this.state.mode === "day") {
      document.body.style.background = "#3e3f53";
      this.setState({
        mode: "night"
      });
    } else {
      document.body.style.background = "#ffffff";
      this.setState({
        mode: "day"
      });
    }
  };

  render() {
    const values = { ...this.state, changeMode: this.changeMode };
    return (
      <SettingsContext.Provider value={values}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsContentProvider;
