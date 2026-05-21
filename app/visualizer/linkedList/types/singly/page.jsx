import Animation from "@/app/visualizer/linkedList/types/singly/animation";
import Navbar from "@/app/components/navbarinner";
import Breadcrumbs from "@/app/components/ui/Breadcrumbs";
import ArticleActions from "@/app/components/ui/ArticleActions";
import Footer from '@/app/components/footer';
import BackToTopButton from '@/app/components/ui/backtotop';

export const metadata = {
  title: 'Singly Linked List Implementation | Visualize Linked List in JS, C, Python, Java',
  description: 'Explore Singly Linked List implementation with interactive visualizations and real-time code examples in JavaScript, C, Python, and Java. Learn insertion, deletion, and traversal with step-by-step animations. Perfect for DSA beginners and interview preparation.',
  keywords: [
    'Singly Linked List Implementation', 'Singly Linked List Visualization', 'Linked List in JavaScript',
    'Linked List in C', 'Linked List in Python', 'Linked List in Java', 'DSA Linked List'
  ],
  robots: 'index, follow',
};

export default function Page() {
  const paths = [
    { name: "Home", href: "/" },
    { name: "Visualizer", href: "/visualizer" },
    { name: "Linked List : Singly", href: "" },
  ];

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="pt-6 pb-16 bg-white dark:bg-[#0f0f0f] text-[#1a1a1a] dark:text-[#f5f5f5]">
        <main className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mt-2 mb-4">
            <Breadcrumbs paths={paths} />
          </div>
          <div className="flex items-center flex-col">
            <div className="flex">
              <p className="uppercase tracking-wide bg-[#f0fdf4] text-[#16a34a] border border-[#bbf7d0] px-4 py-1 mb-2 rounded-full text-sm font-semibold">
                Linked List
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#1a1a1a] dark:text-white mb-0">
              Singly Linked List
            </h1>
            <ArticleActions />
          </div>
          <div className="h-px max-w-4xl mx-auto my-10 bg-gradient-to-r from-transparent via-[#d1d7dc] dark:via-[#333] to-transparent"></div>
          
          {/* This renders your animation wrapper along with Content, Quiz, and Code blocks */}
          <Animation />
        </main>
      </div>

      <BackToTopButton />
      <Footer />
    </>
  );
}