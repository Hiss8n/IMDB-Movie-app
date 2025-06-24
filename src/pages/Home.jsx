/* const API_KEY=process.env.TMDB_API_KEY; */
import React, { useEffect, useState } from "react";
import { SearchBox } from "../components/SearchBox";
import { Card } from "../components/Card";

export const Home = () => {
  /*   const genre=searchParams.genre || 'FetchTrending' */
  const [results, setResults] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  /* ${genre==='fetchTopRated' ? '/movie/top_rated':'/trending/all/week'} */

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=90070f247ab06aa7227129104522f6f4&language=en-US&sort_by=popularity.desc&page=1`,
        {next:{revalidate:100000}}
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error("Can not fetch movies");
      }

      const result = data.results;
      setResults(result)
      
      

    } catch (error) {
      setIsLoading(false);
      console.error("Error", error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  /*  if(setIsLoading) return <h3>Loading data...</h3> */
  return (
    <>
      <SearchBox />
    <div className='sm:grid sm:grid-cols lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-3 dark:bg-gray-600 w-full'>

        {results.map((result)=><Card key={result.id} result={result}/>)}
    </div>
    </>
  );
};
