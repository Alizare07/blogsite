import Link from "next/link"

const NotFound = () => {
  return (
    <>
      <h1>Not Found Page</h1>
      <p>sorry, this page that you are looking for does not exist</p>
      <Link href={"/"}>return home page</Link>
    </>

      )
    }

export default NotFound