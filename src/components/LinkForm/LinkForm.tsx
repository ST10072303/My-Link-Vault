import React from 'react'
import styles from './LinkForm.module.css'
import type { LinkItem } from '../../types/Link'
import { useEffect, useState } from 'react'

interface LinkFormProps{
  //receiving onSave function from parent component
  onSave: (link:LinkItem) => void; //save function from parent
   editingLink: LinkItem | null;
  setEditingLink: React.Dispatch<
    React.SetStateAction<LinkItem | null>
  >;

}

export const LinkForm = ({onSave, editingLink, setEditingLink}: LinkFormProps) => {

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingLink) {
      setTitle(editingLink.title);
      setUrl(editingLink.url);
      setDescription(editingLink.description);
    }
  }, [editingLink]);

  const handleSave = () => {
    if (!title || !url || !description) {
      alert("Please fill all fields.");
      return;
    }

    const link: LinkItem = {
      id: editingLink ? editingLink.id : Date.now(),
      title,
      url,
      description,
    };

    onSave(link);
    setTitle("");
    setUrl("");
    setDescription("");
    setEditingLink(null);
  };

  return (
      <div className={styles.form}>

            <h2>Add New / Update Link Details</h2>

            <label>Title</label>
            <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label>Link Address</label>
            <input type="text" placeholder="Enter URL" value={url} onChange={(e) => setUrl(e.target.value)}/>

            <label>Description</label>
            <textarea rows={4} placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)}/>

            <button onClick={handleSave}>Save</button>

        </div>
  )
}
