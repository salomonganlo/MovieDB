import React from "react"
import { SafeAreaView, Text, View } from "react-native"
import Search from "./src/screens/Search"

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Search />
    </SafeAreaView>
  )
}
