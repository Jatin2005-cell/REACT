import { useParams } from "react-router-dom";

function User() {

    const { id } = useParams();

    return (
        <div className="max-w-5xl mx-auto py-20">

            <h1 className="text-5xl font-bold">

                User ID : {id}

            </h1>

        </div>
    );

}

export default User;