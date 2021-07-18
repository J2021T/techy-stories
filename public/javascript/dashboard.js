async function goToCreate() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/new-post');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#newPostBtn').addEventListener('click', goToCreate);