let currentPage = 1;
const entriesPerPage = 10;
let targetEntries = [];
let imageEntries = [];

// Function to get the current page from the URL
function getCurrentPageFromURL() {
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get('page'));
  return isNaN(page) || page < 1 ? 1 : page; // Default to page 1 if no valid page is in the URL
}

// Function to update the URL with the current page
function updateURLWithPage(page) {
  const params = new URLSearchParams(window.location.search);
  params.set('page', page);
  window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
}

async function fetchData() {
  const [targetData, imageData] = await Promise.all([
    fetch('target.txt').then(response => response.text()),
    fetch('target_image_refer.txt').then(response => response.text())
  ]);
  targetEntries = targetData.split('-dividingline-').filter(entry => entry !== '');
  imageEntries = imageData.split('-dividingline-').filter(entry => entry !== '');

  // Set currentPage based on the URL parameter
  currentPage = getCurrentPageFromURL();
  
  renderPage(); // Render the page based on the current page
}

function renderPage() {
  const content1Element = document.getElementById('content1');
  content1Element.innerHTML = ''; // Clear previous entries

  const start = (currentPage - 1) * entriesPerPage;
  const end = start + entriesPerPage;
  const entriesToDisplay = targetEntries.slice(start, end);
  
  // Display the entries for the current page
  entriesToDisplay.forEach((entry, index) => {
    const entryData = {};
    let haveimage = false;
    
    entry.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      const value = valueParts.join('=');
      entryData[key] = value;
      if (key === 'image_order') {
        haveimage = true;
      }
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

    if (haveimage) {
      const imagesElement = document.createElement('div');
      imagesElement.classList.add('images', 'row', 'row-cols-2');
      const imageOrder = JSON.parse(entryData.image_order.replace(/'/g, '"'));

      imageOrder.forEach(imageId => {
        const imageElement = document.createElement('img');
        imageElement.classList.add('image', 'col');
        imageElement.src = `images/${imageId}.jpg`;
        imagesElement.appendChild(imageElement);
      });

      entryElement.appendChild(imagesElement);
    }

    entryElement.appendChild(hrElement);
    entryElement.appendChild(contentElement);
    content1Element.appendChild(entryElement);
  });

  renderPagination(); // Render pagination based on the current page
}

function renderPagination() {
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
      updateURLWithPage(currentPage); // Update the URL
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    
      renderPage();
    }
  };

  prevItem.appendChild(prevLink);
  paginationElement.appendChild(prevItem);

  // Numbered page buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement('li');
    pageItem.classList.add('page-item', i === currentPage ? 'active' : 'deactive');

    const pageLink = document.createElement('a');
    pageLink.classList.add('page-link');
    pageLink.textContent = i;
    pageLink.href = `?page=${i}`; // Link directly to the correct page URL
    pageLink.onclick = (event) => {
      event.preventDefault();
      currentPage = i;
      updateURLWithPage(currentPage); // Update the URL
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      renderPage();
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
      updateURLWithPage(currentPage); // Update the URL
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      renderPage();
    }
  };

  nextItem.appendChild(nextLink);
  paginationElement.appendChild(nextItem);
}

// Call fetchData on page load
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
