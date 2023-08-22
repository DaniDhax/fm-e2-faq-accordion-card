function toggleDetails(summary) {
    const content = summary.nextElementSibling;
    const icon = summary.querySelector('.icon-arrow');
  
    if (content.style.display === 'block') {
      content.style.display = 'none';
      icon.style.transform = 'rotate(0deg)';
    } else {
      content.style.display = 'block';
      icon.style.transform = 'rotate(180deg)';
    }
  }