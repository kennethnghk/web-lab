import React from "react";
import Layout from "../components/Layout";
import List from "react-toolbox/lib/list/List";
import ListItem from "react-toolbox/lib/list/ListItem";
import Icon from "react-icons/lib/md/label";

const Page = () => (
  <Layout>
    <List selectable ripple>
      <ListItem caption="Jonathan 'Jon' Osterman" leftIcon={<Icon />} />
    </List>
  </Layout>
);

export default Page;
