import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
}

const BlogPostPage = ({ post }: { post: BlogPost }) => {
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          title: post.title,
          description: post.description,
          url: `https://www.example.com/blog/${post.slug}`,
          images: [
            {
              url: "https://storage.googleapis.com/hudu-bucket/7c3dee73-d994-4a0b-b83b-b0afa44d623c.webp",
            },
          ],
        }}
      />
      <main>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all blog slugs
  const posts = [
    { slug: "dynamic-seo-guide" },
    { slug: "nextjs-best-practices" },
  ];
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;
  // Fetch data for a specific post
  const post = {
    slug,
    title: `Post Title for ${slug}`,
    description: `Description for ${slug}`,
    content: `This is the content of the post titled ${slug}.`,
  };

  return { props: { post } };
};

export default BlogPostPage;
