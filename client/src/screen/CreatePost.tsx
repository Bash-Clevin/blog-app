import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ImCross } from 'react-icons/im';

const CreatePost = () => {
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold text-xl md:text-2xl">Create a post</h1>
        <form
          className="w-full flex flex-col space-y-4 mt-4 md:space-y-8"
          action=""
        >
          <input
            className="px-4 py-2 outline-none"
            type="text"
            placeholder="Enter post title"
          />
          <input className="px-4" type="file" />
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                className="px-4 py-2 outline-none"
                type="text"
                placeholder="Enter post category"
              />
              <div className="bg-black text-white px-4 py-2 font-semibold cursor-pointer">
                Add
              </div>
            </div>
            {/** categories */}
            <div className="flex px-4 mt-3">
              <div className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md">
                <p>Tech</p>
                <p className="text-white bg-black rounded-full cursor-pointer p-1 text-sm">
                  <ImCross />
                </p>
              </div>
              <div className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md">
                <p>Tech</p>
                <p className="text-white bg-black rounded-full cursor-pointer p-1 text-sm">
                  <ImCross />
                </p>
              </div>
            </div>
          </div>
          <textarea
            cols={30}
            rows={15}
            className="px-4 py-2 outline-none"
            placeholder="Enter you post"
          ></textarea>
          <button
            className="bg-black w-full mx-auto text-white font-semibold px-4 py-2 
           text-lg md:text-xl md:w-[20%]"
          >
            Create
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
