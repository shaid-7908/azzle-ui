import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { getBlogContent } from "@/components/hooks/getBlogs";
import { useMemo } from "react";
function BlogDetails({params}) {
    const file = params.filename + '.md'
    const blogData = getBlogContent(file)
    
    const renderers = useMemo(
      () => ({

        p: ({ ...props }) => <p className="font-lora my-2" {...props} />,
        h1:({...props})=><h1 className="text-[1.5rem] md:text-[2.5rem]  leading-snug" {...props}/>,
        h2:({...props})=><h2 className="text-2xl my-4 tracking-wide leading-relaxed" {...props}/>,
        h3: ({ ...props }) => <h3 className="text-xl my-4 tracking-wide font-bold" {...props} />,
        img:({...props})=><img className="" {...props}/>,
        blockquote:({...props})=><blockquote className="px-[1em] border-l-[0.25em]" {...props}/>,
        strong: ({ ...props }) => (
          <strong className="font-[600] " {...props} />
        ),
        code: ({ ...props }) => (
          <code className="px-1 rounded-sm bg-slate-200" {...props} />
        ),
        ol: ({ ...props }) => (
          <ol className="list-decimal ml-[15px]" {...props} />
        ),
        ul: ({ ...props }) => <ul className="list-disc my-2 font-lora ml-[15px]" {...props} />,
        li: ({ ...props }) => <li className="ml-2" {...props} />,
      }),
      []
    );
  return (
    
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="breadcrumb-wrapper">
            {/* Section Container */}
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">Blog Details</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>{params.filename}</li>
                </ul>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Blog Section Start :::... */}
        <div className="blog-section">
          {/* Section Spacer */}
          <div className="pb-40 xl:pb-[220px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-[1fr,minmax(416px,_0.5fr)]">
                <div className="flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-20">
                  {/* Blog Post Details */}
                  <div className="flex flex-col gap-6">
                    {/* Blog Post Text Area */}
                    <article className="jos overflow-hidden bg-white">
                     <Markdown components={renderers}>{blogData.content}</Markdown>
                    </article>
                    
                   
                  </div>
                  {/* Blog Post Details */}
                  {/* Blog Comment Form */}
                  
                </div>
                {/* Blog Aside */}
                <aside className="jos flex flex-col gap-y-[30px]">
                  {/* Single Sidebar */}
                  <div>
                    {/* Sidebar Search */}
                    <form
                      action="#"
                      method="post"
                      className="relative h-[60px]"
                    >
                      <input
                        type="search"
                        name="sidebar-search"
                        id="sidebar-search"
                        placeholder="Type to search..."
                        className="h-full w-full rounded-[50px] border border-[#E1E1E1] bg-white py-[15px] pl-16 pr-8 text-lg outline-none transition-all focus:border-colorOrangyRed"
                        required=""
                      />
                      <button
                        type="submit"
                        className="absolute left-[30px] top-0 h-full"
                      >
                        <Image
                          src="/assets/img_placeholder/th-1/icon-black-search.svg"
                          alt="search"
                          width={20}
                          height={20}
                        />
                      </button>
                    </form>
                    {/* Sidebar Search */}
                  </div>
                  {/* Single Sidebar */}
                  {/* Single Sidebar */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Blog Categories
                    </div>
                    {/* Blog Categories List */}
                    <ul>
                      <li className="mb-6 last:mb-0">
                        <Link
                          href="/blog-details"
                          className="text-black hover:text-colorOrangyRed"
                        >
                          Business &amp; Marketing (18)
                        </Link>
                      </li>
                      <li className="mb-6 last:mb-0">
                        <Link
                          href="/blog-details"
                          className="text-black hover:text-colorOrangyRed"
                        >
                          Technology (05)
                        </Link>
                      </li>
                      <li className="mb-6 last:mb-0">
                        <Link
                          href="/blog-details"
                          className="text-black hover:text-colorOrangyRed"
                        >
                          Art &amp; Beauty (23)
                        </Link>
                      </li>
                      <li className="mb-6 last:mb-0">
                        <Link
                          href="/blog-details"
                          className="text-black hover:text-colorOrangyRed"
                        >
                          Digital Agency (10)
                        </Link>
                      </li>
                    </ul>
                    {/* Blog Categories List */}
                  </div>
                  {/* Single Sidebar */}
                 
                  {/* Single Sidebar */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Tags
                    </div>
                    {/* Blog Tags Post List */}
                    <ul className="flex flex-wrap gap-x-2 gap-y-4">
                      <li>
                        <Link
                          href="/blog-details"
                          className="inline-block rounded-[55px] bg-black bg-opacity-5 px-5 py-1 hover:bg-colorOrangyRed hover:text-white"
                        >
                          Article
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog-details"
                          className="inline-block rounded-[55px] bg-black bg-opacity-5 px-5 py-1 hover:bg-colorOrangyRed hover:text-white"
                        >
                          Business
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog-details"
                          className="inline-block rounded-[55px] bg-black bg-opacity-5 px-5 py-1 hover:bg-colorOrangyRed hover:text-white"
                        >
                          Digital
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog-details"
                          className="inline-block rounded-[55px] bg-black bg-opacity-5 px-5 py-1 hover:bg-colorOrangyRed hover:text-white"
                        >
                          Technology
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog-details"
                          className="inline-block rounded-[55px] bg-black bg-opacity-5 px-5 py-1 hover:bg-colorOrangyRed hover:text-white"
                        >
                          UI/UX
                        </Link>
                      </li>
                    </ul>
                    {/* Blog Tags Post List */}
                  </div>
                  {/* Single Sidebar */}
                  {/* Single Sidebar */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Subscribe
                    </div>
                    <p className="mb-3">
                      Subscribe to our newsletter and get the latest news
                      updates lifetime
                    </p>
                    <form action="#" method="post" className="flex flex-col">
                      <input
                        type="email"
                        name="sidebar-newsletter"
                        id="sidebar-newsletter"
                        placeholder="Enter your email address"
                        className="h-[60px] w-full rounded-[50px] border border-colorCodGray bg-transparent px-10 py-[15px] text-lg outline-none transition-all placeholder:text-black focus:border-colorOrangyRed"
                        required=""
                      />
                      <button
                        type="submit"
                        className="button mt-5 block rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                      >
                        Subscribe Now
                      </button>
                    </form>
                  </div>
                  {/* Single Sidebar */}
                </aside>
                {/* Blog Aside */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </div>
        {/*...::: Blog Section End :::... */}
      </main>
      <Footer_01 />
    </>
  );
}

export default BlogDetails;
