import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
  setCurrentSong,
  audioRef,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
