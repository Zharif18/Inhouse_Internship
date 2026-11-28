import React, { useEffect, useState } from 'react'

function User() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(response => response.json())
      .then(result => setData(result.recipes));
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 p-6 text-left">
      <h1 className="!mb-6 !mt-0 !text-3xl !font-bold !tracking-normal !text-slate-800">
        List of Recipes
      </h1>
      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="w-full min-w-[640px] text-left text-sm text-slate-700">
          <thead className="bg-slate-800 text-white">
            <tr >
              <th scope="col" className="p-3">Id</th>
              <th scope="col" className="p-3">Name</th>
              <th scope="col" className="p-3">Prep Time</th>
              <th scope="col" className="p-3">Cook Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr
                key={item.id}
                className="border-b border-slate-200 odd:bg-white even:bg-slate-50 hover:bg-blue-50"
              >
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.prepTimeMinutes}</td>
                <td className="p-3">{item.cookTimeMinutes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default User