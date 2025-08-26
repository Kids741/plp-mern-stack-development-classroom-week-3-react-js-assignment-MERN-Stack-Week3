import { CheckCircle, Users, Search, Palette } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Task Management',
      description: 'Create, organize, and track your tasks with an intuitive interface. Mark tasks as complete and filter by status.',
    },
    {
      icon: Search,
      title: 'API Integration',
      description: 'Browse and search through posts from JSONPlaceholder API with pagination and real-time filtering.',
    },
    {
      icon: Palette,
      title: 'Theme Support',
      description: 'Switch between light and dark themes with persistent preferences stored locally.',
    },
    {
      icon: Users,
      title: 'Responsive Design',
      description: 'Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to{' '}
              <span className="text-blue-600 dark:text-blue-400">TaskManager</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              A modern React application showcasing task management, API integration, 
              and responsive design with Tailwind CSS. Built with TypeScript and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tasks">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started with Tasks
                </Button>
              </Link>
              <Link to="/posts">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Browse Posts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Features & Capabilities
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              This application demonstrates modern React development patterns and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <CardTitle className="text-lg">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built With Modern Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              This project showcases the latest tools and frameworks in React development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'React 18',
              'TypeScript',
              'Tailwind CSS',
              'React Router',
              'React Query',
              'Vite',
              'Lucide Icons',
              'Local Storage'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-gray-900 dark:text-white font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Explore?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Try out the task management features or browse the API integration examples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tasks">
              <Button size="lg" className="w-full sm:w-auto">
                Manage Tasks
              </Button>
            </Link>
            <Link to="/posts">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                View Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
