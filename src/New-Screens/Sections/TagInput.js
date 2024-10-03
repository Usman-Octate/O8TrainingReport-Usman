import React, { useState } from "react";
import styled from "styled-components";
import { Title3 } from "../Components/HeroSections/Style";
import { MultiSelect } from "@mantine/core"; // Use MultiSelect for tags functionality
import TagIcon from "../../components/SVGicons/TagIcon";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  padding-top: 14px;
`;

const TagsInput1 = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [tags, setTags] = useState([]); // State for tags

  const handleChange = (newTags) => {
    setTags(newTags); // Update the tags on change
  };

  // Set CSS variables for tag styling
  document.documentElement.style.setProperty("--tag-background-color", themeKeys.hover);
  document.documentElement.style.setProperty("--tag-text-color", themeKeys.primary);

  return (
    <Wrapper>
      <Title3>
        Tags <TagIcon fill={themeKeys.primary} />
      </Title3>
      <MultiSelect
        data={tags}
        value={tags}
        onChange={handleChange} // Update tags
        searchable
        clearable
        placeholder="Enter tags"
        creatable
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={(query) => setTags((current) => [...current, query])}
        styles={{
          input: {
            backgroundColor: "var(--tag-background-color)",
            color: "var(--tag-text-color)",
          },
          value: {
            backgroundColor: "var(--tag-background-color)",
            color: "var(--tag-text-color)",
          },
        }}
      />
    </Wrapper>
  );
};

export default TagsInput1;
