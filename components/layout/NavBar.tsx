"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const NavBar = () => {
  const router = useRouter();
  const { userId } = useAuth();

  return (
    <div className="sticky top-0 border border-b-primary/10 bg-secondary">
      <Container>
        <div
          className="flex items-center justify-between"
          onClick={() => {
            router.push("/");
          }}
        >
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/logo.png" alt="logo" width="50" height="50" />
            <div className="text-2xl font-bold">Hotel Booking App</div>
          </div>

          <div className="flex items-center gap-3">
            <div>theme</div>

            <UserButton afterSwitchSessionUrl="/" />
            {!userId && (
              <>
                <Button
                  onClick={() => {
                    router.replace("sign-up");
                  }}
                  variant="outline"
                  size="sm"
                >
                  Sign in
                </Button>
                <Button
                  onClick={() => {
                    router.push("/sign-up");
                  }}
                  size="sm"
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
