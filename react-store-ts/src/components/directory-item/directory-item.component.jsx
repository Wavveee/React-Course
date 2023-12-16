import { useNavigate } from "react-router-dom";

import {DirectoryItemContainer, BackgroundImage, Body} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate()

  const onNavigateHeandler = () => navigate(route)

  return (
    <DirectoryItemContainer onClick={onNavigateHeandler}>
      <BackgroundImage imageurl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
