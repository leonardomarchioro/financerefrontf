import { TiArrowBack } from "react-icons/ti";
import ThemeSelect from "../ThemeSelect";

import Link from "next/link";

import { Header } from "./styles";

const GeneralHeader: React.FC<{ path: string }> = ({ path }) => {
  return (
    <Header>
      <Link href={path}>
        <TiArrowBack size={35} />
      </Link>
      <ThemeSelect />
    </Header>
  );
};

export default GeneralHeader;
