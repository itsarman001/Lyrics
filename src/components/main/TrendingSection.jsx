import React from "react";
import {Title, Card} from './index'

const TrendingSection = () => {
  return (
    <section className="w-full text-text px-4 py-3 overflow-hidden">
      <div>
        <Title label="Trendig" />
      </div>
      {/* <div className="flex items-center justify-start gap-2 overflow-y-auto">
        {dummyData.map((card) => (
          <Card card={card} />
        ))}
      </div> */}
    </section>
  );
};

export default TrendingSection;
