import React, { useState } from "react";
import NavBar from "./Components/NavBar.jsx";
import PostMapper from "./Components/PostMapper";
import CreatePost from "./Components/CreatePost.jsx";
import Post from "./Components/Post.jsx";


function App() {
  const [entries, setEntries] = useState([
    { name: "Tosin", text: "Hello Mr Money" },
    { name: 'Jason', text: "Hello Jason" },
    { name: "Kev", text: "Hello Kev" },
  ]);

  useEffect(() => {
    console.log('use effect');
    if (storage) {
      setPayload(storage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('payload', JSON.stringify(payload));
  }, [payload]);

  const handleNewComment = (name, comment) => {
    if (name.length === 0 || comment.length === 0) {
      return toast.error('Please fill out both fields!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    let newComment = {
      name: name,
      comment: comment,
      like: false,
      disLike: false,
      date: new Date(),
    };

    setPayload([newComment, ...payload]);
  };

  const handleUpdateLikeAndDislike = (post, index) => {
    payload[index] = post;
    console.log(payload);
    localStorage.setItem('payload', JSON.stringify(payload));
  };

  return (
    <div className='App'>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NavBar />
      <CreatePost handleNewComment={handleNewComment} />
      <DisplayPosts
        payload={payload}
        handleUpdateLikeAndDislike={handleUpdateLikeAndDislike}
      />
    </div>
  );
}

export default App;