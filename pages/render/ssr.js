
export default function SSR({ data }) {
    
    return (
        <>
        <h1>This SSR request!</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>
             <p>Name: {item.name}</p> 
           <p>email: {item.email}</p>   
              </li>
          ))}
        </ul>
      </>
    );
    }
    
   export async function getServerSideProps() {
   
        const response = await fetch('https://nestjsproject-production-364f.up.railway.app/admin/index');
        const data = await response.json();
      
    return { props: { data } }
    }