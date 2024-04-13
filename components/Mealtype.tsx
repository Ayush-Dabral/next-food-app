"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

interface mealtype {
  key: number;
  name: string;
  content: string;
  imageURL: string;
}

const Mealtype = ({ key, name, content, imageURL }: mealtype) => {
  return (
    <div key={key} className="h-40 flex flex-row shadow-lg ">
      <div className=" aspect-square">
        <Image
          src={`/${imageURL}`}
          width={471}
          height={320}
          className=" aspect-square object-cover  object-center"
          alt={`Cover photo of ${name}`}
        />
      </div>
      <div className=" flex flex-col justify-center">
        <h3 className=" w-10/12 mx-auto text-myHeadings text-lg font-semibold">{name}</h3>
        <p className=" w-10/12 mx-auto text-myDescriptions text-sm">{content}</p>
      </div>
    </div>
  );
};

export default Mealtype;
