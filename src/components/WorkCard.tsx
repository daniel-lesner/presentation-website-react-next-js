interface WorkCardProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  stack: Partial<Record<string, string[]>>;
}

export default function WorkCard({
  title,
  company,
  duration,
  location,
  description,
  stack,
}: WorkCardProps) {
  return (
    <div className="bg-secondary-color w-11/12 md:w-4/5 lg:w-1/2 m-6 px-4 md:px-16 py-8 text-white rounded-lg border border-purple-700 shadow-lg">
      <div className="mt-6 flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-lg text-gray-300">{company}</p>
          <p className="text-sm text-gray-400">{duration}</p>
          <p className="text-sm text-gray-400">{location}</p>
          <ul className="mt-4 list-disc pl-6 text-gray-300 text-md">
            {description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          {Object.entries(stack)
            .filter(([, items]) => (items ?? []).length > 0)
            .map(([category, items]) => (
              <div key={category} className="mt-2">
                <p className="font-semibold text-gray-200">{category}:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {items!.map(tech => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-primary-color text-secondary-color text-sm font-medium shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
