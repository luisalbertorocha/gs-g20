export const CardBlog = (post) => {
  return (
    <div className="relative flex h-[40rem] w-full flex-col items-center justify-center">
      <img
        src={post.post.img}
        alt=""
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 mb-10 grid h-full w-full place-items-center bg-black/50">
        <h1 className="text-center text-3xl text-blue-gray-50 px-2">
          {post.post.title}
        </h1>
        <p className="hidden w-[50%] text-center leading-8 text-blue-gray-50 sm:block">
          {post.post.text}
        </p>
        <a
          href={
            post.post.link
          }
          target="_blank"
          className="rounded-full bg-blue-gray-50 px-5 py-3"
        >
          Saiba mais
        </a>
      </div>
    </div>
  )
}
