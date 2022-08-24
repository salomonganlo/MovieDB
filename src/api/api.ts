import { API_KEY } from "./utils"

export async function getMovieFromApi(text: string) {
  return await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr&query=${text}`
  ).then(async (response) => {
    if (response.ok) {
      const responseData = await response.json()
      return responseData.results
    }
  })
}

export function getMovieUrl(posterPath: string) {
  return `https://image.tmdb.org/t/p/w300/${posterPath}`
}
