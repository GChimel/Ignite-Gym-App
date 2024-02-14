import { VStack, Image } from 'native-base';

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png';

export function SignIn() {
  return(
    <VStack flex={1} bg='gray.700'>
      <Image
        source={BackgroundImg}
        alt='Pessoas treinando' //Alternativa caso não tenha imagem
        resizeMode='contain' //Redimensionar imagem
        position='absolute' //Posicionando a imagem em toda a tela
      />
      <LogoSvg/>
    </VStack>
  );
}