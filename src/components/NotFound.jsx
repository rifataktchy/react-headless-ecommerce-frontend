
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-container text-center p-8">
            <h1 className="text-4xl font-bold text-gray-700">404 - Page Not Found</h1>
            <p className="text-lg text-gray-500 mt-4">Sorry, the page you're looking for does not exist.</p>
            <Link to="/" className="mt-6 text-blue-500 underline">
                Go back to the homepage
            </Link>
        </div>
    );
};

export default NotFound;
