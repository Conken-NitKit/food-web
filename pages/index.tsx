import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignIn: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/signin");
  }, [router]);

  return <div />;
};

export default SignIn;
