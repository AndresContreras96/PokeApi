import React from "react";
import Pokeball from "../../assets/pokeball.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../Record/Record.css";

interface Props {
  name: string;
}

const Record: React.FC<Props> = ({ name }) => {
  const navigate = useNavigate();

  let [searchParams, setSearchParams] = useSearchParams();

  const onHandleClick = () => {
    searchParams.delete("name");
    searchParams.append("name", name);
    setSearchParams(searchParams);
  };

  const onHandleDoubleClick = () => {
    navigate(`/${name}`);
  };

  return (
    <div
      onClick={onHandleClick}
      onDoubleClick={onHandleDoubleClick}
      className="record-container"
    >
      <span>{name}</span>
      <img src={Pokeball} alt="pokeball"></img>
    </div>
  );
};

export default Record;
