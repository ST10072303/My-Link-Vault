import './App.css'
import { useEffect, useState } from 'react'
import type { LinkItem } from './types/Link'
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
  const [links, setLinks] = useState<LinkItem[]>([]);
// Load links from Local Storage
useEffect(() => {
    const savedLinks = localStorage.getItem("links");
  // show saved links from local storage
    if (savedLinks) {
      setLinks(JSON.parse(savedLinks));
    }
  }, []);

  // Save links to Local Storage
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

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
    // filtering link array on search using filter, incude, toLowerCase array methods
  const filteredLinks = links.filter((link) => {
    const search = searchTerm.toLowerCase();

    return (
      link.title.toLowerCase().includes(search) ||
      link.url.toLowerCase().includes(search) ||
      link.description.toLowerCase().includes(search) ||
      link.category.toLowerCase().includes(search)
    );
  });

  return (
    <>
    
      <main className="main">

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
         <button
        className="addButton" onClick={() => {setEditingLink(null); setShowForm(true);}}>
        Add Link </button> <br /><br />

      { showForm && (
      <LinkForm onSave={addLink} editingLink={editingLink} setEditingLink={setEditingLink}
        closeForm={() => setShowForm(false)}/>
     
     )}
        <br />

     <LinkTable links={filteredLinks} onDelete={deleteLink} onEdit={editLink} />
      </main>
      
    </>
  )
}

export default App
