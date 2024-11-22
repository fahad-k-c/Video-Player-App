import { StyleSheet, Text, View, Button } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import React, { useState, useCallback } from "react";

const YTPLayer = () => {
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      //  Alert.alert("video has finished playing!");
    }
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"iee2TATGMyI"}
        onChangeState={onStateChange}
      />
    </View>
  );
};

export default YTPLayer;

const styles = StyleSheet.create({});
