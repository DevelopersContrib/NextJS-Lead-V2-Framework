"use client";
import { useFetchBlog } from "@/lib/hooks/useBlogFetcher";
import { useBlogStore } from "@/lib/store/useBlogStore";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const BlogList = ({ theme = "black" }) => {
  const { blog, loading } = useBlogStore();
  useFetchBlog();

  const blogPost = blog.length
    ? blog.map((item) => ({
        id: item.id,
        slug: item.contents[0].title,
        title: item.contents[0].title,
        image_url: item.contents[0].imageUrl,
        image_caption: item.contents[0].imageCaption,
        createdAt: item.createdAt,
        tags: item.contents[0].blogPostTags,
      }))
    : [];

  const textColor = theme === "white" ? "tw-text-white" : "tw-text-black";
  const backgroundColor = theme === "white" ? "tw-bg-transparent" : "tw-bg-white";

  return (
    <section className={`tw-py-24 ${backgroundColor}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h2 className={`tw-font-bold tw-text-3xl mb-4 text-center ${textColor}`}>
              Latest Blogs
            </h2>
          </div>
          <div className="col-lg-12">
            <div className="row justify-content-center">
              <div className="col-md-6">
                {loading ? (
                  <p className="text-center">Loading blog posts...</p>
                ) : blog.length > 0 ? (
                  blogPost.map((post, index) => (
                    <div
                      key={index}
                      className={`card !tw-border-l-0 !tw-border-r-0 !tw-border-t-0 !tw-border-gray-200 !tw-rounded-none ${backgroundColor}`}
                      style={{ backgroundColor: theme === "white" ? "transparent" : "white" }}
                    >
                      <div className="row g-0">
                        <div className="col-md-8">
                          <div className="card-body !tw-px-0 !tw-py-4 tw-flex tw-flex-col">
                            <h5 className="card-title mb-3">
                              <a
                                href={`/blog/${post.id}/${post.slug.replace(/\s+/g, "-")}`}
                                className={textColor}
                              >
                                {post.title}
                              </a>
                            </h5>
                            <div
                              className={`tw-font-semibold tw-text-sm ${
                                theme === "white" ? "tw-text-gray-300" : "tw-text-gray-600"
                              }`}
                            >
                              Tags
                            </div>
                            <ul className="tw-w-full tw-inline-flex tw-flex-wrap tw-gap-2 tw-list-none tw-pl-0 mb-3">
                              {post.tags.map((tag, index) => (
                                <li
                                  key={index}
                                  className={`tw-bg-gray-100 tw-px-2 tw-py-1 tw-rounded-md tw-text-xs ${textColor}`}
                                  style={{
                                    backgroundColor: theme === "white" ? "transparent" : "#f3f4f6",
                                    border: theme === "white" ? "1px solid white" : "none",
                                  }}
                                >
                                  {tag}
                                </li>
                              ))}
                            </ul>
                            <div className="tw-w-full mt-auto tw-flex tw-justify-between tw-items-center mb-2">
                              <a
                                className="btn btn-secondary"
                                href={`/blog/${post.id}/${post.slug.replace(/\s+/g, "-")}`}
                                style={{ cursor: "pointer", textDecoration: "none" }}
                              >
                                Read More
                              </a>
                              <div className="tw-bg-blue-100 tw-px-2 tw-py-1 tw-rounded-md tw-text-xs tw-gap-2 tw-inline-flex tw-items-center tw-text-blue-500/80">
                                <div>
                                  <FontAwesomeIcon icon={faCalendar} />
                                </div>
                                <div>{post.createdAt}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-end">
                          <a
                            href={`/blog/${post.id}/${post.slug.replace(/\s+/g, "-")}`}
                            style={{ cursor: "pointer", textDecoration: "none" }}
                            className="tw-inline-flex tw-py-4 tw-pl-4"
                          >
                            <Image
                              src={post.image_url}
                              alt={post.image_caption}
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="tw-h-[200px] tw-w-full tw-object-contain"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">No blog posts available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
