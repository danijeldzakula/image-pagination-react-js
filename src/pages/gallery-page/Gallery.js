import React, { useEffect, useLayoutEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import Photo from '../../components/Photo/Photo';

const url = 'server/db.json';

const Gallery = () => {
  const [ photos, setPhotos ] = useState([]);
  const [ error, setError ] = useState('');
  
  const pageNumbers = [];
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ dataPerPage ] = useState(2);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('Something went wrong while requesting posts!');
        return response.json();
      })
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => setError('Something went wrong while requesting posts!'));
  }, []);
  

  for (let i = 1; i <= Math.ceil(photos.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  const indexOfLast = currentPage * dataPerPage;
  const indexOfFirst = indexOfLast - dataPerPage;
  const updatePhotos = photos.slice(indexOfFirst, indexOfLast);

  let onPrev = () => {
    setCurrentPage(currentPage - 1);
  }

  let onNext = () => {
    setCurrentPage(currentPage + 1);
  }

  let onTarget = (target) => {
    setCurrentPage(target);
  }

  useLayoutEffect(() => {
    if (currentPage <= 0) setCurrentPage(1);
  }, [ currentPage, setCurrentPage ]);

  return (
    <section className='section section-gallery'>
      <div className='container'>
        <h1>Gallery</h1>

        {photos.length === 0 && <p className='text-center'>{error}</p>}
        {photos.length > 0 && <Photo photos={updatePhotos} />}
        {photos.length > 0 && <Pagination photos={photos} current={currentPage} onPrev={onPrev} onNext={onNext} onTarget={onTarget} numbers={pageNumbers} />}

      </div>
    </section>
  )
}

export default Gallery;