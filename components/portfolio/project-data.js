const projectData = [
  {
    title: "Playlist Manager for Spotify",
    desc: `
    This app uses the spotify api to allow users to create and edit their playlist in a clean and user friendly design. Users are able to add, organize, and delete tracks from their playlists while at the same time searching both spotify and their own playlists for tracks to add. Users can seach by track, artist or album to find the exact track they are looking for. User are also free to delete and create new playlists from within the app. All changes in the app will effect the users spotify playlists.
    
    Users are also able to add and manage a variety of tags on each tag. Users can select the color the the tag and the tag text and then reuse that tag throughout the playlist.

    If the user has Spotify Premium they are also able to play any song, from their playlist or while searching, directly from the app. They can then manage the state of play at the bottom of the app.

    A page with more details on how I built the app and its full features can be found here: PAGE LINK
    `,
    techStack: [
      "TypeScript",
      "React",
      "NextJs",
      "Styled Components",
      "MongoDB",
      "Spotify API",
    ],
    featured: true,
    imgSrc: "/img/spotify-preview.png",
    imgDes: "/img/spotify-preview.png",
    link: "https://playlist-builder-for-spotify.vercel.app",
    gitLink: "https://github.com/Kyle-Kroger/spotify-playlist-builder",
  },
  {
    title: "Hue to Hex",
    desc: "'Hue to Hex' provides an educational and enjoyable way for users to explore color representations in the digital world while enhancing their knowledge of hex color codes.",
    techStack: ["HTML", "CSS", "TypeScript", "React"],
    imgSrc: "/img/hue-to-hex.png",
    imgDes: "Picture of website",
    link: "https://hue-to-hex.vercel.app/",
    gitLink: "https://github.com/Kyle-Kroger/Hue-to-Hex",
  },
  {
    title: "The Black Lantern",
    desc: "Website for the Black Lantern restaurant built using React components and CSS for the styling.",
    techStack: ["JavaScript", "NextJs", "CSS", "SQL"],
    imgSrc: "/img/black-lantern-preview.png",
    imgDes: "Picture of website",
    link: "https://black-lantern-pizza.vercel.app/",
    gitLink: "https://github.com/Kyle-Kroger/black-lantern-pizza",
  },
];

export default projectData;
