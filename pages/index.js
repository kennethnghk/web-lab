import React from "react";
import Layout from "../components/Layout";
import { List, ListItem } from "material-ui/List";
import ActionInfo from "material-ui/svg-icons/action/info";

const Index = () => (
  <Layout>
    <List>
      <ListItem primaryText="Item 1" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Item 2" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Item 3" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Item 4" rightIcon={<ActionInfo />} />
    </List>
  </Layout>
);

export default Index;
