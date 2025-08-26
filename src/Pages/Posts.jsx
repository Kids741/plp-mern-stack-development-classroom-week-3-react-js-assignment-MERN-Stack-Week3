import PostList from '../components/PostList';

export default function Posts() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Posts
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse through a collection of posts fetched from JSONPlaceholder API. 
            Search, filter, and paginate through the content.
          </p>
        </div>
        
        <PostList />
      </div>
    </div>
  );
}
