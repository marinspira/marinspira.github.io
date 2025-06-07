import * as C from './styles';
import { renderHTML } from '../../utils/renderHtml';
import { limitText } from '../../utils/limitText';

function Post({ post }) {

    function extractAndCleanPost(post) {
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

    const { image, contentWithoutImage } = extractAndCleanPost(post);

    console.log(image)
    console.log(contentWithoutImage)

    return (
        <C.Post to={`/blog/${post.id}`} key={post.id}>
            {/* {post.labels && <label>{post.labels}</label>} */}
            <C.Image src={image} alt={post.title} />
            <C.Title>{post.title}</C.Title>
            <div dangerouslySetInnerHTML={renderHTML(limitText(contentWithoutImage, 280))} />
        </C.Post>
    );
}

export default Post;
