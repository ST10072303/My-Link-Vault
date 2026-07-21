import React from 'react'
import styles from './LinkTable.module.css'
import type { LinkItem } from '../../types/Link';

interface LinkTableProps {
    links: LinkItem[];
    onDelete:(id: number) => void;
    onEdit:(link: LinkItem) => void;
}

export const LinkTable = ({links, onDelete, onEdit}: LinkTableProps) => {
  return (
    <div className={styles.tableContainer}>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Link</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
    {links.length === 0 ? (
        <tr>
            <td colSpan={4} className="empty-message"> No links found.</td>
        </tr>
    ) : (

        links.map((link) => (
            <tr key={link.id}>
                <td>{link.title}</td>
                <td>
                    <a href={link.url} target="_blank" rel="noopener noreferrer"> {link.url} </a>
                </td>
                <td>{link.description}</td>
                <td>
                <button style={{background: '#2563eb', margin: '10px'}} onClick={() => onEdit(link)}>Edit </button>
                 <button style={{background: 'tomato'}} onClick={() => onDelete(link.id)}> Delete</button> 
                </td>

            </tr>

        ))

    )}

</tbody>
            </table>

        </div>
    );
}
