import { ReactElement } from "react";
import Sidebar from "@/components/sidebar";

type componentProps = {
  children: ReactElement;
};
const Main = ({ children }: componentProps) => {
  return (
    <>
      <div className="overflow-hidden w-full h-full relative flex z-0">
        <div className="hidden md:block  w-80 flex-shrink-0 overflow-x-hidden bg-base-200  h-full">
          <div className="flex h-full min-h-0 flex-col">
            <nav className="scrollbar-trigger relative h-full w-full flex-1 items-start">
              <Sidebar />
            </nav>
          </div>
        </div>
        <div className="relative flex h-full max-w-full flex-1 overflow-hidden">
          <div className="flex h-full max-w-full flex-1 flex-col">
            <main className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;