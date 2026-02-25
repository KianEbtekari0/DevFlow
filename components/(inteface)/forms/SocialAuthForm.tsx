"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ROUTES from "@/constants/route";
import { signIn } from "next-auth/react";
import Image from "next/image";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: true,
      });

      // toast.promise<{ name: string }>(
      //   () =>
      //     new Promise((resolve) =>
      //       setTimeout(() => resolve({ name: "Event" }), 2000),
      //     ),
      //   {
      //     loading: "Loading...",
      //     success: (data) => `${data.name} has been created`,
      //     error: "Error",
      //   },
      // );
    } catch (error) {
      console.log(error);

      toast.error("Event has not been created");
    }
  };

  return (
    <div className="mt-10 flex-wrap flex gap-2.5">
      <Button
        onClick={() => handleSignIn("github")}
        className="background-dark400_light900 shadow cursor-pointer rounded-2 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3.5"
      >
        <Image
          src="/icons/github.svg"
          alt="github logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in With Github</span>
      </Button>

      <Button
        onClick={() => handleSignIn("google")}
        className="background-dark400_light900 shadow cursor-pointer rounded-2 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3.5"
      >
        <Image
          src="/icons/google.svg"
          alt="github logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in With Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
