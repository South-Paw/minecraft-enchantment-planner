import { Box, BoxProps } from '@chakra-ui/react';
import { useMemo } from 'react';
import { MinecraftItemType } from '../../data/types';
import ItemCss from './ItemCSS.png';

const spriteMap = {
  pickaxe: [-96, -464],
  shovel: [-112, -464],
  axe: [-64, -464],
  hoe: [-80, -464],
  sword: [-0, -448],
  shield: [-16, -448],
  helmet: [-80, -416],
  chestplate: [-64, -416],
  leggings: [-112, -416],
  boots: [-48, -416],
  elytra: [-208, -400],
  bow: [-80, -16],
  crossbow: [-32, -368],
  'fishing-rod': [-224, -448],
  trident: [-0, -336],
  shears: [-144, -464],
  'flint-and-steel': [-240, -448],
  'carrot-on-a-stick': [-128, -448],
  'warped-fungus-on-a-stick': [-176, -816],
  book: [-176, -512],
};

export interface ItemSpriteProps extends BoxProps {
  id: MinecraftItemType;
}

export function ItemSprite({ id, ...rest }: ItemSpriteProps) {
  const backgroundPosition = useMemo(() => {
    if (!spriteMap[id]) {
      return '0px 0px';
    }

    const [x, y] = spriteMap[id];

    return `${x}px ${y}px`;
  }, [id]);

  return (
    <Box
      h={4}
      w={4}
      backgroundImage={`url('${ItemCss}')`}
      backgroundPosition={backgroundPosition}
      backgroundRepeat="no-repeat"
      {...rest}
      sx={{
        imageRendering: 'pixelated',
        ...rest.sx,
      }}
    />
  );
}
