"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

interface mealtypes {
  key: string;
  mealtype: string;
  content: string;
  imageURL: string;
}

const Mealtype = ({ key, mealtype, content, imageURL }: mealtypes) => {
  return (
    <Link
    href="/auth/login"
    key={key}>
    <div className="sm:h-40 flex flex-row shadow-lg hover:bg-slate-100 hover:shadow-2xl">
      <div className=" w-1/3 sm:w-auto sm:h-full sm:aspect-square">
        <Image
          src={`/${imageURL}`}
          width={471}
          height={320}
          className="h-full sm:h-auto aspect-square object-cover  object-center"
          alt={`Cover photo of ${mealtype}`}
        />
      </div>
      <div className=" w-2/3 sm:w-auto sm:h-full flex flex-col justify-center">
        <h3 className=" w-10/12 mx-auto text-myHeadings text-lg font-semibold">{mealtype}</h3>
        <p className=" w-10/12 mx-auto text-myDescriptions text-sm">{content}</p>
      </div>
    </div>
    </Link>
  );
};

export default Mealtype;
