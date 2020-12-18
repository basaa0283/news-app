import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, SafeAreaView, Alert } from "react-native";
import ListItem from "./components/ListItem";
import dummyArticles from "./dummies/article";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});

export default function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setArticles(dummyArticles);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
