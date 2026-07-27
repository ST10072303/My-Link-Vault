import styles from "./SearchBar.module.css";
import logo from "../../assets/logo.png"

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({searchTerm, setSearchTerm}: SearchBarProps) => {

  return (
    <div className={styles.searchContainer}>
  <img src={logo} alt="linkVault Logo" />
  <h1>My Links Vault</h1> 
  <input 
    type="text" 
    placeholder="Type to search..." 
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)} 
  />
</div>
  
  )
}

