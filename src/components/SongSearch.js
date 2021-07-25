import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp"
import Loader from "./Loader";
import SongForm from "./SongForm";
import SongDetails from "./SongDetails";

const SongSearch = () => {
  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoading(true);
      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);
      console.log(songRes.statusText)
      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data)
  }

  return (
    <div>
      <h2>SONG SEARCH APP</h2>
      <article className="grid-1-3">
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      {search && !loading && (
      <SongDetails search={search} lyric={lyric} bio={bio} />
      )}
      </article>
    </div>
  );
};

export default SongSearch;
