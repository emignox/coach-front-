import P from "../blocs/paragraph";
function Article() {
  return (
    <div className="flex items-center justify-center w-3/4 mx-auto my-10 ">
      <div className="flex flex-col items-start justify-center w-full mx-5 text-gray-100 md:mx-10 ">
        <h1 className="mb-5 text-3xl font-black">My message to you: </h1>
        <P
          className=""
          text="I won't delve too deeply into my experiences, but I want to emphasize
          how sports have changed me. Life is about willpower, organization,
          precision, and discipline. Without these, achieving your goals can be
          quite challenging, not just in sports but in life as well. Hard work
          and sweat are often what lead to significant results, but having
          guidance and support can make all the difference. That's why I'm
          here—to offer you support along your journey."
        />
      </div>
    </div>
  );
}
export default Article;
