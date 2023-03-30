import React from "react"
import { useEffect } from "react"

export default function CSRPage() {
  const [data, setData] = React.useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3000/admin/index');
      const data = await response.json();
      setData(data);
    }
    getData();
  })
  return (
    <>
      <h1>This CSR request!</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>
    </>
  )
}