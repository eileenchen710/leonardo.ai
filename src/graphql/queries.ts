import { gql } from '@apollo/client';

// AniList Anime Queries
export const GET_ANIME = gql`
  query GetAnime($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
      description(asHtml: false)
      episodes
      status
      season
      seasonYear
      coverImage {
        large
        medium
      }
      genres
      averageScore
      popularity
      startDate { year month day }
      endDate { year month day }
      studios { nodes { id name } }
      characters (perPage: 10) {
        edges {
          role
          node {
            id
            name { full native }
            image { large medium }
          }
        }
      }
      staff (perPage: 10) {
        edges {
          role
          node {
            id
            name { full native }
            image { large medium }
          }
        }
      }
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
    }
  }
`;

export const GET_MANGA = gql`
  query GetManga($id: Int) {
    Media(id: $id, type: MANGA) {
      id
      title {
        romaji
        english
        native
      }
      description(asHtml: false)
      chapters
      volumes
      status
      coverImage {
        large
        medium
      }
      genres
      averageScore
      popularity
      startDate { year month day }
      endDate { year month day }
      characters (perPage: 10) {
        edges {
          role
          node {
            id
            name { full native }
            image { large medium }
          }
        }
      }
      staff (perPage: 10) {
        edges {
          role
          node {
            id
            name { full native }
            image { large medium }
          }
        }
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetCharacter($id: Int) {
    Character(id: $id) {
      id
      name {
        full
        native
        alternative
      }
      image {
        large
        medium
      }
      description
      gender
      dateOfBirth { year month day }
      age
      siteUrl
      media (perPage: 10) {
        edges {
          node {
            id
            title { romaji english native }
            type
          }
          characterRole
        }
      }
    }
  }
`;

export const GET_STAFF = gql`
  query GetStaff($id: Int) {
    Staff(id: $id) {
      id
      name {
        full
        native
        alternative
      }
      image {
        large
        medium
      }
      description
      gender
      dateOfBirth { year month day }
      age
      siteUrl
      staffMedia (perPage: 10) {
        edges {
          node {
            id
            title { romaji english native }
            type
          }
          staffRole
        }
      }
    }
  }
`;

export const GET_AIRING_SCHEDULE = gql`
  query GetAiringSchedule($mediaId: Int, $notYetAired: Boolean, $perPage: Int) {
    AiringSchedule(mediaId: $mediaId, notYetAired: $notYetAired, perPage: $perPage) {
      nodes {
        id
        airingAt
        timeUntilAiring
        episode
        mediaId
      }
    }
  }
`;

export const GET_ANIME_LIST = gql`
  query GetAnimeList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        description
        coverImage {
          large
        }
      }
    }
  }
`;

// TypeScript types for AniList queries
export interface AnimeTitle {
  romaji: string;
  english?: string;
  native?: string;
}

export interface AnimeCoverImage {
  large: string;
  medium: string;
}

export interface AnimeStudio {
  id: number;
  name: string;
}

export interface AnimeCharacter {
  id: number;
  name: { full: string; native?: string };
  image: { large: string; medium: string };
}

export interface AnimeStaff {
  id: number;
  name: { full: string; native?: string };
  image: { large: string; medium: string };
}

export interface Anime {
  id: number;
  title: AnimeTitle;
  description?: string;
  episodes?: number;
  status?: string;
  season?: string;
  seasonYear?: number;
  coverImage: AnimeCoverImage;
  genres?: string[];
  averageScore?: number;
  popularity?: number;
  startDate?: { year: number; month: number; day: number };
  endDate?: { year: number; month: number; day: number };
  studios?: { nodes: AnimeStudio[] };
  characters?: { edges: { role: string; node: AnimeCharacter }[] };
  staff?: { edges: { role: string; node: AnimeStaff }[] };
  nextAiringEpisode?: {
    airingAt: number;
    timeUntilAiring: number;
    episode: number;
  };
}

export interface Manga extends Omit<Anime, 'episodes' | 'season' | 'seasonYear' | 'nextAiringEpisode'> {
  chapters?: number;
  volumes?: number;
}

export interface Character {
  id: number;
  name: { full: string; native?: string; alternative?: string[] };
  image: { large: string; medium: string };
  description?: string;
  gender?: string;
  dateOfBirth?: { year: number; month: number; day: number };
  age?: string;
  siteUrl?: string;
  media?: {
    edges: {
      node: { id: number; title: AnimeTitle; type: string };
      characterRole: string;
    }[];
  };
}

export interface Staff {
  id: number;
  name: { full: string; native?: string; alternative?: string[] };
  image: { large: string; medium: string };
  description?: string;
  gender?: string;
  dateOfBirth?: { year: number; month: number; day: number };
  age?: string;
  siteUrl?: string;
  staffMedia?: {
    edges: {
      node: { id: number; title: AnimeTitle; type: string };
      staffRole: string;
    }[];
  };
}

export interface AiringSchedule {
  id: number;
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
  mediaId: number;
}

