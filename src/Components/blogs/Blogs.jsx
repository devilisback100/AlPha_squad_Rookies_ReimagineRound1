import React, { useEffect, useState } from 'react'
import './Blogs.css'

function ExpandBlogs({ Image, Title, Blog_link }) {
    const [htmlCode, setHtmlCode] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/get_code/https://www.boat-lifestyle.com" + Blog_link).then(response => response.json())
            .then(htmlCode => {
                // Set the state with the fetched HTML code
                setHtmlCode(htmlCode.join(''));
            })
            .catch(error => console.error('Error:', error));
    }, [Blog_link])

    return (
            <div className='Expand_blogs'>
            <div className='Expand_blogs_part1'>
                <img alt='Blog_image' className='expand_blogs_image' src={Image} />
                <div className='expand_blogs_title'>{Title}</div>
            </div>
            <div className='Expand_blogs_part2' dangerouslySetInnerHTML={{ __html: htmlCode || '' }}>
            </div>
            </div>
    )
}
function BlogItem({ Image, title, published_at, link, set_blog_expand_check }) {
    return (
        <div className='Blog' onClick={() => { set_blog_expand_check({ Image, title, link }) }} >
            <div className='Blog_part_1'>
                <img className='Blog_image' src={Image} alt="Blog_image" />
                <div className='Blog_title'>{title}</div>
            </div>
            <div className='Blog_part_2'>
                <div className='Blog_date'>{published_at}</div>
            </div>
        </div>
    )
}

function Blogs({ setShowOnlyBlogs }) {
    const [Blog_data, set_Blog_data] = useState([]);
    const [blog_expand_check, set_blog_expand_check] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/get_blogs')
            .then(response => response.json())
            .then(data => {
                set_Blog_data(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);
    const handleClickOutside = () => {
        set_blog_expand_check(null);
        document.querySelectorAll(".Blog").forEach(function (el) {
            el.style.opacity = "1";
        });
    };

    if(blog_expand_check){
    document.querySelectorAll(".Blog").forEach(function (el) {
        el.style.opacity = "0.05";
    });
    }
    
    return (
        <div className='Blogs_main' >
            <div className='Title_Text' style={{ top: "-15px", left: "10px", display: setShowOnlyBlogs ? "none" : "inline" }} >Blogs</div>

            <div className='Blog_list' onClick={blog_expand_check ? handleClickOutside : null} style={{ height: setShowOnlyBlogs ? "85vh" : null }}>
            {blog_expand_check &&
                < ExpandBlogs Image={blog_expand_check.Image} Title={blog_expand_check.title} Blog_link={blog_expand_check.link} />
            }
            {
                Blog_data.map((data, i) => {
                    return < BlogItem
                        key={i}
                        Image={data[2]}
                        title={data[0]}
                        published_at={data[3]}
                        link={data[1]}
                        set_blog_expand_check={set_blog_expand_check}
                    />
                })
            }
        </div>
        </div>
    )
}

export default Blogs;