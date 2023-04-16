import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import MyLayout from '@/pages/component/layout';
import UserLayout from '@/pages/component/userdata';
import SessionCheck from '../../component/sessioncheck'

export default function MyPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // redirect to the same page with query params containing the input value
    router.push({
      pathname: 'findusers',
      query: { inputValue: inputValue }
    });
  }

  return (
    <>
      <SessionCheck />
     <MyLayout />
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Fetch Data</button>
      </form>
      {data.status == null? 
   <UserLayout data={data}/>
        : data.status}
      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
  const response = await axios.get('http://localhost:3000/admin/findadmin/'+inputValue);
  const data = await response.data;

  return {
    props: {
      data
    }
  };
  
  } catch (error) {

  return {
    props: {
      data: {status:"enter valid user id"}
    }
  };
}
}
