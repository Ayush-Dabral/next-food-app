"use client";


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
    href={`/${mealtype}/1`}
    key={key}>
    <div className="sm:h-40 flex flex-row shadow-lg hover:bg-slate-100 hover:shadow-2xl">
      <div className=" w-1/3 sm:w-auto sm:h-full aspect-square relative">
        <Image
          src={`/${imageURL}`}
          fill
          className="aspect-square object-cover  object-center"
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
