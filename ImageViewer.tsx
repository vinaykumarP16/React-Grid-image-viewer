import React = require('react');
import axios from 'axios';
import './style.css';

const baseURL = `https://api.unsplash.com/photos/random/?client_id=3-TA7-FDJyfS_J06ZmQ7MjabDWLpdQEBhi3hwfR03yM&count=12`;
// const baseURL = 'http://placekitten.com/g/200/300';

const ImageViewer = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.map((item: { urls: string }) => item.urls.small));
    });
  }, []);

  return (
    <div className="container">
      {post?.map((item: string) => (
        <div>
          <img src={item} alt="vinay" />
        </div>
      ))}
    </div>
  );
};

export default ImageViewer;
