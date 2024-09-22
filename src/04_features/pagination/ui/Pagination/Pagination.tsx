import { IPaginationProps } from "../../model/type";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

interface PaginationProps {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

function Pagination({
  top,
  bottom,
  children,
  ...paginationProps
}: PaginationProps & IPaginationProps) {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
}

export default Pagination;
