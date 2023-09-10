const Posts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/** article image**/}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </div>

      {/** article content**/}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold mb-1 md:mb-2 md:text-2xl">
          10 uses of AI in Day to Day Life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@clevin-bash</p>
          <div className="flex space-x-2">
            <p>10/09/2023</p>
            <p>12:31</p>
          </div>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          autem. Facilis ab fugit sed quasi, officia temporibus modi accusantium
          nostrum sint nisi impedit provident quisquam, repellat laborum esse.
          Eius, vitae?
        </p>
      </div>
    </div>
  );
};

export default Posts;
