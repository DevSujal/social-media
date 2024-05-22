import React from "react";
import { Button } from "@mui/material";
import Form from "../components/Form";
const CreatePost = () => {
  const arr = ["title", "body", "date", "tags", "imgTitle"];
  return (
    <form className="form">
      <span>Registration Form</span>
      {arr.map((value) => {
        if (value == "date") {
          return <Form key = {value} type={value} label={value}></Form>;
        }
        return <Form key={value} label={value} type="text" />;
      })}

      <Button
        sx={{
          background: "blue",
          color: "white",
          "&:hover": { background: "darkblue" },
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default CreatePost;
