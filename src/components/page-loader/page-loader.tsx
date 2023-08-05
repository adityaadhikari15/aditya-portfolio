import { useEffect } from "react";
import PageLoaderStyle from "./PageLoader.module.scss";
interface PageLoaderProps {
  content?: string;
  isLoading?: boolean;
}

export const PageLoader = ({
  content = "Loading...",
  isLoading,
}: PageLoaderProps) => {
  return (
    <div className="center h-100">
      <div className={PageLoaderStyle.loader}>{content}</div>
    </div>
  );
};
