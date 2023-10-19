import mongoose from "mongoose";
import { connectToDB } from "@/mongoose";
import Movie from "@/models/movie";
import { NextResponse } from "next/server";

export async function GET(){
    await connectToDB()
    const movies = (await Movie.find()).reverse()
    return NextResponse.json(movies, {status: 200})
}

export const revalidate = 0

