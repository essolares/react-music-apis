import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  //HANDLE CHAGNES ON FIELDS WITH E
  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) =>{
      e.preventDefault();
      if (!form.artist || !form.song){
          alert("Incomplete data");
          return;
      }
      handleSearch(form);
      setForm(initialForm);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Artist name"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Song naem"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Search"/>
      </form>
    </div>
  );
};

export default SongForm;
