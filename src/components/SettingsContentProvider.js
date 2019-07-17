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
      this.setState({
        mode: "night"
      });
    } else {
      this.setState({
        mode: "day"
      });
    }
    //console.log(this.state.mode);
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
