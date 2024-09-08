const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "name": "Joanna Wolna",
    "url": "https://joanna-wolna-psychologue.netlify.app/",
    "image": "https://joanna-wolna-psychologue.netlify.app/images/joanna-wolna.png",
    "description": "Joanna wolna Psychologue (TCC)/ Sophrologue",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2 rue Charles",
      "addressLocality": "Montgeron",
      "addressRegion": "Île-de-France",
      "postalCode": "91230",
      "addressCountry": "FR"
    },
    "sameAs": [
      "https://www.doctolib.fr/psychologue/montgeron/joanna-wolna/"
    ]
  };
  
  // Inject JSON-LD data into the page
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(jsonLdData);
  document.head.appendChild(script);