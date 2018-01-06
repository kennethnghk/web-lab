import React from "react";
import PropTypes from "prop-types";
import "isomorphic-unfetch";
import { Card, CardHeader, CardMedia, CardText } from "material-ui/Card";
import Layout from "../components/Layout";

const FEED_URL = "https://www.instagram.com/aragakiyui_fanspage/?__a=1";
const SCROLL_OFFSET = 2000;

class InstaFeed extends React.Component {
  listContainer = null;
  isFetching = false;

  state = {
    user: null,
    items: [],
    maxId: null
  };

  getItems = async maxId => {
    this.isFetching = true;

    const feedUrl = maxId ? FEED_URL + "&max_id=" + maxId : FEED_URL;
    const res = await fetch(feedUrl);
    const json = await res.json();
    this.setState({
      user: json.user,
      items: this.state.items.concat(json.user.media.nodes),
      maxId: json.user.media.page_info.end_cursor
    });

    this.isFetching = false;
  };

  onScroll = () => {
    const scrollY = window.scrollY;
    if (
      !this.isFetching &&
      scrollY > this.listContainer.clientHeight - SCROLL_OFFSET
    ) {
      this.getItems(this.state.maxId);
    }
  };

  componentDidMount() {
    this.getItems();
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    const { user, items } = this.state;

    return (
      <Layout>
        <div ref={listContainer => (this.listContainer = listContainer)}>
          {items.map((item, index) => (
            <Card style={{ margin: "0 0 10px 0" }} key={index}>
              <CardHeader title={user.username} avatar={user.profile_pic_url} />
              <CardMedia>
                <img src={item.thumbnail_src} alt="" />
              </CardMedia>
              <CardText>{item.caption}</CardText>
            </Card>
          ))}
        </div>
      </Layout>
    );
  }
}

InstaFeed.propTypes = {
  user: PropTypes.object,
  items: PropTypes.array
};

export default InstaFeed;
