import { Link, useRouteError } from "react-router-dom";

function Error() {

    const error = useRouteError();

    return (

        <div className="min-h-screen flex flex-col justify-center items-center">

            <h1 className="text-6xl font-bold text-red-500">

                Oops!

            </h1>

            <p className="mt-5 text-2xl">

                {error.status} | {error.statusText}

            </p>

            <Link
                to="/"
                className="mt-8 bg-orange-600 text-white px-6 py-3 rounded-lg"
            >
                Go Back Home
            </Link>

        </div>

    );

}

export default Error;