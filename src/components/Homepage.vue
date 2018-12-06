<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Genres</th>
                    <th>Rating</th>
                    <th>Director</th>
                    <th>Actors</th>
                    <th>Score</th>
                </tr>
            </thead>
        <tbody>
            <template v-for="movie in movies">
                <tr v-bind:key="movie.id">
                    <td>{{ movie.id }}</td>
                    <td><a v-bind:href="movie.imdb_link" target="_blank">{{ movie.movie_title }}</a></td>
                    <td>{{ movie.title_year }}</td>
                    <td>{{ movie.genres }}</td>
                    <td>{{ movie.content_rating }}</td>
                    <td>{{ movie.director }}</td>
                    <td>{{ movie.actor_1 }}</td>
                    <td>{{ movie.imdb_score }}</td>
                </tr>
            </template>
        </tbody>
    </table>
    <a class="button is-info">Add Movie</a>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            movies: {}
        }
    },
    async created () {
        const response = await axios.get('http://localhost:8000/movies')
        this.movies = response.data
    }
}
</script>