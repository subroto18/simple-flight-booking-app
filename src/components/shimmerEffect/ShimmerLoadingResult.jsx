export const ShimmerLoadingResult = () => {
  return (
    <div className="p-5">
      <div className="w-9/12 m-auto">
        <h2 className="text-black text-3xl my-3 font-bold">
          Flights from New Delhi to Bengaluru
        </h2>
      </div>
      {Array.apply(null, Array(4)).map((effect, index) => {
        return (
          <div
            key={index}
            className="bg-slate-500 p-5  flex w-9/12 m-auto rounded justify-center mb-5 h-24"
          ></div>
        );
      })}
    </div>
  );
};
