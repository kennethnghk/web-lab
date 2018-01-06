import React from "react";
import PropTypes from "prop-types";
import "isomorphic-unfetch";
import { Card, CardHeader, CardMedia, CardText } from "material-ui/Card";
import Layout from "../components/Layout";

const FEED_URL = "https://www.instagram.com/euro2020/?__a=1";

const InstaFeed = props => (
  <Layout>
    {props.items.map((item, index) => (
      <Card style={{ margin: "0 0 10px 0" }} key={index}>
        <CardHeader
          title={props.user.username}
          avatar={props.user.profile_pic_url}
        />
        <CardMedia>
          <img src={item.thumbnail_src} alt="" />
        </CardMedia>
        <CardText>{item.caption}</CardText>
      </Card>
    ))}
  </Layout>
);

InstaFeed.getInitialProps = async () => {
  const res = await fetch(FEED_URL);
  const json = await res.json();
  return {
    user: json.user,
    items: json.user.media.nodes
  };
};

InstaFeed.propTypes = {
  user: PropTypes.object,
  items: PropTypes.array
};

export default InstaFeed;
