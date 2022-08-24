import React, { useCallback, useState } from "react"
import { getMovieFromApi } from "../api/api"
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  FlatList
} from "react-native"
import MovieCard from "../components/MovieCard"

export default function Search() {
  const [searchText, setSearchText] = useState<string>("")
  const [movies, setMovies] = useState<MovieInterface[]>([])

  /**
   * Call when text change
   * @param {string} text
   * @returns
   */
  const handleTextChange = useCallback(
    (text: string) => setSearchText(text),
    []
  )

  const searchMovie = useCallback(async () => {
    const results = await getMovieFromApi(searchText)
    setMovies(results)
  }, [searchText])

  return (
    <View>
      <View>
        <TextInput
          placeholder="Enter movie name"
          style={styles.input}
          value={searchText}
          onSubmitEditing={searchMovie}
          onChangeText={handleTextChange}
        />
        <Button
          title="Search"
          onPress={searchMovie}
          color="tomato"
        />
      </View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={movies}
        renderItem={({ item }) => (
          <MovieCard movie={item} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 50,
    padding: 15,
    borderColor: "tomato",
    margin: 10
  }
})

export interface MovieInterface {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
