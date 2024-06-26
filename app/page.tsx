import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { fetchLocations, fetchMealtypes, fetchRestaurants } from "@/lib/data";
import Mealtype from "@/components/homepage/Mealtype";
import LoginButton from "@/components/auth/login-button";
import SearchItems from "@/components/homepage/SearchItems";
import RegisterButton from "@/components/auth/register-button";
import { currentUser } from "@/lib/auth";
import { UserPagesButton } from "@/components/user-pages-button";

export default async function Home() {
  const mealtypes = await fetchMealtypes();
  const locations = await fetchLocations();
  const restaurants = await fetchRestaurants();
  const user = await currentUser();

  return (
    <div className="w-full text-white">
      <div className="w-full h-[480px]">
        <Image
          src="/assets/hero-desktop.png"
          width={2160}
          height={480}
          className="hidden md:flex md:w-full md:h-[480px] md:object-cover md:object-center md:absolute"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <Image
          src="/assets/hero-mobile.png"
          width={1024}
          height={480}
          className="flex w-full h-[480px] object-cover object-center absolute md:hidden"
          alt="Screenshot of the dashboard project showing mobile version"
        />

        <div className="relative bg-gradient-to-t from-red-950 to-transparent w-full h-full">
          <div className=" w-full h-full my-auto flex flex-col items-center justify-evenly">
            {/* login */}
            <div className=" hidden md:flex md:w-10/12 md:justify-end ">
              {!user && (
                <div>
                  <LoginButton>
                    <Button variant="ghost" size="lg">
                      Login
                    </Button>
                  </LoginButton>
                  <RegisterButton>
                    <Button variant="ghost" size="lg" className="border-2">
                      Create an account
                    </Button>
                  </RegisterButton>
                </div>
              )}
              {
                user && (
                  <div>
                    <UserPagesButton />
                  </div>
                )
              }
            </div>
            {/* logo */}
            <div>
              <Logo />
            </div>
            {/* heading */}
            <h1 className=" w-11/12 text-center text-3xl font-semibold md:text-4xl md:font-bold">
              Find the best restaurants, cafés, and bars
            </h1>

            {/* search section */}
            <SearchItems
              locationsList={locations}
              restaurantList={restaurants}
            />
          </div>
        </div>
      </div>

      {/* main */}
      <main className=" w-full py-9 md:py-12">
        <div className="w-10/12 mx-auto flex flex-col">
          <h2 className=" font-bold text-2xl text-myHeadings md:text-3xl">
            Quick Searches
          </h2>
          <p className=" text-sm text-myDescriptions mt-3 mb-6 md:text-lg md:mt-2 md:mb-8">
            Discover restaurants by type of meal
          </p>

          {/* mealtypes */}
          <section className=" grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {mealtypes.map((mealtype) => (
              <Mealtype
                key={mealtype.id}
                mealtype={mealtype.mealtype}
                content={mealtype.content}
                imageURL={mealtype.image}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
