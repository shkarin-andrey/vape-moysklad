import { FC, ReactNode } from "react";
import Header from "./Header";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="p-5 py-10">{children}</main>
    </div>
  );
};

export default Layout;
