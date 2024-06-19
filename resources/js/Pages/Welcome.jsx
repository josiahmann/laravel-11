import { Link, Head } from "@inertiajs/react";

export default function Welcome({}) {
    const handleImageUpload = async (e) => {
        e.preventDefault();
        const file = e.target.image.files[0];
        console.log(file);
        const response = await Vapor.store(file, {
            progress: (progress) => {
                console.log(progress);
            },
        });

        console.log("response", response);
    };
    return (
        <>
            <Head title="Welcome" />
            {/* image upload */}
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-4">Upload Image</h1>
                    <form onSubmit={handleImageUpload}>
                        <input type="file" name="image" accept="image/*" />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                        >
                            Upload
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
