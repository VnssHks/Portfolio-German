window.addEventListener('scroll', function() {
    var backToTopBtn = document.getElementById('back-to-top-btn');
    if (window.pageYOffset > 100) { 
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  document.getElementById('back-to-top-btn').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  document.querySelectorAll('.description').forEach(function(description) {
    description.addEventListener('click', function() {
      var url = this.getAttribute('data-url');
      if (url) {
        window.location.href = url;
      }
    });
  });
  



  $(document).ready(function() {
    $('.gallery-link').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true
      },
      gallery: {
        enabled: true
      },
      callbacks: {
        elementParse: function(item) {
          console.log('Element parsed:', item);
          // Ensure that the image URL is set correctly
          item.src = item.el.attr('href');
        }
      }
    });
  });
  



document.getElementById('downloadButton').addEventListener('click', function() {
  const currentPageUrl = window.location.pathname;

  
  const downloadInfo = {
    '/berlin.html': {
      type: 'download',
      url: '/pdfs/BerlinMap.pdf',
      filename: 'WhatBelongsTogetherTornApart.pdf'
    },
    '/Berlin_NL.html': {
      type: 'download',
      url: '/pdfs/BERLIN_Franzi (1).pdf',
      filename: 'BerlinNeighbourhoodMap.pdf'
    },
    '/WorldMap.html': {
      type: 'download',
      url: '/pdfs/worldmap_Nele (1).pdf',
      filename: 'Childrens_WorldMap.pdf'
    },
    '/Neighbourhood.html': {
      type: 'download',
      url: '/pdfs/Neighbourhood_Map.pdf',
      filename: 'Neighbourhood_Map.pdf'
    },
    
    '/FAZ2.html': {
      type: 'link',
      url: 'https://www.faz.net/aktuell/wissen/erde-klima/bodenerosion-die-landwirtschaft-ist-in-gefahr-18303767.html#es-zieht-uns-den-boden-unter-den-fussen-weg',
      target: '_blank'
    },
    '/FAZ1.html': {
      type: 'link',
      url: 'https://www.faz.net/aktuell/wissen/weltraum/deutschland-perseiden-sorgen-fuer-sternschnuppen-im-august-18229907.html',
      target: '_blank'
    },
    '/Migration.html': {
      type: 'link',
      url: 'https://arcg.is/0L5aLX0',
      target: '_blank'
    },
    '/LOTR.html': {
      type: 'link',
      url: 'https://arcg.is/a1KDv',
      target: '_blank'
    },
    '/Thesis.html': {
      type: 'link',
      url: 'https://blazing-the-trail-thesis.vercel.app',
      target: '_blank'
    },
  };

  const pageInfo = downloadInfo[currentPageUrl];

  if (pageInfo) {
    if (pageInfo.type === 'download') {
      const link = document.createElement('a');
      link.href = pageInfo.url;
      link.download = pageInfo.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (pageInfo.type === 'link') {
      window.location.href = pageInfo.url;
    }
  } else {
    console.log('Information not found for the current page');
  }
});



