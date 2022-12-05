import { Button, Carousel, Space, Typography } from "antd";
import { useState } from "react";
import { dimensions } from "../data/dimensions";
import { Icon } from "@ant-design/icons";
import { HeartIcon, ViewsIcon } from "./SVGs";

function Tab({ value, onSelect, isSelected }) {
  const type = isSelected ? { type: "primary" } : {};
  return (
    <Button onClick={onSelect} {...type}>
      {value}
    </Button>
  );
}

function DimensionsTabs() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="dimensions-tabs">
      {["All", "Trending", "Title", "Title", "Title", "Title"].map(
        (item, index) => {
          return (
            <Tab
              key={item}
              isSelected={selectedTab === index}
              onSelect={() => setSelectedTab(index)}
              value={item}
            />
          );
        }
      )}
    </div>
  );
}

function DimensionsPics() {
  return (
    <div className="dimensions-pics">
      <Carousel
        slidesToShow={3}
        draggable
        arrows
        dots={false}
        infinite={false}
        responsive={[
          { breakpoint: 980, settings: { slidesToShow: 2 } },
          { breakpoint: 660, settings: { slidesToShow: 1 } },
        ]}
      >
        {dimensions.map((dimension, index) => {
          return (
            <div key={index} className="carousel-item">
              <img src={dimension.img} alt="blah" />
              {dimension.isLive ? (
                <div className="dimension-live">Live</div>
              ) : null}
              <div className="dimension-reactions">
                <div className="reaction views">
                  <ViewsIcon /> {dimension.views}
                </div>
                <div className="reaction likes">
                  <HeartIcon /> {dimension.likes}
                </div>
              </div>
              <div className="dimension-name">dim. name</div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

function Dimensions() {
  return (
    <div className="dimensions-wrapper">
      <Typography.Title level={4} style={{ fontWeight: "700", margin: 0 }}>
        Dimensions
      </Typography.Title>
      <DimensionsTabs />
      <DimensionsPics />
    </div>
  );
}

export default Dimensions;
