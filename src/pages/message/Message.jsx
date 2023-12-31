import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Message.scss";

const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link>  John Doe 
        </span>
        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <div className="messages">
            {data.map((m) => (
              <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea type="text" placeholder="write a message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Message.scss";

// const Message = () => {
//   return (
//     <div className="message">
//       <div className="container">
//         <span className="breadcrumbs">
//           <Link to="/messages">Messages</Link> > John Doe >
//         </span>
//         <div className="messages">
//           <div className="item">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item owner">
//             <img
//               src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item owner">
//             <img
//               src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item owner">
//             <img
//               src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item owner">
//             <img
//               src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item owner">
//             <img
//               src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item owner">
//             <img
//               src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item owner">
//             <img
//               src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//         </div>
//         <hr />
//         <div className="write">
//           <textarea type="text" placeholder="write a message" />
//           <button>Send</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Message;
