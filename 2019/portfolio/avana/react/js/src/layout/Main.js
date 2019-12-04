import React, { useEffect } from 'react';
import Figure from '../components/Figure';
import FigureList from '../components/FigureList';
import image1 from '../assets/images/home-images/image-1.jpg';
import image2 from '../assets/images/home-images/image-2.jpg';
import image3 from '../assets/images/home-images/image-3.jpg';
import image4 from '../assets/images/home-images/image-4.jpg';
import image5 from '../assets/images/home-images/image-5.jpg';

function Main() {
  const leftWorkItems = [
    {
      image: image2,
      alt: 'Studio Thonik',
      title: 'Studio Thonik',
      highlight: 'Exhibition',
      description: 'Project for Thonik, design studio based in Amsterdam',
      path: '/studio-thonik'
    },
    {
      image: image4,
      alt: 'A Brand',
      title: 'A Brand',
      highlight: 'new Agency',
      description: 'Over 40,000 customers use our themes to power their',
      path: '/new-brand'
    },
    {
      image: image2,
      alt: 'Studio Thonik',
      title: 'Studio Thonik',
      highlight: 'Exhibition',
      description: 'Project for Thonik, design studio based in Amsterdam',
      path: '/studio-thonik'
    },
    {
      image: image4,
      alt: 'A Brand',
      title: 'A Brand',
      highlight: 'new Agency',
      description: 'Over 40,000 customers use our themes to power their',
      path: '/new-brand'
    }
  ];

  const rightWorkItems = [
    {
      image: image3,
      alt: 'Anatome Milano',
      title: 'Anatome Milano',
      highlight: 'Galleria',
      description: 'Galerie Anatome based in Paris',
      path: '/anatome-milano'
    },
    {
      image: image5,
      alt: 'A Brand',
      title: 'A Brand',
      highlight: 'new Agency',
      description: 'Over 40,000 customers use our themes to power their',
      path: '/new-brand'
    },
    {
      image: image3,
      alt: 'Anatome Milano',
      title: 'Anatome Milano',
      highlight: 'Galleria',
      description: 'Galerie Anatome based in Paris',
      path: '/anatome-milano'
    },
    {
      image: image5,
      alt: 'A Brand',
      title: 'A Brand',
      highlight: 'new Agency',
      description: 'Over 40,000 customers use our themes to power their',
      path: '/new-brand'
    }
  ];

  // useEffect(() => {
  //   // Biarkan Masonry / jQuery handle sendiri
  //   // Jika ingin trigger ulang setelah render:
  //   if (window.$ && window.$.fn.masonry) {
  //     // Trigger ulang Masonry jika tersedia.
  //     window.$('#grid').masonry();
  //   }
  // }, []);

  return (
    <main role='main-home-wrapper' className='container'>
      <div className='row'>
        <section className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
          <article role='pge-title-content'>
            <header>
              <h2>
                <span>avana</span> A Brand new Agency.
              </h2>
            </header>
            <p>
              This is the story of Avana, a minimal Bootstrap template for creative agency.
            </p>
          </article>
        </section>

        <section className='col-xs-12 col-sm-6 col-md-6 col-lg-6 grid'>
          <Figure
            src={image1}
            alt='Eliana Dedda'
            title='Eliana Dedda'
            highlight='Identity'
            description='Personal Brand Identity.'
            href='/eliana-dedda'
          />
        </section>

        <div className='clearfix' />

        <section className='col-xs-12 col-sm-6 col-md-6 col-lg-6 grid'>
          <FigureList workItems={leftWorkItems} />
        </section>

        <section className='col-xs-12 col-sm-6 col-md-6 col-lg-6 grid'>
          <FigureList workItems={rightWorkItems} />
        </section>

        <div className='clearfix' />

      </div>
    </main>
  );
}

export default Main;
