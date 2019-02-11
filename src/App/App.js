import React from "react";
import { Scroller, ScrollerNative } from "@enact/moonstone/Scroller";
import Spottable from "@enact/spotlight/Spottable/Spottable";
import MoonstoneDecorator from "@enact/moonstone/MoonstoneDecorator";
import { VirtualList, VirtualListNative } from "@enact/moonstone/VirtualList";

const SpottableDiv = Spottable("div");

const DATASIZE = 70;

const renderItem = ({ index, ...rest }) => {
  return <SpottableDiv {...rest} key={index}>{`${index} item`}</SpottableDiv>;
};

const itemGenerator = () => {
  const ary = [];
  for (let i = 0; i < DATASIZE; i++) {
    ary.push(<SpottableDiv key={i}>{`${i} item`}</SpottableDiv>);
  }
  return ary;
};

class App extends React.Component {
  render() {
    return (
      <div {...this.props} style={{ display: "flex" }}>
        <div>
          <div>ScrollerNative</div>
          <ScrollerNative style={{ height: 265, width: 300 }}>
            {itemGenerator()}
          </ScrollerNative>
        </div>
        <div>
          <div>Scroller</div>
          <Scroller style={{ height: 265, width: 300 }}>
            {itemGenerator()}
          </Scroller>
        </div>
        <div style={{ height: 265, width: 300 }}>
          <div>VirtualListNative</div>
          <VirtualListNative
            dataSize={DATASIZE}
            itemRenderer={renderItem}
            itemSize={36}
          />
        </div>
        <div style={{ height: 265, width: 300 }}>
          <div>VirtualList</div>
          <VirtualList
            dataSize={DATASIZE}
            itemRenderer={renderItem}
            itemSize={36}
          />
        </div>
      </div>
    );
  }
}

export default MoonstoneDecorator(App);
