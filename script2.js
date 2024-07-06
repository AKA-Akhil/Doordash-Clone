fetch('images.json')
  .then(response => response.json())
  .then(data => {
    data.images.forEach(image => {
      const targetElement = document.getElementById(image.target);
      if (targetElement) {
        const imgElement = document.createElement('img');
        imgElement.src = image.path;
        imgElement.alt = image.name;
        targetElement.appendChild(imgElement);
      } else {
        console.error('Target element not found:', image.target);
      }
    });
  })
  .catch(error => console.error('Error loading images:', error));
