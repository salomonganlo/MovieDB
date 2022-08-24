import React from "react"
import { View, Text } from "react-native"
import { MovieInterface } from "../screens/Search"

function MovieCard(props: {
  movie: MovieInterface
  deleteMovie: (id: number) => void
}) {
  const { movie, deleteMovie } = props
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
          margin: 10,
          borderWidth: 1,
          borderRadius: 50,
          padding: 20
        }}>
        <Text style={{ color: "tomato" }}>
          {movie.original_title}
        </Text>
        <Text
          style={{ color: "red" }}
          onPress={() => deleteMovie(movie.id)}>
          X
        </Text>
      </View>
    </>
  )
}

export default MovieCard
