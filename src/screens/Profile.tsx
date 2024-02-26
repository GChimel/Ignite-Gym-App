import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { VStack, ScrollView, Center, Skeleton, Text, Heading } from 'native-base';
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

const PHOTO_SIZE = 33;

export function Profile() {

  const [photoIsLoading, setPhotoIsLoading] = useState(false)

  return(
    <VStack flex={1}>
      <ScreenHeader title='Perfil'/>
      <ScrollView>
        {/* PHOTO */}
        <Center mt={6} px={10}>
          {
            photoIsLoading ?
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded={'full'}
              startColor={'gray.500'}
              endColor={'gray.400'}
            />
            :
            <UserPhoto 
              source={{uri: 'https://github.com/GChimel.png'}}
              alt='foto do usuário'
              size={PHOTO_SIZE}
            />
          }

          <TouchableOpacity>
            <Text color={'green.500'} fontWeight={'bold'} fontSize={'md'} mt={2} mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          {/* Inputs */}
          <Input
            placeholder='Nome'
            bg={'gray.600'}
          />

          <Input
            value='E-mail@example.com'
            bg={'gray.600'}
            isDisabled
          />
        </Center>

        <VStack px={10} mt={8} mb={9}>
          <Heading color={'gray.200'} fontSize={'md'} mb={2}>
            Alterar senha
          </Heading>
          <Input
            bg={'gray.600'}
            placeholder='Senha antiga'
            secureTextEntry
          />

          <Input
            bg={'gray.600'}
            placeholder='Nova antiga'
            secureTextEntry
          />

          <Input
            bg={'gray.600'}
            placeholder='Confirme nova senha'
            secureTextEntry
          />

          <Button
            title='Atualizar'
            mt={4}
            mb={8}
          />

        </VStack>

      </ScrollView>
    </VStack>
  );
}