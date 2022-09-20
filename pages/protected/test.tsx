import type { NextPage } from "next";
import { signOut } from "next-auth/react";
import { useCallback } from "react";

const SignOut: NextPage = () => {
  const handleSignOut = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      signOut();
    },
    []
  );
  return (
    <div className="w-screen h-screen bg-accent-gradient-primary">
      <main className="relative flex-1">
        <div className="flex flex-col space-y-8 items-center xl:flex-row-reverse xl:justify-between xl:space-y-0">
          <div className="flex-1 pt-16 text-9xl flex justify-center xl:pt-0">
            🍔
          </div>
          <div className="flex-0 max-w-[340px] px-5 md:w-96 flex flex-col items-center space-y-4 xl:w-1/2 xl:ml-16 xl:min-h-screen xl:items-start xl:justify-center xl:pt-0">
            <h1 className="text-4xl text-primary-inverted font-extrabold">
              フェスレジ
            </h1>
            <p className="text-primary-inverted text-center leading-loose xl:text-start">
              フェスレジは、フェスの会計を支援するためのサービスです。
            </p>
            <a
              href="/api/auth/signout/"
              className="block w-full px-6 py-3 rounded-md text-accent-primary-regular bg-primary-regular text-lg font-bold text-center transition-all hover:brightness-110 active:brightness-75"
              onClick={handleSignOut}
            >
              ログアウト
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignOut;
