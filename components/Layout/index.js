import React from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

const Layout = props => (
  <MuiThemeProvider>
    <div>
      <AppBar title="Web-lab" showMenuIconButton={false} />
      {props.children}
    </div>
  </MuiThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
