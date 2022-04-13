import React from "react";
import Post from "./Post";

const PostMapper = ({ entries }) => {
  return (
    <ul>
      {entries.map((entry, index) => (
        <li key={index}>
          <Post entry={entry} />
        </li>
      ))}
    </ul>
  );
};

export default PostMapper;
