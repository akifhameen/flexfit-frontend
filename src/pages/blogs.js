import React from 'react';
import BlogsHero from '../blogs/blogsHero';
import BlogsDetails from '../blogs/blogsDetails';
import './blogs.css';
import Footer from '../components/footer';

const Blogs = () => {
  return (
    <div>
      <div class='blogs__hero-section'>
        <BlogsHero />
      </div>
      <div class='blogs__details-section'>
        <BlogsDetails />
      </div>
    </div>
  );
};
export default Blogs;
