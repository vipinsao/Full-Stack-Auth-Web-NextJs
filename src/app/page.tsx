import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen ">
      <h1 className="text-2xl text-gray-500">Welcome To My Auth_App</h1>
      <hr />
      <div className="border border-e-red-100 rounded-md py-1 px-3 mb-2 mt-2 hover:bg-blue-500 cursor-pointer">
        <Link href="/signup">SignUp</Link>
      </div>
      <div className="border border-e-red-100 rounded-md py-1 px-4 hover:bg-green-500 cursor-pointer">
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
