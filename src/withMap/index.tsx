import React from 'react';
import Map, { MapProps } from '../Map';

export interface WithMapProps {
  BMap?: typeof BMap;
  container?: string | HTMLDivElement;
  map?: BMap.Map;
}

export default function withMap(Comp: React.ComponentClass<WithMapProps>) {
  return React.forwardRef((props: MapProps, ref?: React.Ref<any>) => (
    <Map {...props}>
      {(mapProps: WithMapProps) => {
        return <Comp ref={ref} {...props} {...mapProps} />
      }}
    </Map>
  ))
}