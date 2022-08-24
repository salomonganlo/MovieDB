import React, { useCallback } from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { getMovieUrl } from "../api/api"
import { MovieInterface } from "../screens/Search"

export default function MovieCard(props: {
  movie: MovieInterface
}) {
  const { movie } = props
  return (
    <View style={styles.main}>
      <View
        style={{
          flex: 1
        }}>
        <Image
          source={{
            uri: getMovieUrl(movie.poster_path) as any
          }}
          style={styles.image}
        />
      </View>
      <View
        style={{
          flex: 2
        }}>
        <View style={styles.header}>
          <Text style={styles.header_title}>
            {movie.title}
          </Text>
          <Text style={styles.vote_average}>
            {movie.vote_average}
          </Text>
        </View>
        <Text style={styles.overview} numberOfLines={7}>
          {movie.overview}
        </Text>
        <Text style={styles.release}>
          {movie.release_date}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    padding: 5
  },
  image: {
    backgroundColor: "tomato",
    width: 120,
    height: 180
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  header_title: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 10
  },
  vote_average: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666"
  },
  overview: {
    color: "#666",
    fontSize: 13
  },
  release: {
    textAlign: "right",
    marginTop: 10,
    color: "#666"
  }
})
