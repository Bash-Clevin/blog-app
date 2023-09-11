import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

const Article = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 uses of AI in Day to Day Life
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@clevin-bash</p>
          <div className="flex space-x-2">
            <p>10/09/2023</p>
            <p>12:31</p>
          </div>
        </div>
        <img
          className=""
          src="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <p className="mx-auto mt-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde autem
          nulla harum aspernatur minus inventore blanditiis magni, facere natus,
          alias repellendus, id doloremque ullam nesciunt laborum tempora error
          cumque non!
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments</h3>
          {/**comment */}
          <Comment />
        </div>
        {/** write a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input
            className="outline-none px-4 py-2 mt-4 md:w-[80%] md:mt-0"
            placeholder="Write a comment"
            type="text"
          />
          <button className="bg-black text-sm text-white px-2 py-2 mt-4 md:w-[20%] md:mt-0">
            Comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
