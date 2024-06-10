import './App.css';
import { BottomSection, Slider, Header, Blogs, Footer, BestSelletSection, SummerSellSection } from './Components/component_list';
import { useState } from 'react';

function App() {
  const [showOnlyBlogs, setShowOnlyBlogs] = useState(false);

  return (
    <div className="App">
      <Header onBlogClick={() => showOnlyBlogs ? setShowOnlyBlogs(false) : setShowOnlyBlogs(true)} />
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
