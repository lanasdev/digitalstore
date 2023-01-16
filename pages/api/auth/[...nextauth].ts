import NextAuth from "next-auth";
import prisma from "lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import SpotifyProvider from "next-auth/providers/spotify";

if (!process.env.TWITTER_CLIENT_ID) {
  throw new Error("The TWITTER_CLIENT_ID environment variable is missing.");
}

if (!process.env.TWITTER_CLIENT_SECRET) {
  throw new Error("The TWITTER_CLIENT_SECRET environment variable is missing.");
}

// if (!process.env.SPOTIFY_CLIENT_ID) {
//   throw new Error("The SPOTIFY_CLIENT_ID environment variable is missing.");
// }

// if (!process.env.SPOTIFY_CLIENT_SECRET) {
//   throw new Error("The SPOTIFY_CLIENT_SECRET environment variable is missing.");
// }
if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET) {
  throw new Error(
    "The SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET environment variables are missing."
  );
}

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),

  providers: [
    // Twitter does not work
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0", // opt-in to Twitter OAuth 2.0
    }),

    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
