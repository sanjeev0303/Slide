import { cn } from "@/lib/utils";
import React from "react";
import { Spinner } from "./spinner";

type LoaderProps = {
  className: string;
  children: React.ReactNode;
  state: boolean;
  color?: string;
};

const Loader = ({ className, children, state, color }: LoaderProps) => {
  return state ? (
    <div className={cn(className)}>
      <Spinner color={color} />
    </div>
  ) : (
    children
  );
};

export default Loader;
