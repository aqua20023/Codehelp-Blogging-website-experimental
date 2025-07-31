import{createContext} from 'react';
import React, { useState } from 'react';
import { baseUrl } from '../baseUrl';
// step1 Context Creation
export const AppContext = createContext();

export default function AppContextProvider({children}) {
  const [loading , setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);



async function fetchBlogPosts(page = 1, tag = null, category) {
  setLoading(true);
  let url = `${baseUrl}?page=${page}`;
  if (tag) {
    url += `&tag=${tag}`;
  }
  if (category) {
    url += `&category=${category}`;
  }
  try{
    const response = await fetch(url);
    const data = await response.json();
    if(!data.posts || data.posts.length === 0) {
      throw new Error("Failed to fetch blogs");
    }
    console.log(data);
    setPage(data.page);
    setPosts(data.posts);
    setTotalPages(data.totalPages);
    
  }catch (error) {
    console.log("Error fetching blogs:", error);
    setPage(1);
    setPosts([]);
    setTotalPages(null);
  }
  setLoading(false);
}

function handlePageChange(page){
  setPage(page);
  fetchBlogPosts(page);
}


  const value = {
  loading,
  setLoading,
  posts,
  setPosts,
  page,
  setPage,
  totalPages,
  setTotalPages,
  fetchBlogPosts,
  handlePageChange
}; 

// step2 context provider
return <AppContext.Provider value={value}>
    {children}
</AppContext.Provider>
}

