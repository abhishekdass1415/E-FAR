import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-600 hover:text-blue-700 font-semibold">Go back home</Link>
    </div>
  );
}


