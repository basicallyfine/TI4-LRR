import slugify from 'slugify';

const utils = {
    slug: (name) => slugify(name, { lower: true, replacement: '-' }).replace(/[^0-9a-z\-]/g, ''),
}

export default utils;