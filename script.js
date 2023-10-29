document.addEventListener('DOMContentLoaded', function() {
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    const imageUpload = document.getElementById('image-upload');
    const videoUpload = document.getElementById('video-upload');
    const submitButton = document.getElementById('submit-post');
    const postsContainer = document.getElementById('posts');

    submitButton.addEventListener('click', function() {
        const title = postTitle.value;
        const content = postContent.value;

        if (title.trim() !== '' && content.trim() !== '') {
            // Create a post container
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            // Display post title and content
            const postTitleElement = document.createElement('h3');
            postTitleElement.textContent = title;

            const postContentElement = document.createElement('p');
            postContentElement.textContent = content;

            postDiv.appendChild(postTitleElement);
            postDiv.appendChild(postContentElement);

            // Create a container for media (images and videos)
            const mediaContainer = document.createElement('div');
            mediaContainer.style.display = 'flex';
            mediaContainer.style.alignItems = 'center';

            // Create a container for images (on the left)
            const imageContainer = document.createElement('div');
            imageContainer.style.flex = '1'; // Images take up 50% of the available space
            imageContainer.style.marginRight = '10px'; // Adjust the margin as needed
            mediaContainer.appendChild(imageContainer);

            // Create a container for videos (on the right)
            const videoContainer = document.createElement('div');
            videoContainer.style.flex = '1'; // Videos take up 50% of the available space
            videoContainer.style.marginLeft = '10px'; // Adjust the margin as needed
            mediaContainer.appendChild(videoContainer);

            postDiv.appendChild(mediaContainer);

            // Display images
            if (imageUpload.files.length > 0) {
                const imageList = document.createElement('ul');
                for (let i = 0; i < imageUpload.files.length; i++) {
                    const imageItem = document.createElement('li');
                    const imageElement = document.createElement('img');
                    imageElement.src = URL.createObjectURL(imageUpload.files[i]);
                    imageElement.style.maxWidth = '100%';
                    imageElement.style.maxHeight = '200px'; // Adjust the height as needed
                    imageList.appendChild(imageItem);
                    imageItem.appendChild(imageElement);
                }
                imageContainer.appendChild(imageList);
            }

            // Display videos
            if (videoUpload.files.length > 0) {
                const videoList = document.createElement('ul');
                for (let i = 0; i < videoUpload.files.length; i++) {
                    const videoItem = document.createElement('li');
                    const videoElement = document.createElement('video');
                    videoElement.src = URL.createObjectURL(videoUpload.files[i]);
                    videoElement.controls = true;
                    videoElement.style.maxWidth = '100%';
                    videoElement.style.maxHeight = '200px'; // Adjust the height as needed
                    videoList.appendChild(videoItem);
                    videoItem.appendChild(videoElement);
                }
                videoContainer.appendChild(videoList);
            }

            postsContainer.appendChild(postDiv);

            // Clear the input fields
            postTitle.value = '';
            postContent.value = '';
            imageUpload.value = '';
            videoUpload.value = '';
        } else {
            alert('Please fill in both title and content before submitting.');
        }
    });
});
