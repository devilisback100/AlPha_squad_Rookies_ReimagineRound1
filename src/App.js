import './App.css';
import { BottomSection, Slider, Header, Blogs, Footer, BestSelletSection, SummerSellSection } from './Components/component_list';
import { useState } from 'react';

function App() {
  const [showOnlyBlogs, setShowOnlyBlogs] = useState(false);

  const onBlogClick = () => {
    try {
      setShowOnlyBlogs(prevState => !prevState);
    } catch (error) {
      // console.error('An error occurred: ', error);
    }
  };

  return (
    <div className="App">
      <Header onBlogClick={onBlogClick} />
      {showOnlyBlogs ? <Blogs setShowOnlyBlogs={setShowOnlyBlogs} /> : (
        <>
          <Slider />
          <BestSelletSection />
          <SummerSellSection />
          <Blogs />
          <BottomSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
