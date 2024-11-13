## Lyrics: "A soundscape vast, where music lasts"

This is a music streaming application built using React, Context API, Tailwind CSS, and the Spotify Web API.

### Features:

* Stream music from Spotify library
* Manage playlists
* Search for songs and artists [in Process]
* User authentication (using Spotify login)

### Technologies:

* Frontend: React, Context API, Tailwind CSS
* API: Spotify Web API

### Prerequisites:

* Node.js and npm installed
* A Spotify Developer Account ([https://developer.spotify.com/](https://developer.spotify.com/))

### Installation

1. Clone this repository:

```bash
git clone https://github.com/itsarman001/Lyrics
```

2. Navigate to the project directory:

```bash
cd lyrics
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the project root directory. This file will store your Spotify API credentials. You can find your credentials in your Spotify Developer Dashboard. Here's an example of the `.env` file:

```
REACT_APP_SPOTIFY_WEBAPI_CLIENT_ID = "YOUR_CLIENT_ID";
```

**Note:** Replace `YOUR_CLIENT_ID` with your actual values.

### Development

1. Start the development server:

```bash
npm run dev
```

This will start the application at http://localhost:5173 by default.

### Usage

1. Open the application in your browser.
2. You may be prompted to login to Spotify to authorize access to your library.
3. Once logged in, you should be able to browse your music, create playlists, and play songs.

### License

This project is licensed under the MIT License. See the `LICENSE` file for details.