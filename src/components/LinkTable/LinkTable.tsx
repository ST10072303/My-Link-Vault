import React from 'react'
import styles from './LinkTable.module.css'
import type { LinkItem } from '../../types/Link';

interface LinkTableProps {
    links: LinkItem[];
    onDelete:(id: number) => void; // delete function from parent
    onEdit:(link: LinkItem) => void; // edit function from parent
}

export const LinkTable = ({links, onDelete, onEdit}: LinkTableProps) => {
  return (
    <div className={styles.tableContainer}>
            <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Link Address</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
               <tbody>
    {links.length === 0 ? (
        // display no links found if links is empty(conditional rendering)
        <tr>
            <td colSpan={4} className="message"> No links found.</td>
        </tr>
    ) : (
        //map through the array & display linkItems as table rows
        links.map((link) => (
          //identify each row of links by id
            <tr key={link.id}>
                <td>{link.title}</td>
                <td>
                    <a href={link.url} target="_blank" > {link.url} </a>
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
