import React from "react";
import Layout from "../components/Layout";
import List from "react-toolbox/lib/list/List";
import ListItem from "react-toolbox/lib/list/ListItem";

const page = () => (
  <Layout>
    <List selectable ripple>
      <ListItem caption="Jonathan 'Jon' Osterman" />
    </List>
  </Layout>
);

export default page;
