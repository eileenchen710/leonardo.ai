# Next.js AniList Demo

This project is a Next.js app that fetches and displays anime data from the AniList GraphQL API.

## API Used

All anime data comes from the official AniList GraphQL API:

https://graphql.anilist.co

## How to Run

Clone this repo, then install dependencies and start the dev server:

```bash
npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features & Implementation

- **AniList Data Integration**: Uses Apollo Client to fetch anime data from AniList. The GraphQL queries are in `src/graphql/queries.ts`.
- **Responsive Layout**: The homepage shows anime cards in a responsive grid. It adapts to your screen size, so you get more columns on desktop and fewer on mobile.
- **User Gate**: When you first visit, a modal pops up and asks for your username and position. This info is saved in localStorage, so you don't have to enter it every time. You can also edit your info later from the top right corner.
- **Pagination**: You can flip through pages of anime using the pagination controls at the bottom.
- **Accessibility**: All form fields and buttons have `aria-label` for better accessibility.
- **Loading & Error States**: The UI shows a loading spinner while fetching data, and displays error messages if something goes wrong.
- **Form Validation**: The user info modal checks that both username and position are filled in before you can submit.
- **Footer**: There's a simple footer at the bottom of every page showing the challenge version (v3.5).

## Notes

- All anime info is live from AniList, so you always see up-to-date data.
- The project uses Chakra UI for styling and layout.
- You can find the main logic in `src/app/page.tsx`, `src/app/UserGate.tsx`, and `src/graphql/queries.ts`.

---
