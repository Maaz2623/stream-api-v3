import mongoose from "mongoose";

const newMovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number || null,
        required: true
    },
    slug: String,
    poster: String,
    quality: String,
    releaseDate: String,
    uploadedOn: {
        type: Date,
        default: Date.now()
    },
    embedUrl: String,
    likes: {
        type: Number,
        default: 0
    },
    cast: String,
    genre: String,
    director: String,
    plot: String,
}, {timestamps: true})

const Movie = mongoose.models.Movie || mongoose.model('Movie', newMovieSchema)

export default Movie