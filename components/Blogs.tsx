export default function Blogs() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-4xl font-bold leading-10 tracking-tight text-sky-50">
          Blogs
        </h2>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-blue-900 shadow-lg">
            <div>
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1461773518188-b3e86f98242f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                alt=""
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold leading-5 text-rose-500">
                Blog
              </p>
              <h3 className="text-xl font-bold leading-7 text-sky-100">
                Blog title
              </h3>
              <p className="mt-3 text-base leading-6 text-sky-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.
              </p>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-800"
                    src="/portrait_tom_big.png"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold leading-5 text-sky-50">
                    Tom Sonntag
                  </p>
                  <div className="flex text-sm leading-5 text-sky-100">
                    <time dateTime="2023-01-13">Jan 01, 2023</time>
                    <span className="mx-1">&middot;</span>
                    <span>3 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-blue-700 shadow-lg">
            <div>
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1461773518188-b3e86f98242f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                alt=""
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold leading-5 text-rose-500">
                Blog
              </p>
              <h3 className="text-xl font-bold leading-7 text-sky-100">
                Blog title
              </h3>
              <p className="mt-3 text-base leading-6 text-sky-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.
              </p>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-800"
                    src="/portrait_tom_big.png"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold leading-5 text-sky-50">
                    Tom Sonntag
                  </p>
                  <div className="flex text-sm leading-5 text-sky-100">
                    <time dateTime="2023-01-13">Jan 01, 2023</time>
                    <span className="mx-1">&middot;</span>
                    <span>3 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-blue-500 shadow-lg">
            <div>
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1461773518188-b3e86f98242f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                alt=""
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold leading-5 text-rose-500">
                Blog
              </p>
              <h3 className="text-xl font-bold leading-7 text-sky-100">
                Blog title
              </h3>
              <p className="mt-3 text-base leading-6 text-sky-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.
              </p>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-800"
                    src="/portrait_tom_big.png"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold leading-5 text-sky-50">
                    Tom Sonntag
                  </p>
                  <div className="flex text-sm leading-5 text-sky-100">
                    <time dateTime="2023-01-13">Jan 01, 2023</time>
                    <span className="mx-1">&middot;</span>
                    <span>3 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
