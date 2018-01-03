import React from "react";
import Link from "next/link";
import { List, ListItem } from "material-ui/List";
import ActionInfo from "material-ui/svg-icons/action/info";
import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <List>
      <Link href="/feed">
        <ListItem primaryText="Item 1" rightIcon={<ActionInfo />} />
      </Link>
    </List>
  </Layout>
);

export default Index;
