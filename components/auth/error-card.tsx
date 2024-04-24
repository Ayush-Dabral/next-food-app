import { FaExclamationTriangle } from "react-icons/fa";
import { CardWrapper } from "./card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonLabel="Back to login"
      backButtonhref="/auth/login"
    >
        <div className="w-full flex justify-center text-sm"><FaExclamationTriangle className=" text-destructive"/></div>
    </CardWrapper>
  );
};
