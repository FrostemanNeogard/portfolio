import * as Styled from "./styled";

type WorkExperiencesProps = {
  startDate: string;
  endDate: string;
  roleName: string;
  companyName: string;
  jobDescription: string;
  tags: string[];
};
export const WorkArticle = ({
  startDate,
  endDate,
  roleName,
  companyName,
  jobDescription,
  tags,
}: WorkExperiencesProps) => {
  return (
    <Styled.WorkArticle>
      <h3>
        {startDate} - {endDate}
      </h3>
      <h2>
        <strong>{roleName}</strong> • {companyName}
      </h2>
      <p>{jobDescription}</p>
      <div>
        {tags.map((tag, index) => (
          <span key={`work-tag-${companyName}-${roleName}-${index}`}>
            {tag}
          </span>
        ))}
      </div>
    </Styled.WorkArticle>
  );
};
