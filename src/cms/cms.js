import CMS from 'netlify-cms';

// Previews
import HomePagePreview from './preview-templates/HomePagePreview';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';

// Fields (widgets)
import { MatrixControl, MatrixPreview } from './Matrix';

CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

CMS.registerWidget('matrix', MatrixControl, MatrixPreview);
