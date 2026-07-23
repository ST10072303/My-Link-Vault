import './App.css'
import { useState } from 'react'
import type { LinkItem } from './types/Link'
import { Navbar } from './components/Navbar/Navrbar'
import { SearchBar } from './components/SearchBar/SearchBar'
import { LinkTable } from './components/LinkTable/LinkTable'
import { LinkForm } from './components/LinkForm/LinkForm'

export const App = () => {
  //show form state
  const [showForm, setShowForm] = useState(false);
  //search State
  const [searchTerm, setSearchTerm] = useState("");
  //edit link State
  const [editingLink, setEditingLink] = useState<LinkItem | null>(null);
  //store all saved link in a LinkItem object array
  //Links variable holds current data, setlinks variable changes data
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
    },
  ]
);

  // add or update link array without changing the current one
  const addLink = (link: LinkItem) => {
    //conditional rendering
    if (editingLink) {
      const updatedLinks = links.map((currentLink) =>
        currentLink.id === link.id ? link : currentLink);

      setLinks(updatedLinks);
    } else {
      setLinks([...links, link]);
    }

    setEditingLink(null);
  };

    // delete links unsing array filter()
  const deleteLink = (id: number) => {
    const updatedLinks = links.filter((link) => link.id !== id);

    setLinks(updatedLinks);
  };

  // Edit LinkItem function
  const editLink = (link: LinkItem) => {
    setEditingLink(link);
    setShowForm(true);
  };
    // display searched inkItem using filter, incude, toLowerCase array methods
  const filteredLinks = links.filter((link) => {
    const search = searchTerm.toLowerCase();

    return (
      link.title.toLowerCase().includes(search) ||
      link.url.toLowerCase().includes(search) ||
      link.description.toLowerCase().includes(search)
    );
  });

  return (
    <>
     <Navbar />
      <main className="main">
        
      <button
        className="addButton" onClick={() => {setEditingLink(null); setShowForm(true);}}>
        Add New Link </button> 

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      { showForm && (
      <LinkForm onSave={addLink} editingLink={editingLink} setEditingLink={setEditingLink}
        closeForm={() => setShowForm(false)}/>
     
     )}

     <LinkTable links={filteredLinks} onDelete={deleteLink} onEdit={editLink} />
      </main>
      
    </>
  )
}

export default App
