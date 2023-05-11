import { useRouteError, useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const { status, statusText, data } = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 h-screen flex justify-center items-center">
      <div className="text-white flex flex-col text-center">
        <h1 className="text-3xl text-red-600 font-bold">{status}</h1>
        <h2>{statusText}</h2>
        <p>{data}</p>
        <button
          onClick={() => navigate("/")}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Go back to Home
        </button>
      </div>
    </div>
  );
};
