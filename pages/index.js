import React from "react";
import Link from "next/link";
import { List, ListItem } from "material-ui/List";
import ActionInfo from "material-ui/svg-icons/action/info";
import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <List>
      <Link href="/instafeed">
        <ListItem primaryText="InstaFeed" rightIcon={<ActionInfo />} />
      </Link>
    </List>
  </Layout>
);

export default Index;
