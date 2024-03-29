import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
  .then((res) => res.json())
  .then((data) => {
    setImages(data.hits);
    setIsLoading(false);
  })
  .catch((err) => {
    console.error('Error:', err);
    // Log the complete response content
    err.text().then(errorMessage => console.log('Response Content:', errorMessage));
  });

  }, [term]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => {
          return <ImageCard key={image.id} image={image} />;
        })}
      </div>
    </div>
  );
}

export default App;
