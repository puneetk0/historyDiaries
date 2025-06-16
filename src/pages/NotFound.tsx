
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 px-4 flex flex-col items-center justify-center">
      <div className="text-center max-w-xl">
        <div className="mb-8 neo-brutalism-orange p-8 -rotate-2">
          <h1 className="text-5xl md:text-7xl font-trajan text-white">404</h1>
        </div>
        <h2 className="text-2xl md:text-3xl font-garamond mb-6">Oops! Page not found</h2>
        <p className="text-lg mb-8">
          It seems like this page has been lost in the annals of history. Let's get you back to the present.
        </p>
        <Link to="/" className="neo-brutalism inline-flex items-center gap-2 px-8 py-4 font-bold">
          <ArrowLeft size={18} /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
