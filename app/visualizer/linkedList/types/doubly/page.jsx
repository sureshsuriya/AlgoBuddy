"use client"; 

import Animation from "@/app/visualizer/linkedList/types/doubly/animation";
import Navbar from "@/app/components/navbarinner";
import Breadcrumbs from "@/app/components/ui/Breadcrumbs";
import ArticleActions from "@/app/components/ui/ArticleActions";
import Content from "@/app/visualizer/linkedList/types/doubly/content"; 
import Quiz from '@/app/visualizer/linkedList/types/doubly/quiz'; 
import CodeBlock from "@/app/visualizer/linkedList/types/doubly/codeBlock"; 
import ExploreOther from '@/app/components/ui/exploreOther'; 
import Footer from '@/app/components/footer';
import BackToTopButton from '@/app/components/ui/backtotop';

export default function Page() {
  const paths = [
    { name: "Home", href: "/" },
    { name: "Visualizer", href: "/visualizer" },
    { name: "Linked List : Doubly", href: "" },
  ];

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="pt-6 pb-16 bg-white dark:bg-[#0f0f0f] text-[#1a1a1a] dark:text-[#f5f5f5]">
        <main className="max-w-4xl mx-auto px-6 md:px-12">
          {/* 1. Navigation Tracking */}
          <div className="mt-2 mb-4">
            <Breadcrumbs paths={paths} />
          </div>
          
          {/* 2. Unified Header Block */}
          <div className="flex items-center flex-col">
            <div className="flex">
              <p className="uppercase tracking-wide bg-[#f0fdf4] text-[#16a34a] border border-[#bbf7d0] px-4 py-1 mb-2 rounded-full text-sm font-semibold">
                Linked List
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#1a1a1a] dark:text-white mb-0">
              Doubly Linked List
            </h1>
            <ArticleActions />
          </div>
          
          <div className="h-px max-w-4xl mx-auto my-10 bg-gradient-to-r from-transparent via-[#d1d7dc] dark:via-[#333] to-transparent"></div>
          
          {/* 3. Text Sections */}
          <Content />

          {/* 4. Main Playground Logic Workspace */}
          <section className="mt-12">
            <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-8">
              Visualize Doubly Linked List Operations
            </p>
            <Animation />
          </section>

          {/* 5. Interactive Knowledge Check */}
          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mt-16 mb-8">
            Test Your Knowledge before moving forward!
          </p>
          <Quiz />

          {/* 6. Language Code Selection Panel */}
          <CodeBlock />

          {/* 7. Module Switch Footer Links */}
          <ExploreOther
            title="Explore Other Types"
            links={[
              { text: "Singly Linked List", url: "../singly" },
              { text: "Circular Linked List", url: "../circular" },
            ]}
          />
        </main>
      </div>

      <BackToTopButton />
      <Footer />
    </>
  );
}