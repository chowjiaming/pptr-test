import React, {useState, useEffect} from 'react';

type resultProps = {
  email: string;
  gender: string;
};

export function Test(): JSX.Element {
  const [result, setResult] = useState<resultProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const api = async () => {
      try {
        const data = await fetch('https://randomuser.me/api', {
          method: 'GET',
        });
        if (!data.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${data.status}`
          );
        }
        const jsonData = await data.json();
        setResult(jsonData.results);
      } catch (error) {
        console.log(error);
        setResult([]);
      } finally {
        setLoading(false);
      }
    };

    api();
  }, []);

  return (
    <>
      <h1>PPTR TEST</h1>
      <h2>
        {loading && <div>A moment please...</div>}
        {result &&
          result.map((value, i) => {
            return (
              <div key={i}>
                <div>{value.email}</div>
                <div>{value.gender}</div>
              </div>
            );
          })}
      </h2>
    </>
  );
}
