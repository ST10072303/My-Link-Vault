import styles from "./LinkTable.module.css";
import emptyImg from "../../assets/empty.png";
import type { LinkItem } from "../../types/Link";

interface LinkTableProps {
  links: LinkItem[];
  onDelete: (id: number) => void;
  onEdit: (link: LinkItem) => void;
}

export const LinkTable = ({ links, onDelete, onEdit }: LinkTableProps) => {

  // Show empty state if there are no links
  if (links.length === 0) {
    return (
      <div className={styles.emptyState}>
         <img style={{width: '300px'}} src={emptyImg} alt="linkVault Logo" />
        
        <h3>No links found</h3>
    
      </div>
    );
  }

  // show the table
  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Link Address</th>
            <th>Category</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {links.map((link) => (<tr key={link.id}>
              <td>{link.title}</td>
              <td>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.url}
                </a>
              </td>
              <td>{link.category}</td>
              <td>{link.description}</td>
              <td>
                <button
                  style={{ background: "#2563eb", margin: "10px" }}
                  onClick={() => onEdit(link)}
                >
                  Edit
                </button>

                <button
                  style={{ background: "tomato" }}
                  onClick={() => onDelete(link.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};