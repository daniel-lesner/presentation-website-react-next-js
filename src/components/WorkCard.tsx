interface WorkCardProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  stack: Partial<Record<string, string[]>>;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  company,
  duration,
  location,
  description,
  stack,
}) => {
  return (
    <div className="bg-purple-900 w-11/12 md:w-4/5 lg:w-2/3 px-6 md:px-[150px] m-6 py-10 text-white rounded-lg border border-purple-700 shadow-lg">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-lg text-gray-300">{company}</p>
      <p className="text-sm text-gray-400">{duration}</p>
      <p className="text-sm text-gray-400">{location}</p>

      <ul className="mt-4 list-disc pl-6 text-gray-300">
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>

      <div className="mt-4">
        {Object.entries(stack)
          .filter(([, items]) => (items ?? []).length > 0)
          .map(([category, items]) => (
            <div key={category} className="mt-2">
              <p className="font-semibold text-gray-200">{category}:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {(items ?? []).map(tech => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-primary-color text-purple-900 text-sm font-medium shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkCard;
