async function fetchData() {
  const [targetData, imageData] = await Promise.all([
    fetch('target.txt').then(response => response.text()),
    fetch('target_image_refer.txt').then(response => response.text())
  ]);

  const targetEntries = targetData.split('-dividingline-').filter(entry => entry.trim() !== '');
  const imageEntries = imageData.split('-dividingline-').filter(entry => entry.trim() !== '');

  const content1Element = document.getElementById('content1');

  targetEntries.forEach((entry, index) => {
    const entryData = entry.split('\n').reduce((acc, line) => {
      const [key, value] = line.split('=');
      acc[key] = value;
      return acc;
    }, {});

    const imageOrderStr = imageEntries[index].split('\n').find(line => line.startsWith('image_order='))?.split('=')[1] || '';
    const imageOrder = imageOrderStr.replace(/'/g, '"');
    const parsedImageOrder = JSON.parse(imageOrder);

    const entryElement = document.createElement('div');
    entryElement.classList.add('entry', 'card', 'card-body', 'col-md-5');

    const titleElement = document.createElement('h2');
    titleElement.classList.add('title', 'card-title');
    titleElement.textContent = entryData.title;

    const dateElement = document.createElement('p');
    dateElement.classList.add('date');
    dateElement.textContent = entryData.created_at;

    const refurlElement = document.createElement('a');
    refurlElement.classList.add('refurl');
    refurlElement.href = entryData.url;
    refurlElement.textContent = entryData.url;

    
    const contentElement = document.createElement('h5');
    contentElement.classList.add('content', 'card-text');
    contentElement.innerHTML = entryData.content;

    const hrElement = document.createElement('hr');

    const imagesElement = document.createElement('div');
    imagesElement.classList.add('images','row', 'row-cols-3');

    parsedImageOrder.forEach(imageId => {
      const imageElement = document.createElement('img');
      imageElement.classList.add('image', 'col');
      imageElement.src = `images/${imageId}.jpg`; // Adjust the image path as needed
      imagesElement.appendChild(imageElement);
    });


    entryElement.appendChild(titleElement);
    entryElement.appendChild(refurlElement);
    entryElement.appendChild(dateElement);
    entryElement.appendChild(imagesElement);
    entryElement.appendChild(hrElement);
    entryElement.appendChild(contentElement);

    if (!content1Element.contains(entryElement)) {
      content1Element.appendChild(entryElement);
    } else {
      console.error("Entry element already exists in content element.");
    }
  });
}

fetchData();
