function fetchUnsplash() {
  return fetch(
    "https://api.unsplash.com/photos/?client_id=mM5LCVZJkzc0WZtICFg6Ruh3xj6NhGcBeZl8OQbSedo"
  )
    .then((response) => response.json())
    .catch(new Error())
    .then((data) => console.log(data));
}

fetchUnsplash();
