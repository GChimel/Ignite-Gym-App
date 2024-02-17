import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import { useNavigation } from '@react-navigation/native';

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignUp() {

  // Navegação 
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    //ScrollView para permitir rolagem
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }} //Para preencher toda a tela
      showsVerticalScrollIndicator={false}  //Esconde a barra de rolagem
    > 
      <VStack flex={1} bg='gray.700' px={10}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg} //Entende que é a imagem padrão e faz com que carrege a imagem mais rapidamente
          alt='Pessoas treinando' //Alternativa caso não tenha imagem
          resizeMode='contain' //Redimensionar imagem
          position='absolute' //Posicionando a imagem em toda a tela
        />

        {/* Logo & subtitulo */}
        <Center my={20}>
          <LogoSvg/>
          <Text color='gray.100' fontSize='sm'>
            Treine sua mente e seu corpo
          </Text>
        </Center>

        {/* Conteúdo principal */}
        <Center>
          <Heading color='gray.100' fontSize='xl' mb={6} fontFamily={'heading'}>
            Crie sua conta
          </Heading>

          <Input 
            placeholder='Nome'
          />
  
          <Input 
            placeholder='E-mail'
            keyboardType='email-address' //Tipo de teclado para email
            autoCapitalize='none' //Desabilita a primeira letra maiuscula	
          />

          <Input 
            placeholder='Senha'
            secureTextEntry //Esconde a senha
          />

          <Button
            title='Criar e acessar'
          />
        </Center>

        <Button
          mt={24}
          title='Voltar para o login'
          variant='outline'
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}