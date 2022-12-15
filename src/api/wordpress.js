useEffect(() => {
  fetch("https://www.tappods.com/wp-json/wp/v2/posts/")
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);
