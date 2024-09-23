import { useState } from "react";
import { ECollections } from "@/03_widgets/movies/model/types";
import { CollectionsList } from "@/04_features/CollectionsList";
import { Pagination } from "@/04_features/Pagination";
import { useGetMoviesQuery } from "@/05_entities/MovieList/api/moviesApi";

interface Props {
  collections: ECollections;
}

function CollectionsListWithPagination({ collections }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetMoviesQuery({
    type: collections,
    page: currentPage,
  });

  const nextPage = () => {
    if (data && currentPage < data?.totalPages) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };

  const pageClick = (numberPage: number) => {
    setCurrentPage(numberPage);
  };

  return (
    <>
      {data?.items && (
        <Pagination
          currentPage={currentPage}
          totalPages={data.totalPages}
          handleNextPage={nextPage}
          handlePreviousPage={previousPage}
          handlePageClick={pageClick}
          top
          bottom
        >
          <CollectionsList films={data.items} isLoading={isLoading} />
        </Pagination>
      )}
    </>
  );
}

export default CollectionsListWithPagination;
