let currentPage = 1;
const entriesPerPage = 10;
let targetEntries = [];
let imageEntries = [];

async function fetchData() {
  const [targetData, imageData] = await Promise.all([
    fetch('target.txt').then(response => response.text()),
    fetch('target_image_refer.txt').then(response => response.text())
  ]);
  targetEntries = targetData.split('-dividingline-').filter(entry => entry !== '');
  imageEntries = imageData.split('-dividingline-').filter(entry => entry !== '');
  console.log('targetEntries length:', targetEntries.length);
  renderPage(); // Render the first page initially
}

function renderPage() {
  const content1Element = document.getElementById('content1');
  content1Element.innerHTML = ''; // Clear previous entries

  const start = (currentPage - 1) * entriesPerPage;
  const end = start + entriesPerPage;
  const entriesToDisplay = targetEntries.slice(start, end);
  console.log('entriesToDisplay length:', entriesToDisplay.length);
  console.log('start:'+ start+ 'end:'+ end);

  entriesToDisplay.forEach((entry, index) => {
    console.log('Entry', index, entry);

    // const entryData = entry.split('\n').reduce((acc, line) => {
    //   const [key, value] = line.split(':');
    //   acc[key] = value;
    //   return acc;
    // }, {});


    const entryData = {};
    let haveimage = false;
    entry.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split('='); // Allow '=' in the value
        // if (key=='content'){
        //   console.log(valueParts);

        // }
        if (key=='image_order'){
          haveimage = true;

        }
        const value = valueParts.join('='); // Reconstruct the full value
        entryData[key] = value;
    });


    const entryElement = document.createElement('div');
    entryElement.classList.add('entry', 'card', 'card-body');

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

    const hrElement = document.createElement('hr');


    const contentElement = document.createElement('div');
    contentElement.classList.add('content', 'card-text');
    contentElement.innerHTML = entryData.content;


    entryElement.appendChild(titleElement);
    entryElement.appendChild(refurlElement);
    entryElement.appendChild(dateElement);
    
    if(haveimage){
      const imageOrderStr = entryData.image_order;
      const imageOrder = imageOrderStr.replace(/'/g, '"');
      const parsedImageOrder = JSON.parse(imageOrder);
  
      const imagesElement = document.createElement('div');
      imagesElement.classList.add('images','row', 'row-cols-2');
  
      parsedImageOrder.forEach(imageId => {
        const imageElement = document.createElement('img');
        imageElement.classList.add('image', 'col');
        imageElement.src = `images/${imageId}.jpg`; // Adjust the image path as needed
        imagesElement.appendChild(imageElement);
      });
  
      entryElement.appendChild(imagesElement);
    }

    entryElement.appendChild(hrElement);
    entryElement.appendChild(contentElement);

    content1Element.appendChild(entryElement);
  });

  renderPaginationrenderPage();
}

function renderPaginationrenderPage() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  const paginationElement = document.getElementById('pagination');
  paginationElement.innerHTML = ''; // Clear previous pagination

  const totalPages = Math.ceil(targetEntries.length / entriesPerPage);

  // "Previous" button
  const prevItem = document.createElement('li');
  prevItem.classList.add('page-item', currentPage === 1 ? 'disabled' : 'abled');

  const prevLink = document.createElement('a');
  prevLink.classList.add('page-link');
  prevLink.textContent = 'Previous';
  prevLink.href = '#';
  prevLink.onclick = (event) => {
    event.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      renderPage();
    }
  };

  prevItem.appendChild(prevLink);
  paginationElement.appendChild(prevItem);

  // Generate numbered page buttons (restrict to a max of 10 visible buttons for UX)
  let startPage = Math.max(1, currentPage - 5);
  let endPage = Math.min(totalPages, currentPage + 4);

  // Ensure at least 10 buttons are shown unless at start/end of the range
  if (currentPage <= 5) {
    endPage = Math.min(totalPages, 10);
  } else if (currentPage + 4 >= totalPages) {
    startPage = Math.max(1, totalPages - 9);
  }
  for (let i = startPage; i <= endPage; i++) {
    const pageItem = document.createElement('li');
    pageItem.classList.add('page-item', i === currentPage ? 'active' : 'deactive');

    const pageLink = document.createElement('a');
    pageLink.classList.add('page-link');
    pageLink.textContent = i;
    pageLink.href = '#';
    pageLink.onclick = (event) => {
      event.preventDefault();
      if (currentPage < totalPages) {
        currentPage = i;
        renderPage();
      }
    };

    pageItem.appendChild(pageLink);
    paginationElement.appendChild(pageItem);
  }

  // "Next" button
  const nextItem = document.createElement('li');
  nextItem.classList.add('page-item', currentPage === totalPages ? 'disabled' : 'abled');

  const nextLink = document.createElement('a');
  nextLink.classList.add('page-link');
  nextLink.textContent = 'Next';
  nextLink.href = '#';
  nextLink.onclick = (event) => {
    event.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      renderPage();
    }
  };

  nextItem.appendChild(nextLink);
  paginationElement.appendChild(nextItem);
}

fetchData();

const content = document.getElementById('content1');
const showfontsize = document.getElementById('fontsize');
const increaseSizeBtn = document.getElementById('increasesize');
const decreaseSizeBtn = document.getElementById('decreasesize');

let fontSize = 16;

// Function to increase font size
function increaseFontSize() {
    fontSize += 2;
    content.style.fontSize = fontSize + 'px';
    showfontsize.text = 'Font Size: '+fontSize
}

function decreaseFontSize() {
    if (fontSize > 12) { // Prevent font size from going below 12px
        fontSize -= 2;
        content.style.fontSize = fontSize + 'px';
        showfontsize.text = 'Font Size: '+fontSize
      }
}


// Event listeners for the buttons
increaseSizeBtn.addEventListener('click', increaseFontSize);
decreaseSizeBtn.addEventListener('click', decreaseFontSize);


// Scroll to the top of the page
const scrollToTopBtn = document.getElementById('scrollToTop');
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Scroll to the bottom of the page
const scrollToBottomBtn = document.getElementById('scrollToBottom');
scrollToBottomBtn.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});
