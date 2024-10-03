import React, { useState } from "react";
import styled from "styled-components";
import { Title3 } from "../Components/HeroSections/Style";
import TagInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css"; // Import CSS for react-tagsinput
import TagIcon from "../../components/SVGicons/TagIcon";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  padding-top: 14px;
`;

const TagsInput = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [tags, setTags] = useState([]);

  const handleChange = (newTags) => {
    setTags(newTags);
  };

  // Set CSS variables
  document.documentElement.style.setProperty(
    "--tag-background-color",
    themeKeys.hover
  );
  document.documentElement.style.setProperty(
    "--tag-text-color",
    themeKeys.primary
  );

  return (
    <Wrapper>
      <Title3>
        Tags <TagIcon fill={themeKeys.primary} />
      </Title3>
      <TagInput value={tags} onChange={handleChange} />
     
    </Wrapper>
  );
};

export default TagsInput;
