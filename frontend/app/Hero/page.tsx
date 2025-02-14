"use client"; // Required for using useEffect in Next.js App Router

import { useEffect, useState } from "react";

const Hero = () => {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        fetch("http://localhost:5000/api") // Call your backend API
            .then((res) => res.json())
            .then((data) => setData(data.message))
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    return (
        <div className="p-4 text-center">
            <h1 className="text-2xl font-bold">Welcome to the Hero Section</h1>
            <p className="mt-2 text-lg">
                {data ? data : "Loading..."} {/* Show API data */}
            </p>
        </div>
    );
};

export default Hero;
