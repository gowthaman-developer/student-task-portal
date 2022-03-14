import React, { Component } from "react";
import { Layout, Typography } from "antd";

import Classes from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <Layout.Header className={Classes.header}>
        <Typography.Title
          level={1}
          style={{ color: "white", fontWeight: "normal" }}
        >
          Student task portal
        </Typography.Title>
      </Layout.Header>
    );
  }
}

export default Header;
