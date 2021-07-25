import React from "react";
import Message from "./Message";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;
  return (
    <>
      <h2>Search details </h2>
      {lyric.error || lyric.err || lyric.name === "AbortError" || lyric ==="TypeError: Failed to fetch" ? (
        <Message
          msg={`Can't find the song "<em>${search.song}</em>"`}
          bgColor="#dc3545"
        />
      ) : (
        <div>
          <h3>{search.song}</h3>
          <blockquote style={{ whiteSpace: "pre-wrap" }}>
            {lyric.lyrics}
          </blockquote>
        </div>
      )}
      {bio.artists ? (
        <section>
          <h3>{bio.artists[0].strArtist}</h3>
          <img
            src={bio.artists[0].strArtistThumb}
            alt={bio.artists[0].strArtist}
          />
          <p>
            {bio.artists[0].intBurnYear} -{" "}
            {bio.artists[0].intDiedYear || "Present"}{" "}
          </p>
          <p>{bio.artists[0].strCountry}</p>
          <p>
            {bio.artists[0].strGenre} - {bio.artists[0].strStyle}
          </p>
          <a
            href={`http://${bio.artists[0].strWebsite}`}
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
          <p>{bio.artists[0].strBiographyEN}</p>
        </section>
      ) : (
        <Message
          msg={`Can't find the artist "${search.artist}"`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};
export default SongDetails;
