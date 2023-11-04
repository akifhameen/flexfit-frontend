import React from 'react';
import Navbar from '../components/navBar';
import './blogsHero.css';

const BlogsHero = () => {
  return (
    <div>
      <div class='blogs__hero-main-div'>
        <Navbar />
        <div class='blogs__second-hero-div'>
          <p>Blogs And Articles</p>
        </div>
      </div>
    </div>
  );
};
export default BlogsHero;
