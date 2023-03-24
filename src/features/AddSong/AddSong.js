import React, { useState } from "react";
import { postJsonData } from "../../shared/utils/ApiUtilities.js";
import Header from "../../shared/components/Header/Header.js";
import { useLoader } from "../../shared/hooks/useLoader.js";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";

export default function AddSong() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { setLoaderSpinning } = useLoader();

  function save(obj) {
    //post a document

    setLoaderSpinning(true);
    postJsonData("/songs", obj).then((response) => {
      setLoaderSpinning(false);

      alert("Song Added");
    });
  }

  return (
    <div>
      <Header />
      <h3>Add Song Form</h3>
      <form className="add-song-form" onSubmit={handleSubmit(save)}>
        <div>
          <TextField
            error={errors?.songName}
            helperText={errors?.songName?.message}
            label="Song Name"
            {...register("songName", { required: "Song is required" })}
            placeholder="Song Name"
          ></TextField>
        </div>
        <div>
          <TextField
            error={errors?.rating}
            helperText={errors?.rating?.message}
            label="Rating"
            type={"number"}
            {...register("rating", {
              required: "Rating is required",
              min: { value: 0, message: "Minimum value is 0" },
              max: { value: 5, message: "Maximum value is 5" },
            })}
            placeholder="rating"
          ></TextField>
        </div>
        <div>
          <Button variant="contained" type="submit">
            Save Song
          </Button>
        </div>
      </form>

      {/* html syntax */}
      {/* <form onSubmit={handleSubmit(save)}>
        <div>
          <input
            {...register("songName", { required: "Song is required" })}
            placeholder="Song Name"
          ></input>

          <span>{errors?.songName?.message}</span>
        </div>
        <div>
          <input
            type={"number"}
            {...register("rating", {
              required: "Rating is required",
              min: { value: 0, message: "Minimum value is 0" },
              max: { value: 5, message: "Maximum value is 5" },
            })}
            placeholder="rating"
          ></input>
          <span>{errors?.rating?.message}</span>
        </div>
        <div>
          <button type="submit">Save Song</button>
        </div>
      </form> */}
    </div>
  );
}
