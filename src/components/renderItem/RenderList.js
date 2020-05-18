import React from 'react';
import {ScrollView} from 'react-native';

import {GridItem, CardImage, CardTitle} from './styles';

const RenderList = (itemData) => {
  return (
    <ScrollView>
      <GridItem>
        <CardImage
          key={itemData.item.id}
          source={
            itemData.item.img
              ? {uri: itemData.item.img}
              : require('../../asstets/Pokeball.png')
          }
        />
        <CardTitle
          key={itemData.item.name}
          numberOfLines={2}
          ellipsizeMode="middle">
          {itemData.item.name}
        </CardTitle>
      </GridItem>
    </ScrollView>
  );
};

export default RenderList;
