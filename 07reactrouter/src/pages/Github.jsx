import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();

    return (

        <div className="bg-gray-700 text-white text-center py-16">

            <img
                src={data.avatar_url}
                alt="Github"
                className="w-40 rounded-full mx-auto"
            />

            <h1 className="text-4xl mt-6 font-bold">
                {data.name}
            </h1>

            <p className="mt-3">

                Followers :
                {data.followers}

            </p>

            <p>

                Following :
                {data.following}

            </p>

            <p>

                Public Repositories :
                {data.public_repos}

            </p>

        </div>

    );

}

export default Github;