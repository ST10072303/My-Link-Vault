import styles from "./SearchBar.module.css";


export const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
    <input type="text" placeholder="type to search links..." />
    </div>
  )
}

