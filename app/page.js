import Link from "next/link";

export default function Home() {
  return (
   <>
    <button className="border-b-4 border-sky-800">
      <Link href="/system-design">System Design</Link>
    </button>

    <div className="border">
      <div>Header</div>
      <div className="flex">
        <div className="basis-1/4">Sidebar</div>
        <div className="basis-2/4">Menu 1</div>
        <div className="basis-1/4">Menu 2</div>
      </div>
    </div>

    <div className="border mt-5 mb-5">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-32 bg-sky-500">Sidebar</div>
        <div className="w-full bg-red-500">main content</div>
      </div>
    </div>

    <div className="border mt-5 mb-5">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-wrap w-full">
          <div className="w-32 grow">1</div>
          <div className="w-32 grow">2</div>
          <div className="w-32 grow">3</div>
          <div className="w-32 grow">4</div>
          <div className="w-32 grow">5</div>
        </div>
      </div>
    </div>


    <div className="border mt-5 mb-5">
      <div className="flex justify-center">
        <div>Sidebar</div>
        <div>Main content</div>
      </div>
    </div>

    <div className="border mt-5 mb-5">
      <div className="flex justify-between">
        <div>Sidebar</div>
        <div>Main content</div>
      </div>
    </div>

    <div className="border mt-5 mb-5">
      <div className="flex justify-evenly">
        <div>Sidebar</div>
        <div>Main content</div>
        <div>Main evenly</div>
      </div>
    </div>

    <div className="border mt-5 mb-5">
      <div className="flex items-center">
        <div>sidebar</div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, laudantium? Dicta tempore exercitationem voluptatem, minus commodi, fugit hic corporis rerum doloribus reprehenderit fuga, officia iure maiores a saepe laudantium culpa.
          </p>
        </div>
        <div>Another sidebar</div>
      </div>
    </div>
    <p className="mt-10 mb-10 text-center">Grid</p>

    <div className="container mb-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
        <div className="p-6 rounded-lg bg-sky-500">1st Columns</div>
        <div className="p-6 rounded-lg bg-sky-500">2nd Columns</div>
        <div className="p-6 rounded-lg bg-sky-500">3rd Columns</div>
        <div className="p-6 rounded-lg bg-red-500 col-span-2">4th Columns</div>
        <div className="p-6 rounded-lg bg-sky-500">5th Columns</div>
        <div className="p-6 rounded-lg bg-sky-500">6th Columns</div>
      </div>
    </div>

    <div className="container mb-10">
      <div className="grid grid-flow-col md:grid-rows-2 lg:grid-rows-3 gap-1">
        <div className="p-6 rounded-lg bg-sky-500">1st Columns</div>
        <div className="p-6 rounded-lg bg-sky-500">2nd Columns</div>
        <div className="p-6 rounded-lg bg-sky-500">3rd Columns</div>
        <div className="p-6 rounded-lg bg-red-500">4th Columns</div>
        <div className="p-6 rounded-lg bg-sky-500">5th Columns</div>
        <div className="p-6 rounded-lg bg-sky-500">6th Columns</div>
      </div>
    </div>

    <div className="container">
      <div className="grid grid-cols-6 gap-1">
        <div className="p-6 rounded-lg bg-sky-500 col-span-4 col-start-3 col-end-5">1</div>
        <div className="p-6 rounded-lg bg-sky-500 col-start-1 col-end-3">2</div>
        <div className="p-6 rounded-lg bg-sky-500 col-span-2 col-end-7">3</div>
        <div className="p-6 rounded-lg bg-sky-500 col-start-1 col-end-7">4</div>
      </div>
    </div>

    <p className="mt-10 mb-10 text-center">Layout</p>
    <div className="container mx-auto px-2 bg-red-500">
      <img className="w-64 float-left"
        src="https://plus.unsplash.com/premium_photo-1690487577999-6424ed2ffa67?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="" 
      />
      <img className="w-32 float-right"
        src="https://images.unsplash.com/photo-1720048171209-71f6fc3d7ea4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="" 
      />
      <p className="clear-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ullam, eligendi distinctio placeat repellendus quidem optio impedit dignissimos ipsa magnam ad aspernatur odio eius nihil iusto exercitationem. Dicta, quia eum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ullam, eligendi distinctio placeat repellendus quidem optio impedit dignissimos ipsa magnam ad aspernatur odio eius nihil iusto exercitationem. Dicta, quia eum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ullam, eligendi distinctio placeat repellendus quidem optio impedit dignissimos ipsa magnam ad aspernatur odio eius nihil iusto exercitationem. Dicta, quia eum!
      </p>
    </div>

    <p className="mt-10 mb-10 text-center">Position</p>
    <div className="container px-2 flex gap-5">
      <div className="relative p-8 bg-sky-800 rounded-lg w-32 h-32">
        <div className="absolute top-0 left-0 bg-purple-700 rounded-lg w-24 h-24">
        </div>
      </div>

      <div className="relative p-8 bg-sky-800 rounded-lg w-32 h-32">
        <div className="absolute -top-5 bg-purple-700 rounded-lg w-24 h-24">
        </div>
      </div>

      <div className="relative p-8 bg-sky-800 rounded-lg w-32 h-32">
        <div className="absolute inset-3 bg-purple-700 rounded-lg w-24 h-24">
        </div>
      </div>
    </div>

    <p className="mt-10 mb-10 text-center">Z-index</p>
    <div className="container flex">
      <div className="bg-red-500 z-40 border border-white rounded-full">05</div>
      <div className="bg-red-500 z-30 border border-white rounded-full">04</div>
      <div className="bg-red-500 z-20 border border-white rounded-full">03</div>
      <div className="bg-red-500 z-10 border border-white rounded-full">02</div>
      <div className="bg-red-500 z-0 border border-white rounded-full">01</div>
    </div>

    <p className="mt-10 mb-10 text-center">Object Position</p>
    <div className="container">
      <img src="https://plus.unsplash.com/premium_photo-1671269943736-3ffe2ac923f6?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-none w-64 h-64" />
    </div>

    <p className="mt-10 mb-10 text-center">Border</p>
    <div className="text-black bg-white">
     <header className="w-full py-1 border-b border-l-8 border-t-4">Header</header>
    </div>

    <div className="divide-y divide-red-500 mt-3">
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
    </div>  
    <div>
      <input type="text" className="border-2 border-rose-600 outline-none" />
    </div>
   </>
  );
}
