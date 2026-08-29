import { type ReactNode } from "react";
import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
}

const Card = ({ title, description, image, children }: CardProps) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {children && <div className="card-children">{children}</div>}
      </div>
    </div>
  );
};

export default Card;