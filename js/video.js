document.addEventListener('DOMContentLoaded', function () {

      // Truncate the video title to a specified length
      function truncateTitle(title, maxLength) {
        return title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
    }

    // Fetch data from the API
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0h8qzFznWyj7TwgPKUObFQ&maxResults=3&order=viewCount&key=AIzaSyAdOGQuZ7GtqkERBy5RSfKEvukh33l2OiY')
        .then(res => res.json())
        .then(data => {
            console.log(data)

           // Display videos on the web page
          const fetchedContent = document.getElementById('fetched-content');
          fetchedContent.innerHTML = ''; // Clear previous content

          data.items.forEach(item => {
            const videoContainer = document.createElement('div');
            videoContainer.classList.add("video-container");


           // Create and style the video title container
           const videoTitle = document.createElement('p');
           videoTitle.className = 'video-title';
           videoTitle.innerText = truncateTitle(item.snippet.title, 30); // Adjust the maximum length as needed
           videoContainer.appendChild(videoTitle);


         // Embed the video using an iframe
            const videoFrame = document.createElement('iframe');
            videoFrame.src = `https://www.youtube.com/embed/${item.id.videoId}`;
            videoFrame.allowFullscreen = true; // Allow fullscreen mode
            videoContainer.appendChild(videoFrame);

            fetchedContent.appendChild(videoContainer);
          });
          
        })
        .catch(error => console.error('Error fetching data from the API:', error));
});



// https://commentpicker.com/




// api key =AIzaSyAdOGQuZ7GtqkERBy5RSfKEvukh33l2OiY
// channel id= UC0h8qzFznWyj7TwgPKUObFQ
// data format=https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0h8qzFznWyj7TwgPKUObFQ&maxResults=3&order=date&key=AIzaSyAdOGQuZ7GtqkERBy5RSfKEvukh33l2OiY


// App ID= 1325348898149085
// App secret=51c4a17656cf735412199085ea0ea4c0
// access token=EAAS1ZAdZAHEt0BO5a17Aloe9s5U1ZBHg4nDwlxIE06sUrjEenqsQM3zVa1i6CTegvbZBLQzF9kNBc39ZCOhj3Xco9SkXAFHsjMiwLmYOubO8MjFMRrQC5DtRI1PXJkdz794jXGfvHP5YDLjc5ngsmDsG9OYpVj0ykpMdp8inmRxANME3pRalGsgHZAC0feoLbrmFR4dbi4ZCDXdkQs3UQZDZD