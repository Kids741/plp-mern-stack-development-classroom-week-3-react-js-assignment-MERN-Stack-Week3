

/**
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export function Card({ children, className }) {
  const baseClasses = 'rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700';
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}

/**
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export function CardHeader({ children, className }) {
  const baseClasses = 'border-b pb-4 mb-4';
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}

/**
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export function CardTitle({ children, className }) {
  const baseClasses = 'text-lg font-semibold';
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <h3 className={combinedClasses}>
      {children}
    </h3>
  );
}

/**
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export function CardContent({ children, className }) {
  const baseClasses = 'py-2';
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}
