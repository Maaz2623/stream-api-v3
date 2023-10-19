import mongoose from "mongoose";
import Movie from "@/models/movie";
import { connectToDB } from "@/mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    title,
    rating,
    slug,
    poster,
    quality,
    releaseDate,
    embedUrl,
    cast,
    genre,
    director,
    plot
  } = await request.json();
  await connectToDB();
  const newMovie = await Movie.create({
    title,
    rating,
    slug,
    poster,
    quality,
    releaseDate,
    embedUrl,
    cast,
    genre,
    director,
    plot
  });
  return NextResponse.json(newMovie, {status: 201})
}
