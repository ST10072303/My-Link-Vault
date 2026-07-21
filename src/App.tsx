import { useState } from 'react'
import type { LinkItem } from './types/Link'

import './App.css'
import { Navbar } from './components/Navbar/Navrbar'
import { SearchBar } from './components/SearchBar/SearchBar'
import { LinkTable } from './components/LinkTable/LinkTable'
import { LinkForm } from './components/LinkForm/LinkForm'

function App() {
  const [editingLink, setEditingLink] = useState<LinkItem | null>(null);
  
  const [links, setLinks] = useState<LinkItem[]>([
    {
      id: 1,
      title: "YouTube",
      url: "http://youtube.com",
      description: "Video streaming platform"
    },
    {
      id: 2,
      title: "Spotify",
      url: "http://spotify.com",
      description: "Music streaming platform"
    },
    {
      id: 3,
      title: "ILovePDF",
      url: "http://ilovepdf.com",
      description: "PDF editing site"
    }
  ]
);

  
  // add or update
  const addLink = (link: LinkItem) => {
    if (editingLink) {
      const updatedLinks = links.map((currentLink) =>
        currentLink.id === link.id ? link : currentLink
      );

      setLinks(updatedLinks);
    } else {
      setLinks([...links, link]);
    }

    setEditingLink(null);
  };
    // delete links
  const deleteLink = (id: number) => {
    const updatedLinks = links.filter((link) => link.id !== id);

    setLinks(updatedLinks);
  };

  // Edit
  const editLink = (link: LinkItem) => {
    setEditingLink(link);
  };

  return (
    <>
     <Navbar />
      <main className="main">
      <SearchBar />
      <LinkTable links={links} onDelete={deleteLink} onEdit={editLink} />
      <LinkForm onSave={addLink} editingLink={editingLink} setEditingLink={setEditingLink} />
    
      </main>
      
    </>
  )
}

export default App
