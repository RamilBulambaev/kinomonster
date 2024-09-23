import { useState } from "react";
import { ECollections } from "@/03_widgets/movies/model/types";
import Select from "@/06_shared/ui/Select/Select";
import { COLLECTIONS_TITLE_ARRAY, COLLECTIONS_VALUE_ARRAY } from "@/06_shared/constants/constants";
import styles from "./AllCollections.module.css";
import { CollectionsListWithPagination } from "@/03_widgets/CollectionsListWithPagination";

function AllCollections() {
  const [collections, setCollections] = useState(ECollections.TOP_POPULAR_ALL);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCollections(event.target.value as ECollections);
  };

  return (
    <div className={styles.container}>
      <Select
        id="collections"
        name="collections"
        onChange={handleChange}
        optionsArray={COLLECTIONS_TITLE_ARRAY}
        valueArray = {COLLECTIONS_VALUE_ARRAY}
      />
      <CollectionsListWithPagination collections={collections} />
    </div>
  );
}

export default AllCollections;
