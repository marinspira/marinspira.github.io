export function extractAndCleanPost(post) {
    const content = post.content;
    const div = document.createElement('div');
    div.innerHTML = content;

    const img = div.querySelector('img');
    let mainImage = null;

    if (img) {
        mainImage = img.src;

        const parent = img.closest('a, .separator, div');
        if (parent) {
            parent.remove();
        } else {
            img.remove();
        }
    }

    return {
        image: mainImage,
        contentWithoutImage: div.innerHTML
    };
}