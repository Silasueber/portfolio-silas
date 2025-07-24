import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectCard({title, tagline, description, image, link}: ProjectCardProps) {
  return (
    <a href={link} target='_blank'>
    <div className="flex gap-8 items-center">
      <div className="relative w-[285px] h-[161px] flex-shrink-0 hidden md:block">
        <Image
          src={image}
          alt="Screenshot of Rettungshundle"
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="italic text-gray-600">
          {tagline} 
        </p>
        <p>
         {description}
        </p>
      </div>
    </div>
    <div className="relative w-[285px] h-[161px] flex-shrink-0 block md:hidden">
        <Image
          src={image}
          alt="Screenshot of Rettungshundle"
          fill
          className="object-cover rounded-md"
        />
      </div>

    </a>
  );
}
