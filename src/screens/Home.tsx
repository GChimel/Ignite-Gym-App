import { useState } from 'react';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { VStack, FlatList, HStack, Heading, Text } from 'native-base';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home() {

  // Estado para selecionar o grupo
  const [groupSelected, setGroupSelected] = useState('costas');

  // Estados para Grupos
  const [groups, setGroups] = useState(['costas', 'ombro', 'bíceps', 'triceps'])

  // Estados para Exercícios
  const [exercises, setExercises] = useState(['Puxada Frontal', 'Remada Unilateral', 'Remada Curvada', 'Remada Cavalinho']);
  
  return(
    <VStack flex={1}>
      {/* Header */}
      <HomeHeader/>
      {/* Filtro de grupos */}
      <FlatList
        data={groups} 
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Group
          name={item}
          isActive={groupSelected.toUpperCase() === item.toUpperCase()} //passo todos as string para Maiusculo para evitar erros
          onPress={() => setGroupSelected(item)}
          />
        )} 
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{px: 8}} 
        my={10}
        maxH={10} //Garantir que a lista ocupe somente o espaço necessário
      />

      {/* Exercícios */}
      <VStack flex={1} px={8}>
        <HStack justifyContent='space-between' mb={5}>
          <Heading color='gray.200' fontSize='md'>
            Exercícios
          </Heading>
          <Text color='gray.200' fontSize='sm'>
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <ExerciseCard/>
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{paddingBottom: 20}}
        />

      </VStack>

    </VStack>
  );
}