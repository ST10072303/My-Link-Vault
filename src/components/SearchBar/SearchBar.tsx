import styles from "./SearchBar.module.css";


interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}


export const SearchBar = ({searchTerm, setSearchTerm}: SearchBarProps) => {

  return (
    <div className={styles.searchContainer}>
      
    <input type="text" placeholder=" type to search..." value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  )
}

