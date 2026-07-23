import styles from "./SearchBar.module.css";
import search from "../../assets/search.png"

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}


export const SearchBar = ({searchTerm, setSearchTerm}: SearchBarProps) => {

  return (
    <div className={styles.searchContainer}>
      
    <input type="text" placeholder=" type to search links..." value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  )
}

