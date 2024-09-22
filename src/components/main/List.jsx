import React from "react";
import { Title, Paragraph } from "./index";
import { Link } from "react-router-dom";
import { EllipsisVertical } from "lucide-react";

const List = ({
  sectionTitle,
  musicTitle,
  artist,
  posterSrc,
  streamLink,
  moreBtn,
  ...rest
}) => {
  return (
    <section>
      <div className="flex items-center justify-between gap-3">
        <Title children={sectionTitle} />
        <button className="min-w-fit px-3 py-2 bg-secondary hover:bg-accent text-text">
          {moreBtn}
        </button>
      </div>
      <div>
        <ul>
          <li>
            <Link to={streamLink}>
              <div>
                <img src={posterSrc} alt={musicTitle} />
              </div>
              <div>
                <Title label={musicTitle} />
                <Paragraph label={artist} />
              </div>
              <div>
                <button className="p-1">
                  <EllipsisVertical size={20}/>
                </button>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default List;
