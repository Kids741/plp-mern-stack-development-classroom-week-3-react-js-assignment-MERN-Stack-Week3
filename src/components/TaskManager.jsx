import { useState, useEffect } from 'react';
import { Plus, Check, Trash2, Filter } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Button } from './ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';

/**
 * @typedef {Object} Task
 * @property {string} id
 * @property {string} text
 * @property {boolean} completed
 * @property {Date} createdAt
 */

// Allowed filter types: 'all', 'active', 'completed'

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date(),
      };
      setTasks(prev => [...prev, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const filterButtons = [
    { type: 'all', label: 'All' },
    { type: 'active', label: 'Active' },
    { type: 'completed', label: 'Completed' },
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Check className="text-blue-600" size={24} />
          Task Manager
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Add new task */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <Button onClick={addTask} className="px-4">
            <Plus size={16} />
          </Button>
        </div>

        {/* Filter buttons */}
        <div className="flex gap-2 mb-4">
          <Filter size={16} className="text-gray-500 mt-2" />
          {filterButtons.map(({ type, label }) => (
            <Button
              key={type}
              variant={filter === type ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter(type)}
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Task list */}
        <div className="space-y-2">
          {filteredTasks.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              {filter === 'all' 
                ? 'No tasks yet. Add one above!' 
                : `No ${filter} tasks.`}
            </p>
          ) : (
            filteredTasks.map(task => (
              <div
                key={task.id}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                  task.completed
                    ? 'bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700'
                    : 'bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600'
                }`}
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    task.completed
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 hover:border-green-500 dark:border-gray-600'
                  }`}
                >
                  {task.completed && <Check size={12} />}
                </button>
                <span
                  className={`flex-1 transition-all ${
                    task.completed
                      ? 'text-gray-500 line-through'
                      : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {task.text}
                </span>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteTask(task.id)}
                  className="p-1"
                >
                  <Trash2 size={14} />
                </Button>
              </div>
            ))
          )}
        </div>

        {/* Task summary */}
        {tasks.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Total: {tasks.length}</span>
              <span>Completed: {tasks.filter(t => t.completed).length}</span>
              <span>Active: {tasks.filter(t => !t.completed).length}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
