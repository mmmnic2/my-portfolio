import { SkillGroup } from "./SkillGroup";

export const Skills = ({ skillItems }) => {
    return (
      <div className="container mx-auto py-8">
        {skillItems.map((skillCategory, index) => (
          <SkillGroup key={index} title={skillCategory.title} items={skillCategory.item} />
        ))}
      </div>
    );
  };