import { Text, View } from "react-native";
import React, { Component } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import PlayList from "../components/Playlist";
import VideoGrid from "../components/VideoGrid";

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Header />
        <Slider />
        <PlayList />
        <VideoGrid />
      </View>
    );
  }
}
