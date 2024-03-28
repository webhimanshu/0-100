import { getServerSession } from "next-auth";

const getUser = async ()=> {
  const session = await getServerSession();
  return session;
}
// created SSR
export default async function Page(){
    const data = await getUser();
    
    return<>
    {JSON.stringify(data)}
    </>
}