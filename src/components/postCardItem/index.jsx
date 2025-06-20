import * as C from './styles';
import { renderHTML } from '../../utils/renderHtml';
import { limitText } from '../../utils/limitText';
import { slugify } from '../../utils/slogify';
import { extractAndCleanPost } from '../../utils/extractAndCleanPost';

function Post({ post }) {

    const { image, contentWithoutImage } = extractAndCleanPost(post);
    const slug = slugify(post.title);

    const publishedDate = new Date(post.published);
    const formattedDate = publishedDate.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });

    return (
        <C.Post to={`/blog/${slug}`} key={post.id}>
            <C.Image src={image} alt={post.title} />
            <C.Date>{formattedDate}</C.Date> 
            <C.Title>{post.title}</C.Title>
            {/* <div dangerouslySetInnerHTML={renderHTML(limitText(contentWithoutImage, 280))} /> */}
            {/* {post.labels && <label>{post.labels}</label>} */}
        </C.Post>
    );
}

export default Post;
