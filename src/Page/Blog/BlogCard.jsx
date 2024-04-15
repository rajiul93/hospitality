

const BlogCard = ({item}) => {
    const {category,estate_title,segment_name,description,area,location,image} =item;
    return (
        <div
        rel="noopener noreferrer"
        href="#"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
        data-abc="true"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={image}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {estate_title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            January 21, 2021
          </span>
          <p>
            {description.slice(0,150)}
          </p>
        </div>
      </div>
    );
};

export default BlogCard;