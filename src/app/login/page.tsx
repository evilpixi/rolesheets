import Image from "next/image";

export default function Login()
{
  return (
    <div className="flex flex-row">
      <div className="h-dvh">
        <Image src="/images/splashart.png" alt="Description of image" layout="fill" objectFit="contain" />
      </div>
      <form action="/" className="flex flex-col w-1/2">
        <label>
          <span>Username</span>
          <input type="text" name="username" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
