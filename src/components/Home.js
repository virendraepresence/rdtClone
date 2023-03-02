import useFetch from '../useFetch';
import BlogList from './BlogList';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import CenterBar from './CenterBar';
import Footer from './Footer';
import { useState } from 'react';

const Home = (props) => {
  
    // let name = 'Vikas';
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    return (
      <div className={`home mx-0`}>
        
        <div className={`bars bg-${props.mode}`}>
          <div className={`col-md-3 float-left my-5 p-2`}>
              <LeftSideBar mode={props.mode}/>
          </div>
          <div className="col-md-6 float-none my-3">
              <CenterBar mode={props.mode} />
              {error && <div>There is an error while loading the data...</div>}
        
              {isPending && <div><h2>The Page is Loading...</h2></div>}
              {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
          </div>

          <div className="col-md-3 float-right my-5">
              <RightSideBar mode={props.mode} />
          </div>

          
        </div>
        

        
      </div>
    );
  }
   
  export default Home;