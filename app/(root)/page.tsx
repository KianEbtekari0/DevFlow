import { auth } from "@/auth"

const home = async () => {
  const session = await auth()
  console.log(session);
  
  return (
    <>
      <h1>home</h1>
    </>
  )
}

export default home
