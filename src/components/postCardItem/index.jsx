import * as C from './styles';
import { renderHTML } from '../../utils/renderHtml';
import { limitText } from '../../utils/limitText';
import { slugify } from '../../utils/slogify';
import { extractAndCleanPost } from '../../utils/extractAndCleanPost';

function Post({ post }) {

    const { image, contentWithoutImage } = extractAndCleanPost(post);
    const slug = slugify(post.title);

    return (
        <C.Post to={`/blog/${slug}`} key={post.id}>
            {/* {post.labels && <label>{post.labels}</label>} */}
            <C.Image src={image} alt={post.title} />
            <C.Title>{post.title}</C.Title>
            <div dangerouslySetInnerHTML={renderHTML(limitText(contentWithoutImage, 280))} />
        </C.Post>
    );
}

export default Post;
